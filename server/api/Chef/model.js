/*
* Chef Model
*
* This contains defalut Chef model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const ChefSchema = new Schema({
  name: {
    type: 'String',
    required: false,
  },
  age: {
    type: 'Number',
    required: false,
  },
  sex: {
    type: 'String',
    required: true,
  },
  skills: {
    type: 'String',
    required: false,
  },
  latitude: {
    type: 'String',
    required: true,
  },
  longitude: {
    type: 'String',
    required: true,
  },
  address: {
    type: 'String',
    required: true,
  },
  suburb: {
    type: 'String',
    required: true,
  },
  postcode: {
    type: 'Number',
    required: true,
  },
  state: {
    type: 'String',
    required: false,
  },
  country: {
    type: 'String',
    required: true,
  },
  ethnicity: {
    type: 'String',
    required: false,
  },
  popular: {
    type: 'String',
    required: false,
  },
  phone: {
    type: 'String',
    required: true,
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
  editedBy: {
    type: 'String',
    required: false,
  },
  edited_at: {
    type: 'Date',
    default: Date.now,
    required: false,
  },
});

export default mongoose.model('Chef', ChefSchema);
