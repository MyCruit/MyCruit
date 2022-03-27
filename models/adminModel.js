const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
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

const adminModel = new mongoose.model("admin", adminSchema);

module.exports = adminModel;
