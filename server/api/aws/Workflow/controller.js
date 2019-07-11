/*
*
  * WORKFLOW API CONTROLLER
*
*/

/* eslint-disable no-console */
/* eslint-disable consistent-return */

import AWS from 'aws-sdk';
import inputParams from './params/mediaLive.Input';
import channelParams from './params/mediaLive.Channel';
import mpchannelParams from './params/mediaPackage.mpchannel';
import ssmParams from './params/ssm.params';


// Instantiate AWS SDK here
const ML = new AWS.MediaLive();
const MP = new AWS.MediaPackage();
const S3 = new AWS.S3();
const ssm = new AWS.SSM();

const params = {};
const delChParams = {
  ChannelId: '3062781' /* required */
};

export function *uniqueID(input){
  let userinput = input;
  console.log("userinput is ", userinput);
  let randNum = Math.floor(Math.random() *1000)+1;
  userinput = userinput+randNum;
  return userinput;
}

function textChunk(input,chunkSize){
  console.log("Input received is :", input)
  let data = input;
  let chunkedData = data.substr(data.length - chunkSize);
  console.log("chunked data is ", chunkedData);
  return chunkedData;
}


// Generic function to handle user input, params modification and route management
export function paramsCheck(importParams, req) {
  console.log("importParams in paramsCheck is: ", importParams);
  let params = importParams;
  console.log("req.body length is :", Object.keys(req.body).length)
  if (Object.keys(req.body).length == 0) {
     return importParams
  } else {
    Object.keys(req.body).map(key => {
      console.log("key is ", key);
      if (key in params) {
        params[key] = req.body[key]
      } 
    })
    return params
   } 
}

export function insertInputToChannel(channelParams, id) {
  console.log("channelParams in insertInputToChannel is::: ", channelParams)
  console.log("id in insertInputToChannel is::: ",id)
  try {
    const params = channelParams;
    params['InputAttachments'] = [{
      'InputId': id,
      'InputSettings': {
        'SourceEndBehavior': 'CONTINUE',
        'NetworkInputSettings': {}
      }
    }]
    return params;
  } catch (e) {
    console.log(e)
  }
}

export function insertMediaPackageToChannel(channelParams, mediaPackage) {
  console.log("channelParams in insertMediaPackageToChannel is: ", channelParams);
  console.log("mediaPackage in insertMediaPackageToChannel is: ", mediaPackage);

  console.log('username in insetMediaPackageToChannel function 0 is :: ', mediaPackage.HlsIngest.IngestEndpoints[0].Username);
  console.log('username in insetMediaPackageToChannel function 1 is :: ', mediaPackage.HlsIngest.IngestEndpoints[1].Username);
  try {
    const params = channelParams;
    params['Destinations'].push({
          "Id": mediaPackage.Id,
          "Settings": [{
              "Url": mediaPackage.HlsIngest.IngestEndpoints[0].Url,
              "Username": mediaPackage.HlsIngest.IngestEndpoints[0].Username,
              "PasswordParam": '/api_mediaPackage/destination/' + mediaPackage.HlsIngest.IngestEndpoints[0].Username + '/HLS'
            },
            {
              "Url": mediaPackage.HlsIngest.IngestEndpoints[1].Url,
              "Username": mediaPackage.HlsIngest.IngestEndpoints[1].Username,
              "PasswordParam": '/api_mediaPackage/destination/' + mediaPackage.HlsIngest.IngestEndpoints[1].Username + '/HLS'
            }
          ]
        })
    console.log("Reference mediaPackage ID is:: ", params['EncoderSettings']['OutputGroups'][0]);
    //Link stream to destination
    params['EncoderSettings']['OutputGroups'][0]['OutputGroupSettings']['HlsGroupSettings']['Destination']['DestinationRefId'] = mediaPackage.Id
    console.log("params[PasswordParam-0]", params.Destinations[0].Settings)
    return params;
  } catch (e) {
    console.log(e)
  }
}

