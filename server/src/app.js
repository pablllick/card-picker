const express = require('express');
const morgan = require('morgan');
const deck = require('./router/deckRouter.js');

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/deck', deck);

module.exports = app;
