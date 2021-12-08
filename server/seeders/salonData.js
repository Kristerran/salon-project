const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
});
const salon = [
    {
        "salonId": "1",
        "name": "Sara Salon",
        "location": "Sacramento, California",
        "phoneNumber": "916-555-5555"

    },
]
db.Salon.deleteMany({})
    .then(() => db.Salon.collection.insertMany(salon))
    .then((data) => {
        // console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
