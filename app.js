const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');
const mongoose = require('mongoose');

require('dotenv').config();
app.use(bodyParser({ urlextended: true }));
app.use(bodyParser.json());
app.use('/api', router);

mongoose.connect(process.env.DBURL, { useMongoClient: true });
mongoose.Promise = Promise;
mongoose.set('debug', true);

app.listen(process.env.PORT, function () {
    console.log(`Server listening at port: ${ process.env.PORT }`);
});