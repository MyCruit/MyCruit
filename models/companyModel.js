const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    category: { type: String, required: true },
    companyName: { type: String, default: "" },
    companyLogo: { type: Buffer },
    contactNumber: { type: String, default: "" },
    about: { type: String, default: "" },
    location: { type: String, default: "" },
    postedJobs: [],
  },
  { timestamps: true }
);

const companyModel = new mongoose.model("company", companySchema);

module.exports = companyModel;
