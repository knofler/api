/*
* Location Routes
*
* This contains defalut Location Route for the API.
*/


import { Router } from 'express';
import * as LocationController from './controller';
const LocationRouter = new Router();

// Get all Locations
LocationRouter.route('/locations').get(LocationController.getLocation);

// Get one Location by cuid
LocationRouter.route('/locations/:cuid').get(LocationController.getLocationById);

// Add a new Location
LocationRouter.route('/locations').post(LocationController.addLocation);

// Update a Location
LocationRouter.route('/locations/:cuid').put(LocationController.updateOneLocation);


// Delete a Location by cuid
LocationRouter.route('/locations/:cuid').delete(LocationController.deleteLocation);

export default LocationRouter;