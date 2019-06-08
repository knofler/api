import { Router } from 'express';
import * as RecipeController from '../controllers/recipe.controller';
const recipeRouter = new Router();

// Get all Recipes
recipeRouter.route('/recipes').get(RecipeController.getRecipes);

// Get one recipe by cuid
recipeRouter.route('/recipes/:cuid').get(RecipeController.getRecipe);

// Add a new Recipe
recipeRouter.route('/recipes').post(RecipeController.addRecipe);

// Delete a recipe by cuid
recipeRouter.route('/recipes/:cuid').delete(RecipeController.deleteRecipe);

export default recipeRouter;
