const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    salonId: {
        type: Number,
        required: true,
    
      },
 
})
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;