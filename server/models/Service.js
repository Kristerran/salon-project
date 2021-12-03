const mongoose = require('mongoose');

const { Schema } = mongoose;
const serviceSchema = new Schema({
    kidsHairCut: {
        type: String,
        required: true, 
    },
    menHairCut: {
        type: String,
        required: true,  
    },
    womenHairCut: {
        type: String,
        required: true,  
    },
    color: {
        type: String,
        required: true,  
    },
    style: {
        type: String,
        required: true,  
    },
    treatments: {
        type: String,
        required: true,  
    },
    texture: {
        type: String,
        required: true,  
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },


})
const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;