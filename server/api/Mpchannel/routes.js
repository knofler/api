/*
* Mpchannel Routes
*
* This contains defalut Mpchannel Route for the API.
*/


import { Router } from 'express';
import * as MpchannelController from './controller';
const MpchannelRouter = new Router();

// Get all Mpchannels
MpchannelRouter.route('/mpchannels').get(MpchannelController.getMpchannel);

// Get one Mpchannel by cuid
MpchannelRouter.route('/mpchannels/:cuid').get(MpchannelController.getMpchannelById);

// Add a new Mpchannel
MpchannelRouter.route('/mpchannels').post(MpchannelController.addMpchannel);

// Update a Mpchannel
MpchannelRouter.route('/mpchannels/:cuid').put(MpchannelController.updateOneMpchannel);


// Delete a Mpchannel by cuid
MpchannelRouter.route('/mpchannels/:cuid').delete(MpchannelController.deleteMpchannel);

export default MpchannelRouter;