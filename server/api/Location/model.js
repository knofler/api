/*
* Location Model
*
* This contains defalut Location model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  lat: {
    type: 'String',
    required: true,
  },
  lon: {
    type: 'String',
    required: true,
  },
  address: {
    type: 'String',
    required: false,
  },
  suburb: {
    type: 'String',
    required: true,
  },
  postcode: {
    type: 'String',
    required: true,
  },
  state: {
    type: 'String',
    required: true,
  },
  country: {
    type: 'String',
    required: false,
  },
  dc: {
    type: 'String',
    required: false,
  },
  type: {
    type: 'String',
    required: false,
  },
  results: {
    type: 'Array',
    requied: false,
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
  active: 'Boolean',
});

export default mongoose.model('Location', LocationSchema);
