/*express creation server*/
const path = require('path');
const express = require('express');
const morgan = require('morgan')
const app = express();

//import routes 
const indexRoutes = require('../routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('html', path.join(__dirname, 'html'));
app.set('html engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//routes
app.use('/', indexRoutes);


//starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});