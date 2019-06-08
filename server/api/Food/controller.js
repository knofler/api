/*
* Food Controller
*
* This contains default Food controller.
*/


import Food from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all foods
* @param req
* @param res
* @returns void
*/

export async function getFood(req, res) {
  try {
    const doc = await Food
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
* Save a food
* @param req
* @param res
* @returns void
*/

export async function addFood(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedFood = new Food(req.body);

    // Let's sanitize inputs
    sanitizedFood.item = sanitizeHtml(sanitizedFood.item);
    // sanitizedFood.info = sanitizeHtml(sanitizedFood.info); --}}
    // sanitizedFood.created_by = sanitizeHtml(sanitizedFood.created_by);
    // sanitizedFood.created_at = sanitizeHtml(sanitizedFood.created_at);

    // Add slug data for specific field
    sanitizedFood.slug = slug(sanitizedFood
        .item.toLowerCase(), { lowercase: true });

    // Add cuid for the model
    sanitizedFood.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const food = await Food.create(sanitizedFood);
    return res.status(201)
        .json(food.toJSON());
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
}

/**
* Get a single food By Id
* @param req
* @param res
* @returns void
*/

export async function getFoodById(req, res) {
  try {
    console.log('cuid is :', req.params.cuid);
    const doc = await Food
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
* Update a food
* @param req
* @param res
* @returns void
*/

export async function updateOneFood(req, res) {
  try {
    const updatedDoc = await Food
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
* Delete a food
* @param req
* @param res
* @returns void
*/

export async function deleteFood(req, res) {
  try {
    const removed = await Food
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
