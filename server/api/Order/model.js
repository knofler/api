/*
* Order Model
*
* This contains defalut Order model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  items: {
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
  totalCost: {
    type: 'Number',
    required: false,
  },
  subTotal: {
    type: 'Number',
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
  location: {
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
  ordered_by: {
    type: 'String',
    required: false,
  },
  ordered_at: {
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

export default mongoose.model('Order', OrderSchema);
