/*
* Book Controller
*
* This contains default Book controller.
*/


import Book from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all books
* @param req
* @param res
* @returns void
*/

export async function getBook(req, res) {
  try {
    const doc = await Book
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
* Save a book
* @param req
* @param res
* @returns void
*/

export async function addBook(req, res) {
  try {
    // Save model data for Sanitization
    // const createdBy = req.user._id
    // console.log('createdBy', createdBy);
    const sanitizedBook = new Book(req.body);

    // Let's sanitize inputs
     sanitizedBook.item = sanitizeHtml(sanitizedBook.item);
    // sanitizedBook.info = sanitizeHtml(sanitizedBook.info); --}}
    // sanitizedBook.created_by = sanitizeHtml(sanitizedBook.created_by);
    // sanitizedBook.created_at = sanitizeHtml(sanitizedBook.created_at);

    // Add slug data for specific field
    sanitizedBook.slug = slug(sanitizedBook
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedBook.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const book = await Book.create(sanitizedBook);
        return res.status(201)
        .json(book.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single book By Id
* @param req
* @param res
* @returns void
*/

export async function getBookById(req, res) {
  try {
    console.log("cuid is :", req.params.cuid);
    const doc = await Book
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
* Update a book
* @param req
* @param res
* @returns void
*/

export async function updateOneBook(req, res) {
  try {
    const updatedDoc = await Book
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
* Delete a book
* @param req
* @param res
* @returns void
*/

export async function deleteBook(req, res) {
  try {
    const removed = await Book
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