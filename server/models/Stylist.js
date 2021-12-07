const mongoose = require('mongoose');

const { Schema } = mongoose;

const stylistSchema = new Schema({
    stylistId: {
        type: Number,
        required: true,
      },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    imgPath: {
        type: "String",
        required: true,
    },
    salonId: {
        type: Number,
        required: true,
    
      },
 
})
const Stylist = mongoose.model('Stylist', stylistSchema);

module.exports = Stylist;