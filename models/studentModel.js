const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    category: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    contactNumber: { type: String, default: "" },
    resume: { type: String, default: "" },
    about: { type: String, default: "" },
    address: { type: String, default: "" },
    education: {
      type: {
        institute: { type: String, default: "" },
        course: { type: String, default: "" },
        branch: { type: String, default: "" },
        currentYear: { type: Number, default: "" },
        yop: { type: Number, default: "" },
        cgpa: { type: Number, default: "" },
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
