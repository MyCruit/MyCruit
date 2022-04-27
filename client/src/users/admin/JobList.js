import { Row, Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import DefaultLayout from "../../component/DefaultLayout";
import { RightOutlined } from "@ant-design/icons";
import moment from "moment";

function JobList() {
  const params = useParams();
  const { jobs } = useSelector((state) => state.jobReducer);
  const { companies } = useSelector((state) => state.companyReducer);
  const company = companies.find((user) => user._id === params.id);
  const companyPostedJobs = jobs.filter((job) => job.companyid == company._id);
  return (
    <DefaultLayout>
      {companyPostedJobs.map((job) => {
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
export default JobList;
