require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const api = require('./api');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(express.static('client/build'));

require('./database');

app.use(api);

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
