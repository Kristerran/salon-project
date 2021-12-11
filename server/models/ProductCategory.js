const mongoose = require('mongoose');

const { Schema } = mongoose;

const productCategorySchema = new Schema({
    id: {
        type: Number,
        autoIncrement: true,
        required: true,
      },
    name: {
        type: String,
        required: true,
    }
})
const productCategory = mongoose.model('productCategory', productCategorySchema);

module.exports = productCategory;