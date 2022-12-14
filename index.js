const express = require('express');
const app = express();
const port = 8000;
const db=require('./config/mongoose');
const cookieParser=require('cookie-parser');

// const path =require('path');
//use express router
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


//Set-up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// app.get('/',(req,res));

// app.use(express.urlencoded()); // middleware
app.use(express.static('assets')); //css and js files 

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
})
// git pull origin master
//git push -u origin master
