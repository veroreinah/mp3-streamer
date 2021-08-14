require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// Middleware Setup
const whitelist = process.env.WHITELIST_DOMAINS.split(',');
const corsOptions = {
  origin: function(origin, callback) {
    const originIsWhitelisted = whitelist.some(domain => {
      const regExp = new RegExp(domain);
      return regExp.exec(origin);
    });
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

require('./routes')(app);

module.exports = app;