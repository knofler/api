import Cart from '../models/cart';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all carts
 * @param req
 * @param res
 * @returns void
 */
export function getCarts(req, res) {
  Cart.find().sort('-dateAdded').exec((err, carts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ carts });
  });
}

/**
 * Save a cart
 * @param req
 * @param res
 * @returns void
 */
export function addCart(req, res) {
  if (!req.body.cart.name || !req.body.cart.title || !req.body.cart.content) {
    res.status(403).end();
  }

  const newCart = new Cart(req.body.cart);

  // Let's sanitize inputs
  newCart.title = sanitizeHtml(newCart.title);
  newCart.name = sanitizeHtml(newCart.name);
  newCart.content = sanitizeHtml(newCart.content);

  newCart.slug = slug(newCart.title.toLowerCase(), { lowercase: true });
  newCart.cuid = cuid();
  newCart.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ cart: saved });
  });
}

/**
 * Get a single cart
 * @param req
 * @param res
 * @returns void
 */
export function getCart(req, res) {
  Cart.findOne({ cuid: req.params.cuid }).exec((err, cart) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ cart });
  });
}

/**
 * Delete a cart
 * @param req
 * @param res
 * @returns void
 */
export function deleteCart(req, res) {
  Cart.findOne({ cuid: req.params.cuid }).exec((err, cart) => {
    if (err) {
      res.status(500).send(err);
    }

    cart.remove(() => {
      res.status(200).end();
    });
  });
}
