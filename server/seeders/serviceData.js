const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});
const service = [
    {
        "salonId": "1",
        "serviceId": "4",
        "serviceName": "hair color",
        "option": "hair care",
        "price": 95.00,
    },
    {
        "salonId": "1",
        "serviceId": "3",
        "serviceName": "curly hair style",
        "option": "hair care",
        "price": 55.00,
    },
    {
        "salonId": "1",
        "serviceId": "4",
        "serviceName": "hair color",
        "option": "hair care",
        "price": 95.00,
    },
    {
        "salonId": "1",
        "serviceId": "4",
        "serviceName": "hair color",
        "option": "hair care",
        "price": 95.00,
    },
    { 
        "salonId": "1",
        "serviceId": "4",
        "serviceName": "hair color",
        "option": "hair care",
        "price": 95.00,
    },
    {
        "salonId": "1",
        "serviceId": "4",
        "serviceName": "hair color",
        "option": "hair care",
        "price": 95.00,
    },
    {
        "salonId": "1",
        "serviceId": "4",
        "serviceName": "hair color",
        "option": "hair care",
        "price": 95.00,
    },
    {
        "salonId": "1",
        "serviceId": "4",
        "serviceName": "hair color",
        "option": "hair care",
        "price": 95.00,
    },
   
]
db.Service.deleteMany({})
  .then(() => db.Service.collection.insertMany(service))
  .then((data) => {
    // console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });