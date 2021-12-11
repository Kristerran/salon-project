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

  },
  orderType: {
    type: String,
    required: true,

  },
  salonId: {
    type: String,
    required: true,

  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],

})
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;