/*
* Shopcart Controller
*
* This contains default Shopcart controller.
*/


import Shopcart from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all shopcarts
* @param req
* @param res
* @returns void
*/

export async function getShopcart(req, res) {
  try {
    const doc = await Shopcart
    .find({
        // {createdBy: req.user._id}
    })
    .sort('-dateAdded')
    .lean()
    .exec()

    return res.status(200).json({data:doc})
   } catch(e){
        console.error(e)
        return res.status(400).send(e)
   }
}

/**
* Save a shopcart
* @param req
* @param res
* @returns void
*/

export async function addShopcart(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedShopcart = new Shopcart(req.body);

    // Let's sanitize inputs
     sanitizedShopcart.item = sanitizeHtml(sanitizedShopcart.item);
    // sanitizedShopcart.info = sanitizeHtml(sanitizedShopcart.info); --}}
    // sanitizedShopcart.created_by = sanitizeHtml(sanitizedShopcart.created_by);
    // sanitizedShopcart.created_at = sanitizeHtml(sanitizedShopcart.created_at);

    // Add slug data for specific field
    sanitizedShopcart.slug = slug(sanitizedShopcart
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedShopcart.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const shopcart = await Shopcart.create(sanitizedShopcart);
        return res.status(201)
        .json(shopcart.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single shopcart By Id
* @param req
* @param res
* @returns void
*/

export async function getShopcartById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Shopcart
        .findOne({ 
            // createdBy: req.user._id,
            cuid: req.params.cuid,
            // _id: req.params.id
            })
        .lean()
        .exec()

    if (!doc) {
        return res.status(400).end()
    }

        return res.status(200).json({ data: doc })
   } catch (e) {
      return res.status(400).send(e);
   }
}

/**
* Update a shopcart
* @param req
* @param res
* @returns void
*/

export async function updateOneShopcart(req, res) {
  try {
    const updatedDoc = await Shopcart
        .findOneAndUpdate({
            // createdBy: req.user._id,
            cuid: req.params.cuid,
            // _id: req.params.id
            },
            req.body,
            { new: true }
        )
        .lean()
        .exec()

    if (!updatedDoc) {
        return res.status(400).end()
    }
        return res.status(200).json({ data: updatedDoc })
   } catch (e) {
       console.error(e);
       return res.status(400).send(e);
   }
}


/**
* Delete a shopcart
* @param req
* @param res
* @returns void
*/

export async function deleteShopcart(req, res) {
  try {
    const removed = await Shopcart
        .findOneAndRemove({
           // createdBy:req.user._id,
            cuid: req.params.cuid
           // _id:req.params.id,
        })
    if(!removed){
        return res.status(400).end()
    }
     return res.status(200)
        .json({data:removed})
   } catch (e) {
       console.error(e);
       return res.status(400).send(e);
   }
}