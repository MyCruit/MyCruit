const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const Admin = require("../models/adminModel");
const multer = require("multer");

router.post("/register", async (req, res) => {
  try {
    const userType = req.body.category;

    if (userType === "Student") {
      const newStudent = new Student(req.body);
      await newStudent.save();
      res.send("Student Account Created successfully!");
    } else {
      const newCompany = new Company(req.body);
      await newCompany.save();
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

router.get("/getallstudents", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

router.post("/update", async (req, res) => {
  try {
    const userType = req.body.category;
    let user = "";
    if (userType === "Student") {
      await Student.findOneAndUpdate({ _id: req.body._id }, req.body);
      user = await Student.findOne({ _id: req.body._id });
    } else {
      await Company.findOneAndUpdate({ _id: req.body._id }, req.body);
      user = await Company.findOne({ _id: req.body._id });
    }
    res.send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const upload = multer({
  limits: {
    // fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.endsWith(".pdf")) {
      return cb(new Error("Provide an PDF"));
    }
    cb(undefined, true);
  },
});

router.post("/resume", upload.single("resume"), async (req, res) => {
  try {
    // await Student.findOneAndUpdate({ _id: req.body._id }, req.body);
    const user = await Student.findOneAndUpdate(
      { _id: req.body._id },
      {
        resume: req.file.buffer,
      }
    );

    console.log(user);
    res.send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
