/*
    * AWS MPCHANNEL Mpchannel Routes
*
* This contains Routes for the AWS Resources.
*/


import { Router } from 'express';
import * as MpchannelAWSController from './controller';
const MpchannelAWSRouter = new Router();

// Get allMpchannels
//MpchannelAWSRouter.route('/mpchannels').get(MpchannelAWSController.getMpchannel);

// Get oneMpchannel by cuid
//MpchannelAWSRouter.route('/mpchannels/:cuid').get(MpchannelAWSController.getMpchannelById);

// Create A New Media LiveMpchannel for Input,Channel and Media Package
MpchannelAWSRouter.route('/mpchannels').post(MpchannelAWSController.addMpchannel);

// Update aMpchannel
//MpchannelAWSRouter.route('/mpchannels/:cuid').put(MpchannelAWSController.updateOneMpchannel);


// Delete aMpchannel by cuid
//MpchannelAWSRouter.route('/mpchannels/:cuid').delete(MpchannelAWSController.deleteMpchannel);



export default MpchannelAWSRouter;
