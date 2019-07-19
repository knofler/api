/*
    * AWS GENAPP Genapp Routes
*
* This contains Routes for the AWS Resources.
*/


import { Router } from 'express';
import * as GenappAWSController from './controller';
const GenappAWSRouter = new Router();

// Get allGenapps
//GenappAWSRouter.route('/genapps').get(GenappAWSController.getGenapp);

// Get oneGenapp by cuid
//GenappAWSRouter.route('/genapps/:cuid').get(GenappAWSController.getGenappById);

// Create A New Media LiveGenapp for Input,Channel and Media Package
GenappAWSRouter.route('/genapps').post(GenappAWSController.addGenapp);

// Update aGenapp
//GenappAWSRouter.route('/genapps/:cuid').put(GenappAWSController.updateOneGenapp);


// Delete aGenapp by cuid
//GenappAWSRouter.route('/genapps/:cuid').delete(GenappAWSController.deleteGenapp);



export default GenappAWSRouter;
