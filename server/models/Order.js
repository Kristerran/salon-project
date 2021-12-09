const mongoose = require('mongoose');

const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema({
  orderId: {
    type: Number,
    autoIncrement: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  orderType: {
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ]

})
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;