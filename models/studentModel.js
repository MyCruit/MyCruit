const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    category: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    mobileNumber: { type: String, default: "" },
    portfolio: { type: String, default: "" },

    about: { type: String, default: "" },
    address: { type: String, default: "" },

    education: { type: [], default: [""] },
    skills: { type: [], default: [""] },
    projects: { type: [], default: [""] },
    experience: { type: [], default: [""] },

    appliedJobs: [],
  },
  { timestamps: true }
);

const studentModel = new mongoose.model("student", studentSchema);

module.exports = studentModel;
