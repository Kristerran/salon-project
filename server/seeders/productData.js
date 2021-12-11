const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});
const product = [
  {
    "salonId": "1",
    "productId": "2",
    "title": "Shampoo",
    "quantity": 2,
    "images": "img",
    "ratings": "5",
    "tags": "3",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "salonId": "1",
    "productId": "4",
    "title": "Shampoo",
    "quantity": 2,
    "images": "img",
    "ratings": "5",
    "tags": "3",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "salonId": "1",
    "productId": "7",
    "title": "Shampoo",
    "quantity": 2,
    "images": "img",
    "ratings": "5",
    "tags": "3",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

db.Product.deleteMany({})
  .then(() => db.Product.collection.insertMany(product))
  .then((data) => {
    // console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });