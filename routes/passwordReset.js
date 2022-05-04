const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const Admin = require("../models/adminModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    let user = "";
    if (req.body.category == "Student")
      user = await Student.findOne({ email: req.body.email });
    else if (req.body.category == "Company")
      user = await Company.findOne({ email: req.body.email });
    else if (req.body.category == "Admin")
      user = await Admin.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("User with given email doesn't exist!");

    const link = `${process.env.BASE_URL}/passwordReset/${user.category}/${user._id}`;
    await sendEmail(user.email, "Password reset", link);

    res.send();
  } catch (error) {
    res.send(error);
  }
});

router.post("/:category/:userId", async (req, res) => {
  try {
    let user = "";
    if (req.params.category == "Student")
      user = await Student.findById(req.params.userId);
    else if (req.params.category === "Company")
      user = await Company.findById(req.params.userId);
    else if (req.params.category == "Admin")
      user = await Admin.findById(req.params.userId);
    if (!user) return res.status(400).send("Invalid link!");

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user.password = hashedPassword;

    await user.save();

    res.send();
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});

module.exports = router;
