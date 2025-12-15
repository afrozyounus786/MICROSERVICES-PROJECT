const express = require('express');
const cookieParser = require('cookie-parser');
const productRoute = require('../routes/products.route');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/products', productRoute);



module.exports = app;   