const express=require("express");
const { getForgotPasswordView, sendForgotPasswordLink ,getResetPasswordView,resetPassword } = require("../controllers/passwordController");
const router = express.Router();


router.route("/forgot-password")
                                .get(getForgotPasswordView)
                                .post(sendForgotPasswordLink);


router.route("/reset-password/:userId/:token")
.get( getResetPasswordView)
.post( resetPassword)                                

module.exports =router;