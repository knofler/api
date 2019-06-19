/*
* Workflow Routes
*
* This contains defalut Workflow Route for the API.
*/


import { Router } from 'express';
import * as WorkflowController from './controller';
const WorkflowRouter = new Router();

// Get all Workflows
WorkflowRouter.route('/workflows').get(WorkflowController.getWorkflow);

// Get one Workflow by cuid
WorkflowRouter.route('/workflows/:cuid').get(WorkflowController.getWorkflowById);

// Add a new Workflow
WorkflowRouter.route('/workflows').post(WorkflowController.addWorkflow);

// Update a Workflow
WorkflowRouter.route('/workflows/:cuid').put(WorkflowController.updateOneWorkflow);


// Delete a Workflow by cuid
WorkflowRouter.route('/workflows/:cuid').delete(WorkflowController.deleteWorkflow);

export default WorkflowRouter;