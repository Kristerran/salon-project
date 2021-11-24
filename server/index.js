const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const uri = config.getSecretToken();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res, next) => {
    return res.json({ message: 'Server Running' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

mongoose
    .connect(uri)
    .then(function () {
        console.log('Mongoose connection successful');
    })
    .catch(function (err) {
        console.log(err);
    });