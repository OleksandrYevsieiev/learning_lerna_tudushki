const express = require('express');
const router = require('./router');
const { errorsHandler } = require('./middleware');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.use(errorsHandler.errorHandler);

module.exports = app;
