/*
* Workflow Model
*
* This contains defalut Workflow model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const WorkflowSchema = new Schema({
    channelName: {
        type: 'String',
        required: false,
      },
    channelId: {
        type: 'String',
        required: false,
    },
    channelClass: {
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

export default mongoose.model('Workflow', WorkflowSchema);