const express = require('express');
const ejs = require("ejs");
const path = require("path");
// const expressEjsLayouts = require("express-ejs-layouts");
require("dotenv").config();
const {initRoutes} = require("./routes/web");
const mongoose = require("mongoose");

const app = express();

// app.use(expressEjsLayouts);
app.set("views", path.join(__dirname,"/resources/views"));
app.set('view engine', 'ejs');
app.use(express.static('public'))

//MongoDB Connection
const url = "mongodb://localhost:27017/pizza";
mongoose.connect(url, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open",(err)=>
{
    if(err)
    {
        console.log("MongoDB Connection failed...");
    }
    else
    {
        console.log("MongoDB Database connected...");
    }
});

// Routing 
initRoutes(app);



app.listen(process.env.PORT, (err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(`server is listening on port ${process.env.PORT}...`);
    }
});