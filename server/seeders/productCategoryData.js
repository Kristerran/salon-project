// const mongoose = require('mongoose');
// const db = require('../models');

// mongoose.connect('mongodb://localhost/salon-project', {
//   useNewUrlParser: true,
//   // useFindAndModify: false,
//   useUnifiedTopology: true,
// });

// const productCategory = [
//     { "name": 'BB Hairdressers Invisible Oil' },
//     { "name": 'BB Thickening' },
//     { "name": 'BB Curl' },
//     { "name": 'BB Surf' }
// ];

// db.ProductCategory.deleteMany({})
//   .then(() => db.ProductCategory.collection.insertMany(productCategory))
//   .then((data) => {
//     // console.log(data.result.n + ' records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });