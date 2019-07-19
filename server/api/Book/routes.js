/*
* Book Routes
*
* This contains defalut Book Route for the API.
*/


import { Router } from 'express';
import * as BookController from './controller';
const BookRouter = new Router();

// Get all Books
BookRouter.route('/books').get(BookController.getBook);

// Get one Book by cuid
BookRouter.route('/books/:cuid').get(BookController.getBookById);

// Add a new Book
BookRouter.route('/books').post(BookController.addBook);

// Update a Book
BookRouter.route('/books/:cuid').put(BookController.updateOneBook);


// Delete a Book by cuid
BookRouter.route('/books/:cuid').delete(BookController.deleteBook);

export default BookRouter;