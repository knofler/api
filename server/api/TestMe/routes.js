/*
* TestMe Routes
*
* This contains defalut TestMe Route for the API.
*/


import { Router } from 'express';
import * as TestMeController from './controller';
const TestMeRouter = new Router();

// Get all TestMes
TestMeRouter.route('/testMes').get(TestMeController.getTestMe);

// Get one TestMe by cuid
TestMeRouter.route('/testMes/:cuid').get(TestMeController.getTestMeById);

// Add a new TestMe
TestMeRouter.route('/testMes').post(TestMeController.addTestMe);

// Update a TestMe
TestMeRouter.route('/testMes/:cuid').put(TestMeController.updateOneTestMe);


// Delete a TestMe by cuid
TestMeRouter.route('/testMes/:cuid').delete(TestMeController.deleteTestMe);

export default TestMeRouter;