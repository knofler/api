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


// Instantiate AWS SDK here
const ML = new AWS.MediaLive();
const S3 = new AWS.S3();
const params = {};
const delChParams = {
  ChannelId: '3062781' /* required */
};


// Generic function to handle user input, params modification and route management
function paramsCheck(importParams, req) {
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

function insertInputToChannel(channelParams, id) {
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

export async function addWorkflow(req, res) {
  const workflowData = {};
  console.log("req.body is", req.body)

    try {
      await ML.createInput(paramsCheck(inputParams,req), (err, inputData) => {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(inputData); // successful response
        workflowData['inputData'] = inputData;
        console.log("inputData.Id is:: ", inputData.Input.Id)
        try {
          ML.createChannel(paramsCheck(insertInputToChannel(channelParams, inputData.Input.Id), req), (err, channelData) => {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(channelData); // successful response
            workflowData['channelData'] =channelData
            return res.status(200).send({
              message: workflowData,
            });
          });
        } catch (e) {
          return res.status(400).end(e);
        }
      });
    } catch (e) {
      console.log(e)
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

