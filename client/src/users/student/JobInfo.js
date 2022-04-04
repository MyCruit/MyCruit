import { Button } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayoutStudent from "../../component/DefaultLayoutStudent";
import { applyJob } from "../../redux/action/jobAction";

function JobInfo() {
  const params = useParams();
  const { jobs } = useSelector((state) => state.jobReducer);
  const job = jobs.find((job) => job._id == params.id);
  const userid = JSON.parse(localStorage.getItem("user"))._id;

  const appliedCandidates = job.appliedCandidates;

  const alreadyApplied = appliedCandidates.find(
    (candidate) => candidate.userid == userid
  );

  const dispatch = useDispatch();

  function applyNow() {
    dispatch(applyJob(job));
  }

  return (
    <div>
      <DefaultLayoutStudent>
        {job && (
          <div>
            <p>
              <b>Profile</b> : {job.jobProfile}
            </p>
            {/* <p>
              <b>Description</b> : {job.fullDescription}
            </p>
            <p>
              <b>Eligibility</b> : {job.eligibility}
            </p> */}
            <hr />
            <p>
              <b>Salary</b> : {job.salary}
            </p>
            <p>
              <b>Job Type</b> : {job.jobType}
            </p>
            {/* <p>
              <b>About Company</b> : {job.companyDescription}
            </p> */}
            <p>
              <b>Total Candidates applied</b> : {job.appliedCandidates.length}
            </p>

            <hr />

            <div className="flex justify-content-between">
              {userid == job.companyid ? (
                <Button>Applied Candidates</Button>
              ) : alreadyApplied ? (
                <Button className="" disabled>
                  Already Applied
                </Button>
              ) : (
                <Button onClick={applyNow}>Apply Now</Button>
              )}
              <p>
                <b>Posted on</b> {moment(job.createdAt).format("MMM DD yyyy")}
              </p>
            </div>
          </div>
        )}
      </DefaultLayoutStudent>
    </div>
  );
}

export default JobInfo;
