/*
* Channel Routes
*
* This contains defalut Channel Route for the API.
*/


import { Router } from 'express';
import * as ChannelController from './controller';
const ChannelRouter = new Router();

// Get all Channels
ChannelRouter.route('/channels').get(ChannelController.getChannel);

// Get one Channel by cuid
ChannelRouter.route('/channels/:cuid').get(ChannelController.getChannelById);

// Add a new Channel
ChannelRouter.route('/channels').post(ChannelController.addChannel);

// Update a Channel
ChannelRouter.route('/channels/:cuid').put(ChannelController.updateOneChannel);


// Delete a Channel by cuid
ChannelRouter.route('/channels/:cuid').delete(ChannelController.deleteChannel);

export default ChannelRouter;