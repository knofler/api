/*
* Input Controller
*
* This contains default Input controller.
*/


import Input from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all inputs
* @param req
* @param res
* @returns void
*/

export async function getInput(req, res) {
  try {
    const doc = await Input
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
* Save a input
* @param req
* @param res
* @returns void
*/

export async function addInput(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedInput = new Input(req.body);

    // Let's sanitize inputs
     sanitizedInput.item = sanitizeHtml(sanitizedInput.item);
    // sanitizedInput.info = sanitizeHtml(sanitizedInput.info); --}}
    // sanitizedInput.created_by = sanitizeHtml(sanitizedInput.created_by);
    // sanitizedInput.created_at = sanitizeHtml(sanitizedInput.created_at);

    // Add slug data for specific field
    sanitizedInput.slug = slug(sanitizedInput
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedInput.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const input = await Input.create(sanitizedInput);
        return res.status(201)
        .json(input.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single input By Id
* @param req
* @param res
* @returns void
*/

export async function getInputById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Input
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
* Update a input
* @param req
* @param res
* @returns void
*/

export async function updateOneInput(req, res) {
  try {
    const updatedDoc = await Input
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
* Delete a input
* @param req
* @param res
* @returns void
*/

export async function deleteInput(req, res) {
  try {
    const removed = await Input
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