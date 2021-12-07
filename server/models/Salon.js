const mongoose = require('mongoose');

const { Schema } = mongoose;
const salonSchema = new Schema({
    salonId: {
        type: Number,
        required: true
    },
    name:
    {
        type: String,
        required: true,
        trim: true,
    },
    location:
    {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    }

})
const Salon = mongoose.model('Salon', salonSchema);
module.exports = Salon;