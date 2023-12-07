const express=require("express");
const router = express.Router();
const multar =require("multer");
const path =require("path");

const storage =multar.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,"../images"));
    },
    filename:function(req,file,cb){
        cb(null, new Date().toISOString().replace(/:/g,"-")+ file.originalname);
    }
})

const upload =multar({storage});

router.post("/",upload.single("image"),(req,res)=>{
res.status(200).json({messagr:"image uploaded"});
})






module.exports =router;