const mongoose = require('mongoose');

const { Schema } = mongoose;
const apptSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    start:{
        type: String,
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