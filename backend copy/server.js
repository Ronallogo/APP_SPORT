const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require('dotenv').config(); 
const port = 3000;
const app = express();
//connectDB();
///middleware qui permet de traiter les données de la request

app.use(express.json());
app.use(express.urlencoded({extended :false}));


app.use("/app/person" , require("./person/router/app.person.routes.js"));

 

///routes 
 

///lancer le server
app.listen(port , ()=> console.log("SERVER_PORT : " + port));