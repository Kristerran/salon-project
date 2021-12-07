const mongoose = require('mongoose');

const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema({
  orderId: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  orderType: {
    type: String,
    required: true,

  },
  salonId: {
    type: Number,
    required: true,

  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
  ],

})
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;