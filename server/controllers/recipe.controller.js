import Recipe from '../models/recipe';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all recipes
 * @param req
 * @param res
 * @returns void
 */
export function getRecipes(req, res) {
  Recipe.find().sort('-dateAdded').exec((err, recipes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ recipes });
  });
}

/**
 * Save a recipe
 * @param req
 * @param res
 * @returns void
 */
export function addRecipe(req, res) {
  if (!req.body.recipe.name || !req.body.recipe.title || !req.body.recipe.content) {
    res.status(403).end();
  }

  const newRecipe = new Recipe(req.body.recipe);

  // Let's sanitize inputs
  newRecipe.title = sanitizeHtml(newRecipe.title);
  newRecipe.name = sanitizeHtml(newRecipe.name);
  newRecipe.content = sanitizeHtml(newRecipe.content);

  newRecipe.slug = slug(newRecipe.title.toLowerCase(), { lowercase: true });
  newRecipe.cuid = cuid();
  newRecipe.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ recipe: saved });
  });
}

/**
 * Get a single recipe
 * @param req
 * @param res
 * @returns void
 */
export function getRecipe(req, res) {
  Recipe.findOne({ cuid: req.params.cuid }).exec((err, recipe) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ recipe });
  });
}

/**
 * Delete a recipe
 * @param req
 * @param res
 * @returns void
 */
export function deleteRecipe(req, res) {
  Recipe.findOne({ cuid: req.params.cuid }).exec((err, recipe) => {
    if (err) {
      res.status(500).send(err);
    }

    recipe.remove(() => {
      res.status(200).end();
    });
  });
}
