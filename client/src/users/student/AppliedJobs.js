import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector } from "react-redux";
import { Card } from "antd";
import { Link } from "react-router-dom";

function AppliedJobs() {
  const user = JSON.parse(localStorage.getItem("user"));
  const alljobs = useSelector((state) => state.jobReducer).jobs; //fetching data of all the jobs from database.
  const userAppliedJobs = user.appliedJobs; //storing id of all the jobs a user have applied to.

  return (
    <div>
      <DefaultLayout>
        <Card title="Your Applications">
          {userAppliedJobs.map((job) => {
            const appliedJob = alljobs.find((jobs) => jobs._id == job.jobid); //finding job with the same id as stored in users appliedJobs(for every job using map)
            // console.log(appliedJob);
            return (
              <Link to={`/jobs/${appliedJob._id}`}>
                <Card
                  type="inner"
                  title={appliedJob.jobProfile}
                  extra={<Link to={`/jobs/${appliedJob._id}`}>View</Link>}
                  className="m-4 bs"
                >
                  <div>
                    <p>{appliedJob.jobType}</p>
                    <p>{appliedJob.smallDescription}</p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </Card>
      </DefaultLayout>
    </div>
  );
}

export default AppliedJobs;
