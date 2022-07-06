const express = require('express');
const ejs = require("ejs");
const path = require("path");
const expressEjsLayouts = require("express-ejs-layouts");
require("dotenv").config();

const app = express();




// app.use(expressEjsLayouts);
app.set("views", path.join(__dirname,"/resources/views"));
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/", (req,res)=>
{
    res.render("home");
});

app.listen(process.env.PORT, (err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(`server is listening on port ${process.env.PORT}`);
    }
});