const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const Admin=require("../models/adminModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        let user="";
        if(req.body.category=="Student")
            user = await Student.findOne({ email: req.body.email });
        else if(req.body.category=="Company")
            user = await Company.findOne({ email: req.body.email });
        else if(req.body.category=="Admin")
            user = await Admin.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("user with given email doesn't exist");

        /*let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }
        */
        const link = `${process.env.BASE_URL}/passwordReset/${user.category}/${user._id}`;
        await sendEmail(user.email, "Password reset", link);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

router.post("/:category/:userId", async (req, res) => {
    try {
        let user="";
        //console.log(req.params.category);
        if(req.params.category=="Student")
            user = await Student.findById(req.params.userId);
        else if(req.params.category==="Company")
            user = await Company.findById(req.params.userId);
        else if (req.params.category=="Admin")
            user = await Admin.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        // const token = await Token.findOne({
        //     userId: user._id,
        //     token: req.params.token,
        // });
        // if (!token) return res.status(400).send("Invalid link or expired");
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashedPassword;

        await user.save();
        //await token.delete();

        res.send("password reset sucessfully.");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

module.exports = router;