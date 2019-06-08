/*
* Location Controller
*
* This contains default Location controller.
*/


import Location from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all locations
* @param req
* @param res
* @returns void
*/

export async function getLocation(req, res) {
  try {
    const doc = await Location
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
* Save a location
* @param req
* @param res
* @returns void
*/

export async function addLocation(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedLocation = new Location(req.body);

    // Let's sanitize inputs
    //  sanitizedLocation.item = sanitizeHtml(sanitizedLocation.item);
    // sanitizedLocation.info = sanitizeHtml(sanitizedLocation.info); --}}
    // sanitizedLocation.created_by = sanitizeHtml(sanitizedLocation.created_by);
    // sanitizedLocation.created_at = sanitizeHtml(sanitizedLocation.created_at);

    // Add slug data for specific field
    sanitizedLocation.slug = slug(sanitizedLocation
        .item.toLowerCase(), { lowercase: true });

    // Add cuid for the model
    sanitizedLocation.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const location = await Location.create(sanitizedLocation);
    return res.status(201)
        .json(location.toJSON());
  } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
}

/**
* Get a single location By Id
* @param req
* @param res
* @returns void
*/

export async function getLocationById(req, res) {
  try {
    console.log('cuid is :', req.params.cuid);
    const doc = await Location
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
* Update a location
* @param req
* @param res
* @returns void
*/

export async function updateOneLocation(req, res) {
  try {
    const updatedDoc = await Location
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
* Delete a location
* @param req
* @param res
* @returns void
*/

export async function deleteLocation(req, res) {
  try {
    const removed = await Location
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
