/*
* Chef Controller
*
* This contains default Chef controller.
*/


import Chef from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all chefs
* @param req
* @param res
* @returns void
*/

export async function getChef(req, res) {
  try {
    const doc = await Chef
    .find({
        // {createdBy: req.user._id}
    })
    .sort('-dateAdded')
    .lean()
    .exec();

    return res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }
}

/**
* Save a chef
* @param req
* @param res
* @returns void
*/

export async function addChef(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedChef = new Chef(req.body);

    // Let's sanitize inputs
    //  sanitizedChef.item = sanitizeHtml(sanitizedChef.item);
    // sanitizedChef.info = sanitizeHtml(sanitizedChef.info); --}}
    // sanitizedChef.created_by = sanitizeHtml(sanitizedChef.created_by);
    // sanitizedChef.created_at = sanitizeHtml(sanitizedChef.created_at);

    // Add slug data for specific field
    sanitizedChef.slug = slug(sanitizedChef
        .name.toLowerCase(), { lowercase: true });

    // Add cuid for the model
    sanitizedChef.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const chef = await Chef.create(sanitizedChef);
    return res.status(201)
        .json(chef.toJSON());
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
}

/**
* Get a single chef By Id
* @param req
* @param res
* @returns void
*/

export async function getChefById(req, res) {
  try {
    console.log('cuid is :', req.params.cuid);
    const doc = await Chef
        .findOne({
            // createdBy: req.user._id,
          cuid: req.params.cuid,
            // _id: req.params.id
        })
        .lean()
        .exec();

    if (!doc) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: doc });
  } catch (e) {
    return res.status(400).send(e);
  }
}

/**
* Update a chef
* @param req
* @param res
* @returns void
*/

export async function updateOneChef(req, res) {
  try {
    const updatedDoc = await Chef
        .findOneAndUpdate({
            // createdBy: req.user._id,
          cuid: req.params.cuid,
            // _id: req.params.id
        },
            req.body,
            { new: true }
        )
        .lean()
        .exec();

    if (!updatedDoc) {
      return res.status(400).end();
    }
    return res.status(200).json({ data: updatedDoc });
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }
}


/**
* Delete a chef
* @param req
* @param res
* @returns void
*/

export async function deleteChef(req, res) {
  try {
    const removed = await Chef
        .findOneAndRemove({
           // createdBy:req.user._id,
          cuid: req.params.cuid,
           // _id:req.params.id,
        });
    if (!removed) {
      return res.status(400).end();
    }
    return res.status(200)
        .json({ data: removed });
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }
}
