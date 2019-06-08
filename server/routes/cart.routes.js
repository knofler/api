import { Router } from 'express';
import * as CartController from '../controllers/cart.controller';
const cartRouter = new Router();

// Get all Carts
cartRouter.route('/carts').get(CartController.getCarts);

// Get one cart by cuid
cartRouter.route('/carts/:cuid').get(CartController.getCart);

// Add a new Cart
cartRouter.route('/carts').post(CartController.addCart);

// Delete a cart by cuid
cartRouter.route('/carts/:cuid').delete(CartController.deleteCart);

export default cartRouter;
