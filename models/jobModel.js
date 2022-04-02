const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobProfile: { type: String, required: true },
    salary: { type: String, required: true },
    jobType: { type: String, required: true },
    fullDescription: { type: String, required: true },
    eligibility: {
      type: {
        yop: { type: String, default: "" },
        course: { type: Array, default: "" },
        branch: { type: Array, default: "" },
        cgpa: { type: String, default: "" },
      },
      required: true,
    },
    companyid: { type: String, required: true },
    location: { type: String, default: "" },
    appliedCandidates: { type: [], required: true },
    documents: { type: [Buffer], default: [] },
  },
  {
    timestamps: true,
  }
);

const jobModel = new mongoose.model("jobs", jobSchema);
module.exports = jobModel;
