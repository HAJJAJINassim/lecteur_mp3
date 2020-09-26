const express = require("express");
const app = express();
const bodyParser= require('body-parser')
const userRout= require('./routes/user')
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors());

//Middlewares run when ue get to an url

app.use("/user", userRout);
app.get('/test',(res)=>{
    console.log("bingo")
});

// listening
app.listen("3000");