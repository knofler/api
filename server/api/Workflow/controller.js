/*
* Workflow Controller
*
* This contains default Workflow controller.
*/


import Workflow from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all workflows
* @param req
* @param res
* @returns void
*/

export async function getWorkflow(req, res) {
  try {
    const doc = await Workflow
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
* Save a workflow
* @param req
* @param res
* @returns void
*/

export async function addWorkflow(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedWorkflow = new Workflow(req.body);

    // Let's sanitize inputs
    //  sanitizedWorkflow.item = sanitizeHtml(sanitizedWorkflow.item);
    // sanitizedWorkflow.info = sanitizeHtml(sanitizedWorkflow.info); --}}
    // sanitizedWorkflow.created_by = sanitizeHtml(sanitizedWorkflow.created_by);
    // sanitizedWorkflow.created_at = sanitizeHtml(sanitizedWorkflow.created_at);

    // Add slug data for specific field
    // sanitizedWorkflow.slug = slug(sanitizedWorkflow
    //     .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedWorkflow.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const workflow = await Workflow.create(sanitizedWorkflow);
        return res.status(201)
        .json(workflow.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single workflow By Id
* @param req
* @param res
* @returns void
*/

export async function getWorkflowById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Workflow
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
* Update a workflow
* @param req
* @param res
* @returns void
*/

export async function updateOneWorkflow(req, res) {
  try {
    const updatedDoc = await Workflow
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
* Delete a workflow
* @param req
* @param res
* @returns void
*/

export async function deleteWorkflow(req, res) {
  try {
    const removed = await Workflow
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