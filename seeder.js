const {Book}=require("./models/Book");

const {book}=require("./data");

const mongoose = require("mongoose");


require("dotenv").config();

//Connection To Database//
mongoose
    .connect("mongodb://127.0.0.1:27017/BookStore")
    .then(() => console.log("Connected To MongoDB ...."))
    .catch((error) => console.log("Connection Failed To MongoDB !", error));

//import books
const ImportBooks = async () => {
    try {
        await Book.insertMany(book);
        console.log("books imported")
    } catch (error) {
        console.log(error);
        process.exit(1);

    }
}

if (process.argv[2] === "-import") {
    ImportBooks();
}
