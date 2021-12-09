const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    productId: {
        type: Number,
        autoIncrement: true,
        required: true,
      },
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },
    images: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salonId: {
        type: Number,
        required: true,
      },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;