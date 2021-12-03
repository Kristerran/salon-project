const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = new Schema({
    title: {
        type: String,
        required: true, 
    },
    size: {
        type: String,
        required: true,  
    },
    price: {
        type: Number,
        required: true, 
        min: 0.09, 
    },
    images: {
        type: String,
        required: true,  
    },
    rating: {
        type: String,
        required: true,  
    },
    tags: {
        type: String,
        required: true,  
    },
    description: {
        type: String,
        required: true,  
    },
})
const Product = mongoose.model('Product', productSchema);
module.exports = Product;