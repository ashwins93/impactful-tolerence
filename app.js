const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();
// const morgan = require('morgan');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
// app.use(morgan('short'));

mongoose.connect(process.env.DBURL);
mongoose.Promise = Promise;
mongoose.set('debug', true);

app.listen(process.env.PORT, () => console.log('Server Listening'));
