const express = require('express');
require("dotenv").config();

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/", (req,res)=>
{
    res.render("home");
})

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