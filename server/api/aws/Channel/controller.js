/*
*
  * CHANNEL API CONTROLLER
*
*/

/* eslint-disable no-console */
/* eslint-disable consistent-return */

import AWS from 'aws-sdk';

import channelParams from './params/params.medialive.channel';
import listParams from './params/params.medialive.list';

// Instantiate AWS SDK here
const ML = new AWS.MediaLive();
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



/*
  * Create Media Live Channel
*/
export async function addChannel(req, res) {
  console.log('req in create/channel is :', req.body);
  try {
    await ML.createChannel(paramsCheck(channelParams,req), (err, channelData) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(channelData); // successful response
      return res.status(200).send({
        message: channelData,
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
export async function getChannel(req, res) {
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

