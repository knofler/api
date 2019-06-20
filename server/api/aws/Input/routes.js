/*
* AWS Routes
*
* This contains Routes for the AWS Resources.
*/


import { Router } from 'express';
import * as InputAWSController from './controller';
const InputAWSRouter = new Router();


// Get all Inputs
// InputAWSRouter.route('/inputs').get(InputAWSController.getInput);

// Get one Input by cuid
// InputAWSRouter.route('/inputs/:cuid').get(InputAWSController.getInputById);

// Create A New Media Live Input for Input,Input and Media Package
InputAWSRouter.route('/inputs').post(InputAWSController.addInput);

// Update a Input
// InputAWSRouter.route('iInputs/:cuid').put(InputAWSController.updateOneInput);


// Delete a Input by cuid
// InputAWSRouter.route('/inputs/:cuid').delete(InputAWSController.deleteInput);




export default InputAWSRouter;
