const express = require('express');
const env = require('./config/environment'); // Used for the development
const port = env.port;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded()); // to add req.body
app.use(express.static('./assets')); // setting the static file to assets

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');  // setting the view engine as ejs
app.set('views','./views');

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server',${err}`);
    }
    console.log(`Server is running in the port:${port}`);
})