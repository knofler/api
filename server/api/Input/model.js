/*
* Input Model
*
* This contains defalut Input model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const InputSchema = new Schema({
    item: {
        type: 'String',
        required: false,
    },
    info: {
        type: 'String',
        required: false,
    },
    slug: {
        type: 'String',
        required: false,
    },
    cuid: {
        type: 'String',
        required: false,
    },
    createdBy: {
        type: 'String',
        required: false,
    },
    created_at: {
        type: 'Date',
        default: Date.now,
        required: false,
    },
});

export default mongoose.model('Input', InputSchema);