const path = require('path');
const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');

const app = express();

//connecting to data database
mongoose.connect('mongodb://localhost/database')
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

//settings
app.set('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/tasks', require('./routes/tasks'));

//static files
app.use(express.static(__dirname + '/public'));

//server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
