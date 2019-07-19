/*
*
  * Genapp AWS API CONTROLLER
*
*/

/* eslint-disable no-console */
/* eslint-disable consistent-return */

import AWS from 'aws-sdk';
import genappParams from './params/params.genapp';


// Instantiate AWS SDK here
const MEDIALIVE = new AWS.MediaLive();


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

export async function addGenapp(req, res) {
  console.log("req.body is", req.body)
    try {
      await MEDIALIVE.channelCreate( paramsCheck( genappParams, req), (err, genappData ) => {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log( genappData ); // successful response
            return res.status(200).send({
              message: genappData,
            });
          });
    } catch (e) {
      return res.status(400).end(e);
    }
}

