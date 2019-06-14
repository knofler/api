/* eslint-disable no-console */
/* eslint-disable consistent-return */

import AWS from 'aws-sdk';
import listParams from './params/params.medialive.list';
import channelParams from './params/params.medialive.channel';


// Instantiate AWS SDK here
const ML = new AWS.MediaLive();
const S3 = new AWS.S3();
const params = {};

// Generic function to handle user input, params modification and route management
function paramsCheck(importParams, req) {
  let params = importParams;
  console.log("req.body length is :", Object.keys(req.body).length)
  if (Object.keys(req.body).length == 0) {
     return importParams
  } else {
    Object.keys(req.body).map(key => {
      params[key] = req.body[key]
    })
    return params
   } 
}


/*
  * Create Media Live Channel
*/
export async function createChannel(req, res) {
  console.log('req in create/channel is :', req.body);
  try {
    await ML.createChannel(paramsCheck(channelParams,req), (err, data) => {
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

