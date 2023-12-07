const express = require("express");
const router = express.Router();

//import Methods

const {gitAllBooks}=require("../controllers/bookController") 
const {gitBookById} =require("../controllers/bookController") 



router.route("/").get(gitAllBooks);

router.route("/:id").get(gitBookById);


module.exports=router;
