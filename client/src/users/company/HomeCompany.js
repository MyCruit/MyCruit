import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector } from "react-redux";
import { Card } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

function HomeCompany() {
  const alljobs = useSelector((state) => state.jobReducer).jobs;
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const userPostedJobs = alljobs.filter((job) => job.companyid == userid);
  console.log(userPostedJobs);

  return (
    <div>
      <DefaultLayout>
        <Card title="Jobs Posted by You">
          {userPostedJobs.map((job) => {
            return (
              <Link to={`/jobs/${job._id}`}>
                <Card
                  type="inner"
                  title={`${job.jobProfile} - ${job.jobType}`}
                  extra={<Link to={`/jobs/${job._id}`}>View</Link>}
                  className="m-4 bs"
                >
                  <div className="flex">
                    <p>
                      Applied Candidates : <b>{job.appliedCandidates.length}</b>
                    </p>
                    <p>
                      Posted on : {moment(job.createdAt).format("MMM DD yyyy")}
                    </p>
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

export default HomeCompany;
