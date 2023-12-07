const mongoose = require("mongoose");
const Joi = require("joi");


//Book Scheama
const BookScheama = new mongoose.Schema({
    bookTitle: {
        type: String,
        
        trim: true,
    },
    authorName: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    bookDescription: {
        type: String,
        required: true,
        trim: true,
    },
    bookPDFURL:{
        type: String,
        required: true,
        trim: true,
    }


}, { timeseries: true });


//Book Model
const Book = mongoose.model("Book", BookScheama);


//Vaildate Creat Book
function validateCreateBook(obj) {
    const shcema = Joi.object({
        bookTitle: Joi.string().trim().required(),
        authorName: Joi.string().required(),
        imageURL: Joi.string().trim().required(),
        category: Joi.string().required(),
        bookDescription: Joi.string().required(),
        bookPDFURL: Joi.string().required(),
        
    });
    return shcema.validate(obj)
}


//Vaildate Update Book
function validateUpdateBook(obj) {
    const shcema = Joi.object({
        bookTitle: Joi.string().trim(),
        authorName: Joi.string(),
        imageURL: Joi.string().trim(),
        category: Joi.string(),
        bookDescription: Joi.string(),
        bookPDFURL: Joi.string(),
    });
    return shcema.validate(obj)
}


module.exports = { Book, validateCreateBook, validateUpdateBook };
