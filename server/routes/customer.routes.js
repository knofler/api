import { Router } from 'express';
import * as CustomerController from '../controllers/customer.controller';
const customerRouter = new Router();

// Get all Customers
customerRouter.route('/customers').get(CustomerController.getCustomers);

// Get one customer by cuid
customerRouter.route('/customers/:cuid').get(CustomerController.getCustomer);

// Add a new Customer
customerRouter.route('/customers').post(CustomerController.addCustomer);

// Delete a customer by cuid
customerRouter.route('/customers/:cuid').delete(CustomerController.deleteCustomer);

export default customerRouter;
