const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});
const order = [
  {
    "salonId": "1",
    "orderId": "5",
    "purchaseDate": "10-06-2019",
    "orderType": "kids haircut"
  },
  {
    "salonId": "1",
    "orderId": "7",
    "purchaseDate": "11-06-2019",
    "orderType": "adult haircut"
  },
  {
    "salonId": "1",
    "orderId": "10",
    "purchaseDate": "05-06-2019",
    "orderType": "color"
  }
]
db.Order.deleteMany({})
  .then(() => db.Order.collection.insertMany(order))
  .then((data) => {
    // console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
