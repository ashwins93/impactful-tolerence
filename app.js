const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');

require('dotenv').config();
app.use(bodyParser({ urlextended: true }));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(process.env.PORT || 3000, function () {
    console.log(`Server listening at port: ${process.env.PORT || 3000 }`);
});