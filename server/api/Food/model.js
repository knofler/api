/*
* Food Model
*
* This contains defalut Food model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  item: {
    type: 'String',
    required: false,
  },
  info: {
    type: 'String',
    required: false,
  },
  img: {
    type: 'String',
    required: false,
  },
  genre: {
    type: 'String',
    required: false,
  },
  cost: {
    type: 'String',
    required: false,
  },
  privacy: {
    type: 'String',
    required: false,
  },
  latitude: {
    type: 'String',
    required: false,
  },
  longitude: {
    type: 'String',
    required: false,
  },
  location: {
    type: 'String',
    required: false,
  },
  popular: {
    type: 'String',
    required: false,
  },
  suburb: {
    type: 'String',
    required: false,
  },
  state: {
    type: 'String',
    required: false,
  },
  country: {
    type: 'String',
    required: false,
  },
  recipe: {
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

export default mongoose.model('Food', FoodSchema);
