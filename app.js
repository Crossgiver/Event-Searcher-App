<<<<<<< HEAD
//Import Node Modules
const express         = require('express'); // Web Framework for NodeJS
const app             = express(); // Initiate Express Application
const router          = express.Router();
const mongoose        = require('mongoose'); // ODM for MongoDB
const config          = require('./config/database'); // Mongoose Configurations
const path            = require('path'); // NodeJS Package for File Paths
const api  = require('./routes/api')(router); //
const bodyParser      = require('body-parser');
const cors            = require('cors');
const passport        = require('passport');
const social          = require('./passport/passport')(app, passport);
=======
const express = require('express');
const app     = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
>>>>>>> server-setup

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could Not Connect to Database: ', err);
  }
  else {
    console.log('Connected to Database: ' + config.db);
  }
});

<<<<<<< HEAD
app.use(cors({
  origin: 'http://localhost:4200'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Provide Static Directory for Frontend
app.use(express.static(__dirname + '/client/dist'));
app.use('/api', api);

// Connect Server to Angular 2 Index.html
=======
app.use(express.static(__dirname + '/client/dist/'));

>>>>>>> server-setup
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

// Start Server: Listen on Port 8000
app.listen(8000, () => {
  console.log('Server is Listening On Port 8000');
});
