const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const Jobs = require("../models/jobModel");
const Admin = require("../models/adminModel");
const multer = require("multer");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const userType = req.body.category;

    if (userType === "Student") {
      const newStudent = new Student(req.body);
      let user = await Student.find({ email: req.body.email });
      try {
        if (user.length != 0) {
          throw new Error();
        }
      } catch (error) {
        return res.status(409).send(error);
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      newStudent.password = hashedPassword;
      await newStudent.save();
      res.send(newStudent);
    } else {
      const newCompany = new Company(req.body);
      let user = await Company.find({ email: req.body.email });
      try {
        if (user.length != 0) throw new Error();
      } catch (error) {
        return res.status(409).send(error);
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      newCompany.password = hashedPassword;
      await newCompany.save();
      res.send(newCompany);
    }
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userType = req.body.category;
    let user = "";
    let result = "";
    if (userType === "Student") {
      user = await Student.findOne({
        email: req.body.email,
      });
      result = await bcrypt.compare(req.body.password, user.password);
    } else if (userType === "Company") {
      user = await Company.findOne({
        email: req.body.email,
      });
      result = await bcrypt.compare(req.body.password, user.password);
    } else {
      user = await Admin.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      result = true;
    }
    if (user.length != 0 && result == true) {
      res.send(user);
    } else {
      return res.status(404).json(error);
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

router.get("/getallcompanies", async (req, res) => {
  try {
    const companies = await Company.find();
    res.send(companies);
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

const upload2 = multer({
  limits: {
    // fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      return cb(new Error("Provide an jpg, png or jpeg only."));
    }
    cb(undefined, true);
  },
});

router.post("/resume", upload.single("resume"), async (req, res) => {
  try {
    await Student.findOneAndUpdate(
      { _id: req.body._id },
      {
        resume: req.file.buffer,
      }
    );
    const user = await Student.findOne({ _id: req.body._id });
    res.send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post(
  "/profilePhoto",
  upload2.single("profilePhoto"),
  async (req, res) => {
    try {
      await Student.findOneAndUpdate(
        { _id: req.body._id },
        {
          profilePhoto: req.file.buffer,
        }
      );
      const user = await Student.findOne({ _id: req.body._id });
      res.send(user);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
);

router.post("/companyLogo", upload2.single("companyLogo"), async (req, res) => {
  try {
    await Company.findOneAndUpdate(
      { _id: req.body._id },
      {
        companyLogo: req.file.buffer,
      }
    );
    const user = await Company.findOne({ _id: req.body._id });
    res.send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/deleteUser", async (req, res) => {
  try {
    const { category, userid } = req.body;

    if (category === "Student") {
      await Jobs.update(
        {},
        { $pull: { appliedCandidates: { userid: userid } } },
        { multi: true }
      );
      await Student.findOneAndDelete({ _id: userid });
    } else {
      const company = await Company.findOne({ _id: userid });

      const postedJobs = [];
      for (i = 0; i < company.postedJobs.length; i++) {
        postedJobs.push(company.postedJobs[i].jobid.toString());
      }
      await Student.updateMany(
        {},
        {
          $pull: {
            appliedJobs: {
              jobid: {
                $in: postedJobs,
              },
            },
          },
        },
        { multi: true }
      );

      await Jobs.deleteMany({ _id: { $in: postedJobs } });

      await Company.findOneAndDelete({ _id: userid });
    }
    res.send();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
