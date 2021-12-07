const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

const user = [
  {
    "salonId": "1",
    "roleId": "1",
    "username": "AAvisha",
    "firstname": "Aavash ",
    "lastname": "Poudel",
    "email": "aavishap@yahoo.com",
    "password": "password01"
  },
  {
    "salonId": "1",
    "roleId": "2",
    "username": "Jasmine-Jas",
    "firstname": "Jasmine ",
    "lastname": "Kin",
    "email": "Jkin@yahoo.com",
    "password": "password02"
  },
  {
    "salonId": "1",
    "roleId": "1",
    "username": "Yana",
    "firstname": "Yana ",
    "lastname": "Garbu",
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
