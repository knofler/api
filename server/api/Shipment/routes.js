/*
* Shipment Routes
*
* This contains defalut Shipment Route for the API.
*/


import { Router } from 'express';
import * as ShipmentController from './controller';
const ShipmentRouter = new Router();

// Get all Shipments
ShipmentRouter.route('/shipments').get(ShipmentController.getShipment);

// Get one Shipment by cuid
ShipmentRouter.route('/shipments/:cuid').get(ShipmentController.getShipmentById);

// Add a new Shipment
ShipmentRouter.route('/shipments').post(ShipmentController.addShipment);

// Update a Shipment
ShipmentRouter.route('/shipments/:cuid').put(ShipmentController.updateOneShipment);


// Delete a Shipment by cuid
ShipmentRouter.route('/shipments/:cuid').delete(ShipmentController.deleteShipment);

export default ShipmentRouter;
