import { Button, Modal, Table } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import DefaultLayout from "../../component/DefaultLayout";
import { applyJob } from "../../redux/action/jobAction";

function JobInfo() {
  const params = useParams();
  const { jobs } = useSelector((state) => state.jobReducer);
  const { students } = useSelector((state) => state.studentReducer);
  const { companies } = useSelector((state) => state.companyReducer);
  const job = jobs.find((job) => job._id == params.id);
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const company = companies.find((company) => company._id == job.companyid);

  const dispatch = useDispatch();

  function applyNow() {
    dispatch(applyJob(job));
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  function List() {
    const candidatesColumns = [
      {
        title: "Full Name",
        dataIndex: "fullName",
        render: (text, data) => {
          return (
            <Link
              to={`/students/${data.candidateid}`}
              style={{ color: "#5e60ce" }}
            >
              {data.fullName}
            </Link>
          );
        },
      },
      {
        title: "College Id",
        dataIndex: "collegeId",
      },

      {
        title: "Email",
        dataIndex: "email",
      },
    ];

    var candidatesDatasource = [];

    for (var candidate of job.appliedCandidates) {
      var user = students.find((user) => user._id == candidate.userid);

      var obj = {
        fullName: user.firstName + " " + user.lastName,
        collegeId: user.collegeid,
        email: user.email,
        candidateid: user._id,
      };

      candidatesDatasource.push(obj);
    }

    return (
      <Table columns={candidatesColumns} dataSource={candidatesDatasource} />
    );
  }

  return (
    <div>
      <DefaultLayout>
        {job && (
          <div>
            <Link to={`/company/${company._id}`} style={{ color: "#5e60ce" }}>
              <p>
                <b>Company : {company.companyName}</b>
              </p>
            </Link>
            <p>
              <b>Profile</b> : {job.jobProfile}
            </p>
            <p>
              <b>Job Type</b> : {job.jobType}
            </p>
            <p>
              <b>Description</b> : {job.fullDescription}
            </p>
            <p>
              <b>Eligibility</b>
              <p>Minimum CGPA : {job.eligibility.cgpa}</p>
              <p>Year of Passing : {job.eligibility.yop}</p>
              <p>Course : {job.eligibility.course}</p>
              <p>Branches : {`${job.eligibility.branch}`} </p>
            </p>
            <hr />
            <p>
              <b>Location</b> : {job.location}
            </p>
            <p>
              <b>Salary</b> : {job.salary}
            </p>
            <p>
              <b>Total Candidates applied</b> : {job.appliedCandidates.length}
            </p>

            <hr />

            <Modal
              title="List of Applied Candidates"
              visible={isModalVisible}
              closable={false}
              onOk={handleOk}
              onCancel={handleCancel}
              width={800}
            >
              <List />
            </Modal>

            <div className="flex justify-content-between">
              {userid == job.companyid ? (
                <Button onClick={showModal}>Applied Candidates</Button>
              ) : job.appliedCandidates.find(
                  (candidate) => candidate.userid == userid
                ) ? (
                <Button className="" disabled>
                  Already Applied
                </Button>
              ) : (
                <Button onClick={applyNow}>Apply Now</Button>
              )}
              <p>
                <b>Posted on:</b> {moment(job.createdAt).format("MMM DD yyyy")}
              </p>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default JobInfo;
