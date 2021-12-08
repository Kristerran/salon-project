const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

const user = [
  {

    "username": "AAvisha",
    "firstName": "Aavash ",
    "lastName": "Poudel",
    "email": "aavishap@yahoo.com",
    "password": "password01"
  },
  {

    "username": "Jasmine-Jas",
    "firstName": "Jasmine ",
    "lastName": "Kin",
    "email": "Jkin@yahoo.com",
    "password": "password02"
  },
  {

    "username": "Yana",
    "firstName": "Yana ",
    "lastName": "Garbu",
    "email": "yanag@yahoo.com",
    "password": "password03"
  },

]

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(user))
  .then((data) => {
    // console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
