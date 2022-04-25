import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Result } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import DefaultLayout from "../../component/DefaultLayout";
import Filter from "../../component/Filter";

function HomeStudent() {
  const { jobs } = useSelector((state) => state.jobReducer);
  const { companies } = useSelector((state) => state.companyReducer);
  console.log(companies);

  return (
    <DefaultLayout>
      {jobs.length === 0 ? (
        <Result
          status="403"
          title="Oops!!!"
          subTitle="No jobs found!"
          extra={
            <Link to="/profile">
              <button className="btn-p">Complete your Profile</button>
            </Link>
          }
        />
      ) : (
        <p></p>
      )}
      <Row gutter={16}>
        {jobs.length !== 0 ? (
          <div style={{ width: 350, marginLeft: 500 }}>
            <Filter />
          </div>
        ) : (
          <div></div>
        )}
        {jobs.map((job) => {
          let response = companies.find(
            (company) => company._id === job.companyid
          );
          return (
            <Col lg={12} sm={24}>
              <div className="bs m-4 p-3">
                <h4>{job.jobProfile}</h4>

                <p>
                  {response === undefined ? (
                    <b></b>
                  ) : (
                    <b>{response.companyName}</b>
                  )}
                </p>
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
                    <button className="btn-p">View</button>
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
  );
}

export default HomeStudent;
