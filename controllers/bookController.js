

const asyncHandler = require("express-async-handler");

const { validateCreateBook, validateUpdateBook, Book } = require("../models/Book")


//decumentation 
/**
 * @desc Get all books
 * @route /api/books
 * @method Get
 * @access public
 */

const gitAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
}
)


/**
 * @desc Get book by id
 * @route /api/books/:id
 * @method Get
 * @access public
 */

const gitBookById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
        res.status(200).json(book)
    } else {
        res.status(404).json({ messge: "book not found" });
    }

})

module.exports = { gitAllBooks, gitBookById };


