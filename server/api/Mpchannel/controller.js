/*
* Mpchannel Controller
*
* This contains default Mpchannel controller.
*/


import Mpchannel from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all mpchannels
* @param req
* @param res
* @returns void
*/

export async function getMpchannel(req, res) {
  try {
    const doc = await Mpchannel
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
* Save a mpchannel
* @param req
* @param res
* @returns void
*/

export async function addMpchannel(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedMpchannel = new Mpchannel(req.body);

    // Let's sanitize inputs
     sanitizedMpchannel.item = sanitizeHtml(sanitizedMpchannel.item);
    // sanitizedMpchannel.info = sanitizeHtml(sanitizedMpchannel.info); --}}
    // sanitizedMpchannel.created_by = sanitizeHtml(sanitizedMpchannel.created_by);
    // sanitizedMpchannel.created_at = sanitizeHtml(sanitizedMpchannel.created_at);

    // Add slug data for specific field
    sanitizedMpchannel.slug = slug(sanitizedMpchannel
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedMpchannel.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const mpchannel = await Mpchannel.create(sanitizedMpchannel);
        return res.status(201)
        .json(mpchannel.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single mpchannel By Id
* @param req
* @param res
* @returns void
*/

export async function getMpchannelById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Mpchannel
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
* Update a mpchannel
* @param req
* @param res
* @returns void
*/

export async function updateOneMpchannel(req, res) {
  try {
    const updatedDoc = await Mpchannel
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
* Delete a mpchannel
* @param req
* @param res
* @returns void
*/

export async function deleteMpchannel(req, res) {
  try {
    const removed = await Mpchannel
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