const asynchandler =require("express-async-handler");
const { User,ValidateChangePassword } = require("../models/User");
const jwt =require("jsonwebtoken");
const bcrypt =require("bcryptjs");
const nodemailer =require("nodemailer");


/**
 * @desc get forget password view
 * @router /password/forget-password
 * @method get
 * @access puplic
 */
const getForgotPasswordView=asynchandler((req,res)=>{
  res.render('forgot-password');
});
/**
 * @desc send forgot password link
 * @router /password/forget-password
 * @method post
 * @access puplic
 */
const sendForgotPasswordLink=asynchandler(async(req,res)=>{
   const user =await User.findOne({email: req.body.email});
   if(!user){
    res.status(404).json({message:"email not  found"});
   }

   const secret =process.env.JWT_SECRAT_KEY + user.password;
   const token =jwt.sign({email:user.email ,id:user.id},secret,{expiresIn:'10m'});

   const link =`http://localhost:3000/password/reset-password/${user.id}/${token}`;
   const transporter =nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASSWORD
    }
   });
   const mailOption={
    from:process.env.USER_EMAIL,
    to:user.email,
    subject:"reset password",
    html:`<div>
            <h4> click on the email bellow to reset the password </h4>
            <p>${link}</p>
          </div>`
   }

   transporter.sendMail(mailOption,function(error,success){
    if(error){
        console.log(error);
        res.status(500).json({message:"something is wrong"})

    }else{
        console.log("email send :"+success.response);
        res.render("link-send");
    }
   })

  });

  /**
 * @desc get reset password view
 * @router /password/forget-password/:userId/:token
 * @method get
 * @access puplic
 */
const getResetPasswordView=asynchandler(async(req,res)=>{
    const user =await User.findById(req.params.userId);
    if(!user){
     res.status(404).json({message:"email not  found"});
    }
 
    const secret =process.env.JWT_SECRAT_KEY + user.password;
   try {
    jwt.verify(req.params.token,secret);
    res.render('reset-password',{email:user.email});
    
   } catch (error) {
    console.log(error);
    res.json({message:"error"});
    
   }
 
   });
   


/**
* @desc reset the password 
* @router /password/forget-password/:userId/:token
* @method post
* @access puplic
*/
const resetPassword=asynchandler(async(req,res)=>{
  const {error}=ValidateChangePassword(req.body);
  if(error){
    res.status(400).json({message:error.details[0].message});
  }
  const user =await User.findById(req.params.userId);
  if(!user){
   res.status(404).json({message:"email not  found"});
  }

  const secret =process.env.JWT_SECRAT_KEY + user.password;
 try {
  jwt.verify(req.params.token,secret);
  const salt= await bcrypt.genSalt(10);
  req.body.password =await  bcrypt.hash( req.body.password,salt);

  user.password= req.body.password;

  await user.save();
  res.render('success-password')
  
 } catch (error) {
  console.log(error);
  res.json({message:"error"});
  
 }

 });




module.exports={
    getForgotPasswordView,
    sendForgotPasswordLink,
    getResetPasswordView,
    resetPassword,
}