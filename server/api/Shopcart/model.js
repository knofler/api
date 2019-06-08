/*
* Shopcart Model
*
* This contains defalut Shopcart model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const ShopcartSchema = new Schema({
  name: {
    type: 'String',
    required: true,
  },
  info: {
    type: 'String',
    required: false,
  },
  product_id: {
    type: 'String',
    required: false,
  },
  produced_by: {
    type: 'String',
    required: false,
  },
  img: {
    type: 'String',
    required: false,
  },
  cost: {
    type: 'Number',
    required: false,
  },
  genre: {
    type: 'String',
    required: false,
  },
  recipe: {
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
  address: {
    type: 'String',
    required: false,
  },
  suburb: {
    type: 'String',
    required: false,
  },
  postcode: {
    type: 'Number',
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
  shipping: {
    type: 'Number',
    required: false,
  },
  quantity: {
    type: 'Number',
    required: false,
  },
  cartStatus: {
    type: 'String',
    required: false,
  },
  available: {
    type: 'String',
    required: false,
  },
  phone: {
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
  carted_by: {
    type: 'String',
    required: false,
  },
  carted_at: {
    type: 'Date',
    default: Date.now,
    required: false,
  },
  saved_by: {
    type: 'String',
    required: false,
  },
  saved_at: {
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

export default mongoose.model('Shopcart', ShopcartSchema);