export function createSocialStream(channelParams, req) {
  console.log("channelParams in createSocialStream is ", channelParams)
  console.log("req in createSocialStream is ", req );
  
  try {
    const params = channelParams;
    let socialSSMParams = [{
      "Username": req.body.Username,
      "Password": req.body.streamKey
    }, {
      "Username": req.body.Username,
      "Password": req.body.backupStreamKey
    }
  ];
    //create SSM Params with MediaPackage response
    createUniqueSSMParams(ssmParams, socialSSMParams);
    //assign values to Destination for socail media stream
    params['Destinations'].push({
          "Id": req.body.socialId,
          "Settings": [{
            "StreamName": req.body.streamKey,
            "Url": req.body.Url,
            "Username": req.body.Username,
            "PasswordParam": '/api_mediaPackage/destination/' + req.body.Username +'-'+textChunk(req.body.streamKey, 16) + '/HLS'
            },
            {
              "StreamName": req.body.backupStreamKey,
              "Url": req.body.Url,
              "Username": req.body.Username,
              "PasswordParam": '/api_mediaPackage/destination/' + req.body.Username + '-' + textChunk(req.body.backupStreamKey, 16) + '/HLS'
            },
          ]
        })
    //Link stream to destination
     params['EncoderSettings']['OutputGroups'].push({
       'OutputGroupSettings': {
         RtmpGroupSettings: {
          //  AuthenticationScheme: AKAMAI | COMMON,
          //  CacheFullBehavior: DISCONNECT_IMMEDIATELY | WAIT_FOR_SERVER,
          //  CacheLength: 'NUMBER_VALUE',
          //  CaptionData: ALL | FIELD1_608 | FIELD1_AND_FIELD2_608,
          //  InputLossAction: EMIT_OUTPUT | PAUSE_OUTPUT,
          //  RestartDelay: 'NUMBER_VALUE'
         },
       },
      'Outputs': [{
          'VideoDescriptionName': 'video_1080p30',
          'AudioDescriptionNames': [
            'audio_1'
          ],
          'CaptionDescriptionNames': [],
         'OutputSettings': {
             RtmpOutputSettings: {
               Destination: {
                 /* required */
                 DestinationRefId: req.body.socialId, //'STRING_VALUE'
               },
               CertificateMode: 'SELF_SIGNED', //SELF_SIGNED | VERIFY_AUTHENTICITY,
               ConnectionRetryInterval: 5,//'NUMBER_VALUE',
               NumRetries: 5,//'NUMBER_VALUE'
             },
         }
        }],
      //  'Name': req.body.socialId
     })
    console.log(" params['Destinations'] in social media stream is:: ", params['Destinations'])
    return params;
  } catch (e) {
    console.log(e)
  }

}

export async function createSSMParams(ssmParams, response = []) {
  console.log("ssmParams in createSSMParams is ", ssmParams);
  console.log("response in createSSMParmas is ", response)
  let params = ssmParams;
  response.forEach((each) => {
    params['Name'] = '/api_mediaPackage/destination/' + each.Username + '/HLS';
    params['Value'] = each.Password;
    console.log("params['Name'] is", params['Name'])
    console.log("params['Value] is", params['Value'])
    //Create SSM Parameters
    ssm.putParameter(params, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log("ssm parameters creation aws response :: ", data); // successful response
    });
  })
}

export async function createUniqueSSMParams(ssmParams,response=[]){
  console.log("ssmParams in createSSMParams is ", ssmParams);
  console.log("response in createSSMParmas is ", response)
  let params = ssmParams;
  response.forEach((each) =>{
    params['Name'] = '/api_mediaPackage/destination/' + each.Username + '-' + textChunk(each.Password, 16) + '/HLS';
    params['Value'] = each.Password;
    console.log("params['Name'] is", params['Name'])
    console.log("params['Value] is", params['Value'])
    //Create SSM Parameters
     ssm.putParameter(params, (err, data) => {
       if (err) console.log(err, err.stack); // an error occurred
       else console.log("ssm parameters creation aws response :: ", data); // successful response
     });
  })
}

export async function addMpchannel(params,req) {
  let mpChannelData = {};
  console.log("req.body is", req.body)
  try {
    await MP.createChannel(paramsCheck(params, req), (err, mpchannel) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log("mpchannel inside addMpChannel function is ::", mpchannel); // successful response
      mpChannelData = mpchannel
    });
    return mpChannelData
  } catch (e) {
    console.log("e in nedia package", e)
  }
}

