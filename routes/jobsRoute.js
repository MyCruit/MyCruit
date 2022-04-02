const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");

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

module.exports = router;
