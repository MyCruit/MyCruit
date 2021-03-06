const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: { type: String, required: true },
    password: { type: String, required: true },
    category: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    contactNumber: { type: String, default: "" },
    dob: { type: String, default: "" },
    gender: { type: String, default: "" },
    profilePhoto: { type: Buffer },
    collegeMail: { type: String, default: "" },
    resume: { type: Buffer },
    about: { type: String, default: "" },
    address: { type: String, default: "" },
    education: {
      type: {
        institute: { type: String, default: "" },
        course: { type: String, default: "" },
        branch: { type: String, default: "" },
        currentYear: { type: String, default: "" },
        yos: { type: String, default: "" },
        yop: { type: String, default: "" },
        cgpa: { type: String, default: "" },
      },
      default: {},
    },
    collegeid: { type: String, default: "" },
    appliedJobs: [],
  },
  { timestamps: true }
);

const studentModel = new mongoose.model("student", studentSchema);

module.exports = studentModel;