export async function addWorkflow(req, res) {
  const workflowData = {};
  console.log("req.body is", req.body)

    try {
      await ML.createInput(paramsCheck(inputParams, req), (err, inputData) => {
        //Create Input 
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(inputData); // successful response
        workflowData['inputData'] = inputData;
        console.log("inputData.Id is:: ", inputData.Input.Id);
        // Create Media Package Channel
        if(req.body.streamKey){
          //Create Social Media Stream
          try{
              // Create MediaLive Channel            
              setTimeout(function () {
                ML.createChannel(
                  insertInputToChannel(
                   createSocialStream(
                     paramsCheck(channelParams,req),req
                     ), inputData.Input.Id),
                  (err, channelData) => {
                    if (err) console.log(err, err.stack); // an error occurred
                    else console.log(channelData); // successful response
                    workflowData['channelData'] = channelData
                    return res.status(200).send({
                      message: workflowData,
                    });
                  });
              }, 200)
          }catch(e){
            console.log("Social media stream error",e)
          }
        }else{
          (async function (reqData) {
            try {
              await MP.createChannel(paramsCheck(mpchannelParams, reqData), (err, mpChannelData) => {
                if (err) console.log(err, err.stack); // an error occurred
                else console.log("mpchannel inside addMpChannel function is ::", mpChannelData); // successful response
                //create SSM Params with MediaPackage response
                createSSMParams(ssmParams, mpChannelData.HlsIngest.IngestEndpoints)
                workflowData['mpChannelData'] = mpChannelData;
                console.log("workflow in mediaPackage create Channel is ", workflowData);
                // Create MediaLive Channel            
                setTimeout(function () {
                  ML.createChannel(
                    insertInputToChannel(
                      insertMediaPackageToChannel(
                        paramsCheck(channelParams, req), mpChannelData
                      ), inputData.Input.Id),
                    (err, channelData) => {
                      if (err) console.log(err, err.stack); // an error occurred
                      else console.log(channelData); // successful response
                      workflowData['channelData'] = channelData
                      return res.status(200).send({
                        message: workflowData,
                      });
                    });
                }, 200)
              })
            } catch (e) {
              console.log("Create MediaPackage channel error", )
            }
          })(req)
        }   
      });
    } catch (e) {
      console.log("Create input catch error", e);
    }
}

/*
 * Create Media Live Input
 */
export async function createInput(req, res) {
  const dataToSend = {};
  console.log('req in create/input is :', req.body);
  try {
    await ML.createInput(paramsCheck(inputParams, req), (err, inputData) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(inputData); // successful response
      console.log("inputData.Id is:: ", inputData.Input.Id)
      dataToSend['inputData'] =inputData
      return res.status(200).send({
        message: dataToSend,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }
}

/*
  * Create Media Live Channel
*/
export async function createChannel(req, res) {
  const dataToSend = {};
  console.log('req in create/channel is :', req.body);
  try {
    await ML.createChannel(paramsCheck(channelParams,req), (err, channelData) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(channelData); // successful response
      dataToSend['channelData'] =channelData
      return res.status(200).send({
        message: dataToSend,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }

}

/*
 * Delete Media Live Channel
 */
export async function deleteChannel(req, res) {
  try {
    await ML.deleteChannel(delChParams, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
      return res.status(200).send({
        message: data,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }

}

/*
 * START Media Live Channel
 */

export async function startChannel(req, res) {
  // console.log('req in startChannel is :', req.body);
  try {
    await ML.startChannel({ ChannelId: req.params.ChannelId }, (err, data) => {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
    return res.status(200).send({
      message: data,
    });
  });
  } catch (e) {
    return res.status(400).end(e);
  }
  
}

/*
 * STOP Media Live Channel
 */

export async function stopChannel(req, res) {
  // console.log('req in startChannel is :', req.body);
  try {
    await ML.stopChannel({
      ChannelId: req.params.ChannelId
    }, (err, data) => {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
      return res.status(200).send({
        message: data,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }

}

/*
 * Get Media Live Channel List
 */
export async function getChannelList(req, res) {
    console.log('req in list/channel is :', req.body);
  try {  
    await ML.listChannels(paramsCheck(listParams, req), (err, data) => {
      console.log('modified param list is ', listParams);
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
      return res.status(200).send({
        message: data,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }
}

/*
 * Get S3 Bucket List
 */
export async function getBucketList(req, res) {
  console.log('req in list/bucket is :', req.body);
  try {
    await S3.listBuckets(paramsCheck(params, req), (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
      return res.status(200).send({
        message: data,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }
}

