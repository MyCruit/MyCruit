import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { Card, Button, Result } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

function HomeCompany() {
  const alljobs = useSelector((state) => state.jobReducer).jobs;
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const userPostedJobs = alljobs.filter((job) => job.companyid == userid);
  return (
    <DefaultLayout>
      {userPostedJobs.length === 0 ? (
        <Result
          status="403"
          title="Oops!!!"
          subTitle="You have not posted any job yet!"
          extra={
            <Link to="/post">
              <Button>Post a Job</Button>
            </Link>
          }
        />
      ) : (
        <h3></h3>
      )}

      {userPostedJobs.map((job) => {
        return (
          <Link to={`/jobs/${job._id}`}>
            <Card
              type="inner"
              title={<h4>{job.jobProfile}</h4>}
              extra={
                <Link to={`/jobs/${job._id}`}>
                  <RightOutlined />
                </Link>
              }
              className="m-4 bs"
              hoverable={true}
            >
              <div className="flex justify-content-between">
                <div>
                  <p>
                    Job Type : <b>{job.jobType}</b>
                  </p>
                  <p>
                    Applied Candidates : <b>{job.appliedCandidates.length}</b>
                  </p>
                </div>
                <p>Posted on : {moment(job.createdAt).format("MMM DD yyyy")}</p>
              </div>
            </Card>
          </Link>
        );
      })}
    </DefaultLayout>
  );
}

export default HomeCompany;
