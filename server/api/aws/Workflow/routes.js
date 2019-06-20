/*
    * AWS MediaLive WorkFlow Routes
*
* This contains Routes for the AWS Resources.
*/


import { Router } from 'express';
import * as WorkflowAWSController from './controller';
const WorkflowAWSRouter = new Router();

// Get all Workflows
// WorkflowAWSRouter.route('/workflows').get(WorkflowAWSController.getWorkflow);

// Get one Workflow by cuid
// WorkflowAWSRouter.route('/workflows/:cuid').get(WorkflowAWSController.getWorkflowById);

// Create A New Media Live Workflow for Input,Channel and Media Package
WorkflowAWSRouter.route('/workflows').post(WorkflowAWSController.addWorkflow);

// Update a Workflow
// WorkflowAWSRouter.route('/workflows/:cuid').put(WorkflowAWSController.updateOneWorkflow);


// Delete a Workflow by cuid
// WorkflowAWSRouter.route('/workflows/:cuid').delete(WorkflowAWSController.deleteWorkflow);



export default WorkflowAWSRouter;
