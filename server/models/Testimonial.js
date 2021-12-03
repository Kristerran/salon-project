const mongoose = require('mongoose');

const { Schema } = mongoose;
const testimonialSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    quote: {
        type: String,
        required: true,
    },
    starRrating: {
        type: String,
        required: true,
    },    
     
});
const Testimonial = mongoose.model('Testimonial', testimonialSchema);
module.exports = Testimonial;