/*
* Input Routes
*
* This contains defalut Input Route for the API.
*/


import { Router } from 'express';
import * as InputController from './controller';
const InputRouter = new Router();

// Get all Inputs
InputRouter.route('/inputs').get(InputController.getInput);

// Get one Input by cuid
InputRouter.route('/inputs/:cuid').get(InputController.getInputById);

// Add a new Input
InputRouter.route('/inputs').post(InputController.addInput);

// Update a Input
InputRouter.route('/inputs/:cuid').put(InputController.updateOneInput);


// Delete a Input by cuid
InputRouter.route('/inputs/:cuid').delete(InputController.deleteInput);

export default InputRouter;