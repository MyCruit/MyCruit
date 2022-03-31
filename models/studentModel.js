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
    dob: { type: Date, default: "" },
    gender: { type: String, default: "" },
    profilePhoto: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFs62iow439BwRx4Q1MxhLIhgyLN0AEfI80UPqyLio1--NXlDtmQiqoowzbgj41WLVpGo&usqp=CAU",
    },
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
        currentSem: { type: String, default: "" },
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
