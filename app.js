//call for express
const express = require("express");


//call the Mongoose
const mongoose = require("mongoose");

//Connection To Database//
mongoose
    .connect("mongodb://127.0.0.1:27017/BookStor")
    .then(() => console.log("Connected To MongoDB ...."))
    .catch((error) => console.log("Connection Failed To MongoDB !", error));


//init App
const app = express();

//Apply Middlewares
app.use(express.json());


app.get("/", (req, res) => {
        res.send("Hello , Welcome To Express JS");
    });




//Running The Server
const Port =3000 ;
app.listen(Port, () => console.log(`Server is running in  mode on port ${Port}`));