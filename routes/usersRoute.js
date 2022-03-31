const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const Admin = require("../models/adminModel");

router.post("/register", async (req, res) => {
  try {
    const userType = req.body.category;

    if (userType === "Student") {
      const newStudent = new Student(req.body);
      const student = await newStudent.save();
      res.send("Student Account Created successfully!");
    } else {
      const newCompany = new Company(req.body);
      const company = await newCompany.save();
      res.send("Company Account Created successfully!");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userType = req.body.category;
    let user = "";
    if (userType === "Student") {
      user = await Student.findOne({
        email: req.body.email,
        password: req.body.password,
      });
    } else if (userType === "Company") {
      user = await Company.findOne({
        email: req.body.email,
        password: req.body.password,
      });
    } else {
      user = await Admin.findOne({
        email: req.body.email,
        password: req.body.password,
      });
    }
    if (user) {
      res.send(user);
    } else {
      return res.status(404).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(404).json(error);
  }
});

module.exports = router;
