const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
    serviceId: {
        type: Number,
        required: true,
      },
    serviceName: {
        type: String,
        required: true, 
    },
   options: {
        type: String,
        required: true,  
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },
    salonId: {
        type: Number,
        required: true,
      },

})
const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;