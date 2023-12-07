

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

/**
 * @desc Create New Book 
 * @route /api/books
 * @method Post
 * @access private(only Admin)
 */

const createBook = asyncHandler(async (req, res) => {

    const { error } = validateCreateBook(req.body);
    if (error) {
        return res.status(400).json({ messge: error.details[0].message });
    }
    const book = new Book(
        {
            bookTitle: req.body.bookTitle,
            authorName: req.body.authorName,
            imageURL: req.body.imageURL,
            category: req.body.category,
            bookDescription: req.body.bookDescription,
            bookPDFURL: req.body.bookPDFURL
            
        }
    )

    const result = await book.save();
    res.status(201).json(result);
});




module.exports = { gitAllBooks, gitBookById ,createBook};


