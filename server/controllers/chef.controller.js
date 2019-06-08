import Chef from '../models/chef';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all chefs
 * @param req
 * @param res
 * @returns void
 */
export function getChefs(req, res) {
  Chef.find().sort('-dateAdded').exec((err, chefs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ chefs });
  });
}

/**
 * Save a chef
 * @param req
 * @param res
 * @returns void
 */
export function addChef(req, res) {
  if (!req.body.chef.name || !req.body.chef.title || !req.body.chef.content) {
    res.status(403).end();
  }

  const newChef = new Chef(req.body.chef);

  // Let's sanitize inputs
  newChef.title = sanitizeHtml(newChef.title);
  newChef.name = sanitizeHtml(newChef.name);
  newChef.content = sanitizeHtml(newChef.content);

  newChef.slug = slug(newChef.title.toLowerCase(), { lowercase: true });
  newChef.cuid = cuid();
  newChef.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ chef: saved });
  });
}

/**
 * Get a single chef
 * @param req
 * @param res
 * @returns void
 */
export function getChef(req, res) {
  Chef.findOne({ cuid: req.params.cuid }).exec((err, chef) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ chef });
  });
}

/**
 * Delete a chef
 * @param req
 * @param res
 * @returns void
 */
export function deleteChef(req, res) {
  Chef.findOne({ cuid: req.params.cuid }).exec((err, chef) => {
    if (err) {
      res.status(500).send(err);
    }

    chef.remove(() => {
      res.status(200).end();
    });
  });
}
