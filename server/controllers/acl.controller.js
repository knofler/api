import Acl from '../models/acl';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all acls
 * @param req
 * @param res
 * @returns void
 */
export function getAcls(req, res) {
  Acl.find().sort('-dateAdded').exec((err, acls) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ acls });
  });
}

/**
 * Save a acl
 * @param req
 * @param res
 * @returns void
 */
export function addAcl(req, res) {
  if (!req.body.acl.name || !req.body.acl.title || !req.body.acl.content) {
    res.status(403).end();
  }

  const newAcl = new Acl(req.body.acl);

  // Let's sanitize inputs
  newAcl.title = sanitizeHtml(newAcl.title);
  newAcl.name = sanitizeHtml(newAcl.name);
  newAcl.content = sanitizeHtml(newAcl.content);

  newAcl.slug = slug(newAcl.title.toLowerCase(), { lowercase: true });
  newAcl.cuid = cuid();
  newAcl.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ acl: saved });
  });
}

/**
 * Get a single acl
 * @param req
 * @param res
 * @returns void
 */
export function getAcl(req, res) {
  Acl.findOne({ cuid: req.params.cuid }).exec((err, acl) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ acl });
  });
}

/**
 * Delete a acl
 * @param req
 * @param res
 * @returns void
 */
export function deleteAcl(req, res) {
  Acl.findOne({ cuid: req.params.cuid }).exec((err, acl) => {
    if (err) {
      res.status(500).send(err);
    }

    acl.remove(() => {
      res.status(200).end();
    });
  });
}
