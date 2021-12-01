const mongoose = require('mongoose');

const { Schema } = mongoose;
const stylistSchema = new Schema({
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
    
})
const Stylist = mongoose.model('Stylist', stylistSchema);
module.exports = Stylist;