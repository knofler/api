/*
* Genapp Routes
*
* This contains defalut Genapp Route for the API.
*/


import { Router } from 'express';
import * as GenappController from './controller';
const GenappRouter = new Router();

// Get all Genapps
GenappRouter.route('/genapps').get(GenappController.getGenapp);

// Get one Genapp by cuid
GenappRouter.route('/genapps/:cuid').get(GenappController.getGenappById);

// Add a new Genapp
GenappRouter.route('/genapps').post(GenappController.addGenapp);

// Update a Genapp
GenappRouter.route('/genapps/:cuid').put(GenappController.updateOneGenapp);


// Delete a Genapp by cuid
GenappRouter.route('/genapps/:cuid').delete(GenappController.deleteGenapp);

export default GenappRouter;