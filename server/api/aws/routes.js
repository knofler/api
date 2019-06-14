/*
* AWS Routes
*
* This contains Routes for the AWS Resources.
*/


import { Router } from 'express';
import * as AWSController from './controller';
const AWSRouter = new Router();

// Create Media Live Channel
AWSRouter.route('/create/channel').post(AWSController.createChannel);

// Get Channel List
AWSRouter.route('/list/channel').post(AWSController.getChannelList);

// Get Bucket List
AWSRouter.route('/list/bucket').post(AWSController.getBucketList);



export default AWSRouter;
