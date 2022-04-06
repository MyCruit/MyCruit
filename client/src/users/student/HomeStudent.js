import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button, Result } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import DefaultLayout from "../../component/DefaultLayout";

function HomeStudent() {
  const { jobs } = useSelector((state) => state.jobReducer);
  const { companies } = useSelector((state) => state.userReducer);
  return (
    <div>
      <DefaultLayout>
        {jobs.length === 0 ? (
          <Result
            status="403"
            title="Oops!!!"
            subTitle="No jobs found!"
            extra={
              <Link to="/profile">
                <Button>Complete your Profile</Button>
              </Link>
            }
          />
        ) : (
          <p></p>
        )}
        <Row gutter={16}>
          {jobs.map((job) => {
            const company = companies.find(
              (company) => company._id === job.companyid
            );

            return (
              <Col lg={12} sm={24}>
                <div className="job-div bs m-4 p-3">
                  <h4>{job.jobProfile}</h4>

                  {/* <p>
                    <b>{company.companyName}</b>
                  </p> */}
                  <hr />
                  <div className="flex">
                    <p style={{ marginLeft: 20 }}>
                      Job Type : <b>{job.jobType} </b>,{" "}
                    </p>
                    <p>
                      Salary : <b>{job.salary}</b>{" "}
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-content-between">
                    <Link to={`/jobs/${job._id}`}>
                      <Button>View</Button>
                    </Link>
                    <p>
                      Posted on : {moment(job.createdAt).format("MMM DD yyyy")}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DefaultLayout>
    </div>
  );
}

export default HomeStudent;
