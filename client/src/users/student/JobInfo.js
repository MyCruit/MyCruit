import { Button } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayoutStudent from "../../component/DefaultLayoutStudent";

function JobInfo() {
  const params = useParams();
  const { jobs } = useSelector((state) => state.jobReducer);
  const job = jobs.find((job) => job._id == params.id);
  return (
    <div>
      <DefaultLayoutStudent>
        {job && (
          <div>
            <p>
              <b>Title</b> : {job.title}
            </p>
            <p>
              <b>Company</b> : {job.company}
            </p>

            <p>
              <b>Small Description</b> : {job.smallDescription}
            </p>
            <p>
              <b>Full Description</b> : {job.fullDescription}
            </p>
            <p>
              <b>Title</b> : {job.title}
            </p>
            <p>
              <b>Skills Required</b> : {job.skillsRequired}
            </p>
            <p>
              <b>Experience</b> : {job.experience}
            </p>
            <p>
              <b>Minimum Qualification</b> : {job.minimumQualification}
            </p>

            <hr />

            <p>
              <b>Salary Range</b> : {job.salaryFrom} - {job.salaryTo}
            </p>
            <p>
              <b>Department</b> : {job.department}
            </p>
            <p>
              <b>Company Profile</b> : {job.companyDescription}
            </p>
            <p>
              <b>Total Candidates applied</b> : {job.appliedCandidates.length}
            </p>

            <hr />

            <div className="flex justify-content-between">
              <Button>Apply Now</Button>
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
