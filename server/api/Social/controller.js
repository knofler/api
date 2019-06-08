/*
* Social Controller
*
* This contains default Social controller.
*/


import Social from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all socials
* @param req
* @param res
* @returns void
*/

export async function getSocial(req, res) {
  try {
    const doc = await Social
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
* Save a social
* @param req
* @param res
* @returns void
*/

export async function addSocial(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedSocial = new Social(req.body);

    // Let's sanitize inputs
     sanitizedSocial.item = sanitizeHtml(sanitizedSocial.item);
    // sanitizedSocial.info = sanitizeHtml(sanitizedSocial.info); --}}
    // sanitizedSocial.created_by = sanitizeHtml(sanitizedSocial.created_by);
    // sanitizedSocial.created_at = sanitizeHtml(sanitizedSocial.created_at);

    // Add slug data for specific field
    sanitizedSocial.slug = slug(sanitizedSocial
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedSocial.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const social = await Social.create(sanitizedSocial);
        return res.status(201)
        .json(social.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single social By Id
* @param req
* @param res
* @returns void
*/

export async function getSocialById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Social
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
* Update a social
* @param req
* @param res
* @returns void
*/

export async function updateOneSocial(req, res) {
  try {
    const updatedDoc = await Social
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
* Delete a social
* @param req
* @param res
* @returns void
*/

export async function deleteSocial(req, res) {
  try {
    const removed = await Social
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