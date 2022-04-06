const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");
const Student = require("../models/studentModel");

router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

router.post("/postjob", async (req, res) => {
  try {
    const newjob = new Job(req.body);
    await newjob.save();
    res.send("Job Posted Successfully");
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
    };

    jobDetails.appliedCandidates.push(appliedCandidate);

    await jobDetails.save();

    const userDetails = await Student.findOne({ _id: user._id });

    const appliedJob = {
      jobid: job._id,
    };

    userDetails.appliedJobs.push(appliedJob);

    await userDetails.save();

    res.send(userDetails);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
