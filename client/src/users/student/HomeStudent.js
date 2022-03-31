import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import DefaultLayoutStudent from "../../component/DefaultLayoutStudent";

function HomeStudent() {
  const { jobs } = useSelector((state) => state.jobReducer);
  return (
    <div>
      <DefaultLayoutStudent>
        <Row gutter={16}>
          {jobs.map((job) => {
            return (
              <Col lg={12} sm={24}>
                <div className="job-div bs m-4 p-3">
                  <h4>{job.jobProfile}</h4>
                  {/* <p>{job.company}</p> */}
                  <hr />
                  <p>{job.smallDescription}</p>
                  <div className="flex">
                    <p>
                      Salary : <b>{job.salary}</b> ,{" "}
                    </p>
                    <p style={{ marginLeft: 20 }}>
                      Job Type : <b>{job.jobType} </b>{" "}
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-content-between">
                    <Link to={`/Jobs/${job._id}`}>
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
      </DefaultLayoutStudent>
    </div>
  );
}

export default HomeStudent;
