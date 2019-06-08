/*
* Search Routes
*
* This contains defalut Search Route for the API.
*/


import { Router } from 'express';
import * as SearchController from './controller';
const SearchRouter = new Router();

// Get all Searchs
SearchRouter.route('/searchs').get(SearchController.getSearch);

// Get one Search by cuid
SearchRouter.route('/searchs/:cuid').get(SearchController.getSearchById);

// Add a new Search
SearchRouter.route('/searchs').post(SearchController.addSearch);

// Update a Search
SearchRouter.route('/searchs/:cuid').put(SearchController.updateOneSearch);


// Delete a Search by cuid
SearchRouter.route('/searchs/:cuid').delete(SearchController.deleteSearch);

export default SearchRouter;