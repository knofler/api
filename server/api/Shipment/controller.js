/*
* Shipment Controller
*
* This contains default Shipment controller.
*/


import Shipment from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all shipments
* @param req
* @param res
* @returns void
*/

export async function getShipment(req, res) {
  try {
    const doc = await Shipment
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
* Save a shipment
* @param req
* @param res
* @returns void
*/

export async function addShipment(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedShipment = new Shipment(req.body);

    // Let's sanitize inputs
    //  sanitizedShipment.item = sanitizeHtml(sanitizedShipment.item);
    // sanitizedShipment.info = sanitizeHtml(sanitizedShipment.info); --}}
    // sanitizedShipment.created_by = sanitizeHtml(sanitizedShipment.created_by);
    // sanitizedShipment.created_at = sanitizeHtml(sanitizedShipment.created_at);

    // Add slug data for specific field
    sanitizedShipment.slug = slug(sanitizedShipment
        .item.toLowerCase(), { lowercase: true });

    // Add cuid for the model
    sanitizedShipment.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const shipment = await Shipment.create(sanitizedShipment);
    return res.status(201)
        .json(shipment.toJSON());
  } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
}

/**
* Get a single shipment By Id
* @param req
* @param res
* @returns void
*/

export async function getShipmentById(req, res) {
  try {
    console.log('cuid is :', req.params.cuid);
    const doc = await Shipment
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
* Update a shipment
* @param req
* @param res
* @returns void
*/

export async function updateOneShipment(req, res) {
  try {
    const updatedDoc = await Shipment
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
* Delete a shipment
* @param req
* @param res
* @returns void
*/

export async function deleteShipment(req, res) {
  try {
    const removed = await Shipment
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
