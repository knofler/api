/*
* Channel Controller
*
* This contains default Channel controller.
*/


import Channel from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all channels
* @param req
* @param res
* @returns void
*/

export async function getChannel(req, res) {
  try {
    const doc = await Channel
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
* Save a channel
* @param req
* @param res
* @returns void
*/

export async function addChannel(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedChannel = new Channel(req.body);

    // Let's sanitize inputs
     sanitizedChannel.item = sanitizeHtml(sanitizedChannel.item);
    // sanitizedChannel.info = sanitizeHtml(sanitizedChannel.info); --}}
    // sanitizedChannel.created_by = sanitizeHtml(sanitizedChannel.created_by);
    // sanitizedChannel.created_at = sanitizeHtml(sanitizedChannel.created_at);

    // Add slug data for specific field
    sanitizedChannel.slug = slug(sanitizedChannel
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedChannel.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const channel = await Channel.create(sanitizedChannel);
        return res.status(201)
        .json(channel.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single channel By Id
* @param req
* @param res
* @returns void
*/

export async function getChannelById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Channel
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
* Update a channel
* @param req
* @param res
* @returns void
*/

export async function updateOneChannel(req, res) {
  try {
    const updatedDoc = await Channel
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
* Delete a channel
* @param req
* @param res
* @returns void
*/

export async function deleteChannel(req, res) {
  try {
    const removed = await Channel
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