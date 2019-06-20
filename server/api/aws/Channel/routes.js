/*
    * AWS MediaLive Channel Routes
*
* This contains Routes for the AWS Resources.
*/


import { Router } from 'express';
import * as ChannelAWSController from './controller';
const ChannelAWSRouter = new Router();

// Get all Channels
ChannelAWSRouter.route('/channels').get(ChannelAWSController.getChannel);

// Get one Channel by cuid
// ChannelAWSRouter.route('/channels/:cuid').get(ChannelAWSController.getChannelById);

// Create A New Media Live Channel for Input,Channel and Media Package
ChannelAWSRouter.route('/channels').post(ChannelAWSController.addChannel);

// Update a Channel
// ChannelAWSRouter.route('/channels/:cuid').put(ChannelAWSController.updateOneChannel);


// Delete a Channel by cuid
// ChannelAWSRouter.route('/channels/:cuid').delete(ChannelAWSController.deleteChannel);



export default ChannelAWSRouter;
