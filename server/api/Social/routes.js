/*
* Social Routes
*
* This contains defalut Social Route for the API.
*/


import { Router } from 'express';
import * as SocialController from './controller';
const SocialRouter = new Router();

// Get all Socials
SocialRouter.route('/socials').get(SocialController.getSocial);

// Get one Social by cuid
SocialRouter.route('/socials/:cuid').get(SocialController.getSocialById);

// Add a new Social
SocialRouter.route('/socials').post(SocialController.addSocial);

// Update a Social
SocialRouter.route('/socials/:cuid').put(SocialController.updateOneSocial);


// Delete a Social by cuid
SocialRouter.route('/socials/:cuid').delete(SocialController.deleteSocial);

export default SocialRouter;