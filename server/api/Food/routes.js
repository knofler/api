/*
* Food Routes
*
* This contains defalut Food Route for the API.
*/


import { Router } from 'express';
import * as FoodController from './controller';
const FoodRouter = new Router();

// Get all Foods
FoodRouter.route('/foods').get(FoodController.getFood);

// Get one Food by cuid
FoodRouter.route('/foods/:cuid').get(FoodController.getFoodById);

// Add a new Food
FoodRouter.route('/foods').post(FoodController.addFood);

// Update a Food
FoodRouter.route('/foods/:cuid').put(FoodController.updateOneFood);


// Delete a Food by cuid
FoodRouter.route('/foods/:cuid').delete(FoodController.deleteFood);

export default FoodRouter;
