const mongoose = require('mongoose');

const { Schema } = mongoose;
const apptSchema = new Schema({
    id: {
        type: Number,
        required: true, 
    },
    available: {
        type: Boolean,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    start:{
        type: Date,
        required: true,
    },
    client:{
        type: String,
        required: false,
    },
    service:{
        type: String,
        required: false,
    },
    contact:{
        type: String,
        required: false,
    }
})
const Appt = mongoose.model('Appt', apptSchema);
module.exports = Appt;