/*express creation server*/
const express = require('express');
const app = express();

//import routes 


//settings
app.set('port', process.env.PORT || 3000);
app.set

//middlewares


//starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});