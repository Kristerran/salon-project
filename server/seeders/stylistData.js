const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
});
const stylist = [
    {
        "salonId": "1",
        "stylistId": "3",
        "name": "Maya",
        "speciality": "hair stylist",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "year": "10",
        "imgPath": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png"
    },
    {
        "salonId": "1",
        "stylistId": "2",
        "name": "Sijam",
        "speciality": "hair stylist",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "year": "10",
        "imgPath": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png"
    },
    {
        "salonId": "1",
        "stylistId": "1",
        "name": "Aanya",
        "speciality": "hair stylist",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "year": "10",
        "imgPath": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png"
    },
]
db.Stylist.deleteMany({})
    .then(() => db.Stylist.collection.insertMany(stylist))
    .then((data) => {
        // console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });