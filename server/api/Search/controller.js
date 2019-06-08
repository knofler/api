/*
* Search Controller
*
* This contains default Search controller.
*/


import Search from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all searchs
* @param req
* @param res
* @returns void
*/

export async function getSearch(req, res) {
  try {
    const doc = await Search
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
* Save a search
* @param req
* @param res
* @returns void
*/

export async function addSearch(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedSearch = new Search(req.body);

    // Let's sanitize inputs
     sanitizedSearch.item = sanitizeHtml(sanitizedSearch.item);
    // sanitizedSearch.info = sanitizeHtml(sanitizedSearch.info); --}}
    // sanitizedSearch.created_by = sanitizeHtml(sanitizedSearch.created_by);
    // sanitizedSearch.created_at = sanitizeHtml(sanitizedSearch.created_at);

    // Add slug data for specific field
    sanitizedSearch.slug = slug(sanitizedSearch
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedSearch.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const search = await Search.create(sanitizedSearch);
        return res.status(201)
        .json(search.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single search By Id
* @param req
* @param res
* @returns void
*/

export async function getSearchById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Search
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
* Update a search
* @param req
* @param res
* @returns void
*/

export async function updateOneSearch(req, res) {
  try {
    const updatedDoc = await Search
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
* Delete a search
* @param req
* @param res
* @returns void
*/

export async function deleteSearch(req, res) {
  try {
    const removed = await Search
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