import Role from '../models/role';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all roles
 * @param req
 * @param res
 * @returns void
 */
export function getRoles(req, res) {
  Role.find().sort('-dateAdded').exec((err, roles) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ roles });
  });
}

/**
 * Save a role
 * @param req
 * @param res
 * @returns void
 */
export function addRole(req, res) {
  if (!req.body.role.name || !req.body.role.title || !req.body.role.content) {
    res.status(403).end();
  }

  const newRole = new Role(req.body.role);

  // Let's sanitize inputs
  newRole.title = sanitizeHtml(newRole.title);
  newRole.name = sanitizeHtml(newRole.name);
  newRole.content = sanitizeHtml(newRole.content);

  newRole.slug = slug(newRole.title.toLowerCase(), { lowercase: true });
  newRole.cuid = cuid();
  newRole.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ role: saved });
  });
}

/**
 * Get a single role
 * @param req
 * @param res
 * @returns void
 */
export function getRole(req, res) {
  Role.findOne({ cuid: req.params.cuid }).exec((err, role) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ role });
  });
}

/**
 * Delete a role
 * @param req
 * @param res
 * @returns void
 */
export function deleteRole(req, res) {
  Role.findOne({ cuid: req.params.cuid }).exec((err, role) => {
    if (err) {
      res.status(500).send(err);
    }

    role.remove(() => {
      res.status(200).end();
    });
  });
}
