/*
* Genapp Controller
*
* This contains default Genapp controller.
*/


import Genapp from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all genapps
* @param req
* @param res
* @returns void
*/

export async function getGenapp(req, res) {
  try {
    const doc = await Genapp
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
* Save a genapp
* @param req
* @param res
* @returns void
*/

export async function addGenapp(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedGenapp = new Genapp(req.body);

    // Let's sanitize inputs
     sanitizedGenapp.item = sanitizeHtml(sanitizedGenapp.item);
    // sanitizedGenapp.info = sanitizeHtml(sanitizedGenapp.info); --}}
    // sanitizedGenapp.created_by = sanitizeHtml(sanitizedGenapp.created_by);
    // sanitizedGenapp.created_at = sanitizeHtml(sanitizedGenapp.created_at);

    // Add slug data for specific field
    sanitizedGenapp.slug = slug(sanitizedGenapp
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedGenapp.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const genapp = await Genapp.create(sanitizedGenapp);
        return res.status(201)
        .json(genapp.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single genapp By Id
* @param req
* @param res
* @returns void
*/

export async function getGenappById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Genapp
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
* Update a genapp
* @param req
* @param res
* @returns void
*/

export async function updateOneGenapp(req, res) {
  try {
    const updatedDoc = await Genapp
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
* Delete a genapp
* @param req
* @param res
* @returns void
*/

export async function deleteGenapp(req, res) {
  try {
    const removed = await Genapp
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