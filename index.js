const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
mongoose.connect(`mongodb+srv://pratikpopat:${process.env.MONGODB_PASSWORD}@cluster0.egqlg.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true  }, function () {
    console.log('Succesfully connected');
});

const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');

app.use('/products', productRoute);
app.use('/category', categoryRoute);


app.listen(3000, () => {
    console.log('server started!');

});

