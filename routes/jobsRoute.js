const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");
const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const { ObjectId } = require("mongodb");

router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ _id: -1 });
    res.send(jobs);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

router.post("/postjob", async (req, res) => {
  const { user, values } = req.body;

  try {
    const newjob = new Job(values);
    await newjob.save();

    const userDetails = await Company.findOne({ _id: user._id });

    const postedJob = {
      jobid: newjob._id,
    };

    userDetails.postedJobs.push(postedJob);

    await userDetails.save();
    res.send(userDetails);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/applyjob", async (req, res) => {
  const { user, job } = req.body;

  try {
    const jobDetails = await Job.findOne({ _id: job._id });
    const appliedCandidate = {
      userid: user._id,
      status: "Applied",
    };

    jobDetails.appliedCandidates.push(appliedCandidate);

    await jobDetails.save();

    const userDetails = await Student.findOne({ _id: user._id });

    const appliedJob = {
      jobid: job._id,
      status: "Applied",
    };

    userDetails.appliedJobs.push(appliedJob);

    await userDetails.save();

    res.send(userDetails);
  } catch (error) {
    res.send(error);
  }
});

router.post("/select", async (req, res) => {
  const { user_id, job } = req.body;

  try {
    await Job.findOneAndUpdate(
      { _id: job._id, "appliedCandidates.userid": user_id },
      {
        $set: { "appliedCandidates.$.status": "Selected" },
      }
    );

    await Student.findOneAndUpdate(
      { _id: user_id, "appliedJobs.jobid": job._id },
      {
        $set: { "appliedJobs.$.status": "Selected" },
      }
    );

    res.send();
  } catch (error) {
    res.send(error);
  }
});

router.post("/shortlist", async (req, res) => {
  const { user_id, job } = req.body;

  try {
    await Job.findOneAndUpdate(
      { _id: job._id, "appliedCandidates.userid": user_id },
      {
        $set: { "appliedCandidates.$.status": "Shortlisted" },
      }
    );

    await Student.findOneAndUpdate(
      { _id: user_id, "appliedJobs.jobid": job._id },
      {
        $set: { "appliedJobs.$.status": "Shortlisted" },
      }
    );

    res.send();
  } catch (error) {
    res.send(error);
  }
});

router.post("/deleteJob", async (req, res) => {
  try {
    const id = ObjectId(req.body._id);
    await Company.update(
      { _id: req.body.companyid },
      { $pull: { postedJobs: { jobid: id } } }
    );

    await Student.updateMany(
      {},
      {
        $pull: {
          appliedJobs: {
            jobid: req.body._id,
          },
        },
      },
      { multi: true }
    );
    await Job.findOneAndDelete({ _id: req.body._id });
    res.send();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
