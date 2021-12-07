const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
});
const category = [
    {
        "categoryId": "5",
        "salonId": "1",
        "name": "haircare"

    },
    {
        "categoryId": "4",
        "salonId": "1",
        "name": "skincare"
    },
    {
        "categoryId": "3",
        "salonId": "1",
        "name": "style"
    }
]
db.Category.deleteMany({})
    .then(() => db.Category.collection.insertMany(category))
    .then((data) => {
        // console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
