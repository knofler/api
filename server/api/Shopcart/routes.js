/*
* Shopcart Routes
*
* This contains defalut Shopcart Route for the API.
*/


import { Router } from 'express';
import * as ShopcartController from './controller';
const ShopcartRouter = new Router();

// Get all Shopcarts
ShopcartRouter.route('/shopcarts').get(ShopcartController.getShopcart);

// Get one Shopcart by cuid
ShopcartRouter.route('/shopcarts/:cuid').get(ShopcartController.getShopcartById);

// Add a new Shopcart
ShopcartRouter.route('/shopcarts').post(ShopcartController.addShopcart);

// Update a Shopcart
ShopcartRouter.route('/shopcarts/:cuid').put(ShopcartController.updateOneShopcart);


// Delete a Shopcart by cuid
ShopcartRouter.route('/shopcarts/:cuid').delete(ShopcartController.deleteShopcart);

export default ShopcartRouter;