/* eslint-disable no-console */
/* eslint-disable consistent-return */

import AWS from 'aws-sdk';
import inputParams from './params/params.medialive.input';


// Instantiate AWS SDK here
const ML = new AWS.MediaLive();



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
 * Create Media Live Input
 */
export async function addInput(req, res) {
  console.log('req in create/input is :', req.body);
  try {
    await ML.createInput(paramsCheck(inputParams, req), (err, inputData) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(inputData); // successful response
      console.log("inputData.Id is:: ", inputData.Input.Id)
      return res.status(200).send({
        message: inputData,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }
}

