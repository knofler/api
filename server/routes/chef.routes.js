import { Router } from 'express';
import * as ChefController from '../controllers/chef.controller';
const chefRouter = new Router();

// Get all Chefs
chefRouter.route('/chefs').get(ChefController.getChefs);

// Get one chef by cuid
chefRouter.route('/chefs/:cuid').get(ChefController.getChef);

// Add a new Chef
chefRouter.route('/chefs').post(ChefController.addChef);

// Delete a chef by cuid
chefRouter.route('/chefs/:cuid').delete(ChefController.deleteChef);

export default chefRouter;
