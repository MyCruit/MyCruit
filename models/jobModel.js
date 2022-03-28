const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobProfile: { type: String, required: true },
    salary: { type: String, required: true },
    jobType: { type: String, required: true },
    smallDescription: { type: String, required: true },
    fullDescription: {
      type: {
        descrption: { type: String },
        documents: { type: [Buffer] },
      },
      required: true,
    },
    eligibility: {
      type: {
        yop: { type: String, default: "" },
        course: { type: String, default: "" },
        branch: { type: String, default: "" },
        cgpa: { type: String, default: "" },
      },
      required: true,
    },
    companyid: { type: String, required: true },
    appliedCandidates: { type: [], required: true },
  },
  {
    timestamps: true,
  }
);

const jobModel = new mongoose.model("jobs", jobSchema);
module.exports = jobModel;
