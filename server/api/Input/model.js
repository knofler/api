/*
* Input Model
*
* This contains defalut Input model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const InputSchema = new Schema({
    AttachedChannels: {
        type: 'Array',
        required: false,
    },
    Arn: {
        type: 'String',
        required: false,
    },
    Name: {
        type: 'String',
        required: false,
    },
    Type: {
        type: 'String',
        required: false,
    },
    inputName: {
        type: 'String',
        required: false,
        },
    inputId: {
        type: 'String',
        required: false,
    },
    inputClass: {
        type: 'String',
        required: false,
    },
    inputType: {
        type: 'String',
        required: false,
    },
    destinationsOneIp: {
        type: 'String',
        required: false,
    },
    destinationsOnePort: {
        type: 'String',
        required: false,
    },
    destinationsOneUrl: {
        type: 'String',
        required: false,
    },
    destinationsTwoIp: {
        type: 'String',
        required: false,
    },
    destinationsTwoPort: {
        type: 'String',
        required: false,
    },
    destinationsTwoUrl: {
        type: 'String',
        required: false,
    },
    SecurityGroups: {
        type: 'Array',
        required: false,
    },
    State: {
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