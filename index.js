const express = require('express');
const port = 4000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded()); // to add req.body
app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server',${err}`);
    }
    console.log(`Server is running in the port:${port}`);
})