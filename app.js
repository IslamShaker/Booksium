//call for express
const express = require("express");


require("dotenv").config();


//call the Mongoose
const mongoose = require("mongoose");
//.connect("mongodb://127.0.0.1:27017/B")
//Connection To Database//
mongoose
    .connect("mongodb://127.0.0.1:27017/BookStore")
    .then(() => console.log("Connected To MongoDB ...."))
    .catch((error) => console.log("Connection Failed To MongoDB !", error));


//init App
const app = express();

app.use(express.urlencoded({extended:false}));


//set view engine
app.set('view engine','ejs');

//Apply Middlewares
app.use(express.json());


app.use("/api/books", require("./routes/books"));
app.use("/api/auth" ,require("./routes/auth"));
app.use("/api/upload" ,require("./routes/upload"));



//Running The Server
const Port =3000 ;
app.listen(Port, () => console.log(`Server is running in  mode on port ${Port}`));