import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { Result, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

function AppliedJobs() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { jobs } = useSelector((state) => state.jobReducer);
  const { companies } = useSelector((state) => state.companyReducer);
  return (
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
        <h3 className="pl-4"> Your Applications</h3>
      )}

      {user.appliedJobs.map((job) => {
        const appliedJob = jobs.find((i) => i._id === job.jobid);
        const company = companies.find(
          (company) => company._id === appliedJob.companyid
        );
        return (
          <Link to={`/jobs/${appliedJob._id}`}>
            <Row gutter={16}>
              <Col lg={24} sm={24}>
                <div className="bs m-4 p-3">
                  <div className="flex justify-content-between">
                    <h4>{company.companyName}</h4>

                    <Link to={`/jobs/${appliedJob._id}`}>
                      {" "}
                      <RightOutlined style={{ color: "#5e60ce" }} />
                    </Link>
                  </div>
                  <h5>
                    {appliedJob.jobProfile} - {appliedJob.jobType}
                  </h5>
                </div>
              </Col>
            </Row>
          </Link>
        );
      })}
    </DefaultLayout>
  );
}

export default AppliedJobs;
