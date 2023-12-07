const asynchandler =require("express-async-handler")
const bcrypt =require("bcryptjs");


const { User,ValidateRegisterUser,ValidateLoginrUser}=require("../models/User");


/**
 * @desc register new user
 * @router /api/auth/register
 * @method post
 * @access puplic
 */
const register=asynchandler(async(req,res)=>{
    const {error} =ValidateRegisterUser(req.body);
    if(error){
       return res.status(400).json({message :error.details[0].message});
    }


    let user =await User.findOne({email: req.body.email });
    if (user){
       return res.status(400).json({message:"user is already register"});
    }

    const salt = await bcrypt.genSalt(10);

    req.body.password =await bcrypt.hash(req.body.password ,salt);

    user =new User({
       email : req.body.email,
       username : req.body.username,
       password : req.body.password,
      

    }) ;
    const result =await user.save();

    const token = user.generateToken();

    const{ password ,...other} =result._doc;

    res.status(201).json({...other ,token});
});


/**
 * @desc login user
 * @router /api/auth/login
 * @method post
 * @access puplic
 */

const login =asynchandler(async(req,res)=>{
    const {error} =ValidateLoginrUser(req.body);
    if(error){
       return res.status(400).json({message :error.details[0].message});
    }


    let user =await User.findOne({email: req.body.email });
    if (!user){
       return res.status(400).json({message:"invalid email or password"});
    }

    const IsMatchPassword =await bcrypt.compare(req.body.password, user.password);

    if (!IsMatchPassword){
        return res.status(400).json({message:"invalid email or password"});
     }


    const token = user.generateToken();

    const{ password ,...other} =user._doc;

    res.status(201).json({...other ,token});
})



module.exports={
    register,
    login,
    
}