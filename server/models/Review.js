const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    id: {
        type: Number,
        autoIncrement: true,
        required: true,
      },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    quote: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    rating: {
        type: String,
        required: true,
    }
})
const review = mongoose.model('review', reviewSchema);

module.exports = review;


