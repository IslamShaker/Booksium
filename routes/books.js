const express = require("express");
const router = express.Router();

//import Methods

const {gitAllBooks,gitBookById , deleteBook,updateBook,createBook}=require("../controllers/bookController") 



router.route("/").get(gitAllBooks);

router.route("/:id").get(gitBookById);

router.route("/").post(createBook);



module.exports=router;
