import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { Result, Row, Col } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

function HomeCompany() {
  const { jobs } = useSelector((state) => state.jobReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  const userPostedJobs = jobs.filter((job) => job.companyid === user._id);
  return (
    <DefaultLayout>
      {userPostedJobs.length === 0 ? (
        <Result
          status="403"
          title="Oops!!!"
          subTitle="You have not posted any job yet!"
          extra={
            <Link to="/post">
              <button className="btn-p">Post a Job</button>
            </Link>
          }
        />
      ) : (
        <h3></h3>
      )}

      {userPostedJobs.map((job) => {
        return (
          <Link to={`/jobs/${job._id}`}>
            <Row gutter={16}>
              <Col lg={24} sm={24}>
                <div className="bs m-4 p-3">
                  <div className="flex justify-content-between">
                    <h4>{job.jobProfile}</h4>

                    <Link to={`/jobs/${job._id}`}>
                      {" "}
                      <RightOutlined style={{ color: "#5e60ce" }} />
                    </Link>
                  </div>
                  <h6>Job Type : {job.jobType}</h6>
                  <div className="flex justify-content-between">
                    <h6>Applied Candidates : {job.appliedCandidates.length}</h6>
                    <h6>
                      Posted on : {moment(job.createdAt).format("MMM DD yyyy")}
                    </h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Link>
        );
      })}
    </DefaultLayout>
  );
}

export default HomeCompany;
