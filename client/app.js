const express = require('express');
const exphbs = require('express-handlebars');
const path=require('path');
const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Handlebars
app.engine(
    '.hbs',
    exphbs({
      extname: '.hbs',
    })
  )

app.set('view engine', '.hbs')

// Routes
//app.use('/', require('./routes/index'))

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/home",(req,res)=>{
    res.render("cards");
});

app.get("/signup-investor",(req,res)=>{
    res.render("signup_investor");
});

app.get("/signup-startup",(req,res)=>{
    res.render("signup_startup");
});

app.get("/signup-intern",(req,res)=>{
    res.render("signup_intern");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});