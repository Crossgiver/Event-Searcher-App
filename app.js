const express = require('express');
const app     = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could Not Connect to Database: ', err);
  }
  else {
    console.log('Connected to Database: ' + config.db);
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hello from Crossgiver</h1>');
});

app.listen(8000, () => {
  console.log('Server is Listening On Port 8000');
});
