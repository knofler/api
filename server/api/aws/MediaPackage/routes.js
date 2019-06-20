/*
* AWS Routes
*
* This contains Routes for the AWS Resources.
*/


import { Router } from 'express';
import * as AWSController from './controller';
const AWSRouter = new Router();

// Create Media Live Create Input and Channel Auto
AWSRouter.route('/create/workflow').post(AWSController.workflow);

// Create Media Live Input
AWSRouter.route('/create/input').post(AWSController.createInput);

// Create Media Live Channel
AWSRouter.route('/create/channel').post(AWSController.createChannel);
// Delete Media Live Channel
AWSRouter.route('/delete/channel').delete(AWSController.deleteChannel);

// Get Channel List
AWSRouter.route('/list/channel').post(AWSController.getChannelList);

// Get Bucket List
AWSRouter.route('/list/bucket').post(AWSController.getBucketList);



export default AWSRouter;
