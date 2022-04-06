import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { Card, Result, Button } from "antd";
import { Link } from "react-router-dom";

function AppliedJobs() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { jobs } = useSelector((state) => state.jobReducer);
  return (
    <div>
      <DefaultLayout>
        {user.appliedJobs.length === 0 ? (
          <Result
            status="403"
            title="Oops!!!"
            subTitle="You have not applied to any job yet!"
            extra={
              <Link to="/">
                <Button>Back to Home</Button>
              </Link>
            }
          />
        ) : (
          <h3>Your Applications</h3>
        )}

        {user.appliedJobs.map((job) => {
          const appliedJob = jobs.find((i) => i._id == job.jobid);
          return (
            <Link to={`/jobs/${appliedJob._id}`}>
              <Card
                type="inner"
                title={appliedJob.jobProfile}
                extra={
                  <Link to={`/jobs/${appliedJob._id}`}>
                    {" "}
                    <RightOutlined />
                  </Link>
                }
                className="m-4 bs"
              >
                <div>
                  <p>{appliedJob.jobType}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </DefaultLayout>
    </div>
  );
}

export default AppliedJobs;
