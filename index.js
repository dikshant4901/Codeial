const express = require('express');
const app = express();
const port = 8000;
// const path =require('path');
//use express router
app.use('/',require('./routes'));


//Set-up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// app.get('/',(req,res));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
})
