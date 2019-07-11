/*
* TestMe Controller
*
* This contains default TestMe controller.
*/


import TestMe from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all testMes
* @param req
* @param res
* @returns void
*/

export async function getTestMe(req, res) {
  try {
    const doc = await TestMe
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
* Save a testMe
* @param req
* @param res
* @returns void
*/

export async function addTestMe(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedTestMe = new TestMe(req.body);

    // Let's sanitize inputs
     sanitizedTestMe.item = sanitizeHtml(sanitizedTestMe.item);
    // sanitizedTestMe.info = sanitizeHtml(sanitizedTestMe.info); --}}
    // sanitizedTestMe.created_by = sanitizeHtml(sanitizedTestMe.created_by);
    // sanitizedTestMe.created_at = sanitizeHtml(sanitizedTestMe.created_at);

    // Add slug data for specific field
    sanitizedTestMe.slug = slug(sanitizedTestMe
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedTestMe.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const testMe = await TestMe.create(sanitizedTestMe);
        return res.status(201)
        .json(testMe.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single testMe By Id
* @param req
* @param res
* @returns void
*/

export async function getTestMeById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await TestMe
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
* Update a testMe
* @param req
* @param res
* @returns void
*/

export async function updateOneTestMe(req, res) {
  try {
    const updatedDoc = await TestMe
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
* Delete a testMe
* @param req
* @param res
* @returns void
*/

export async function deleteTestMe(req, res) {
  try {
    const removed = await TestMe
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