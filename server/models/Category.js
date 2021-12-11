const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({

  categoryId: {
    type: Number,
    required: true,
  },
  
  salonId: {
    type: Number,
    required: true,

  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
