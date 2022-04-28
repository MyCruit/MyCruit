import { Divider, Modal, Table, Tag } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import DefaultLayout from "../../component/DefaultLayout";
import {
  applyJob,
  deleteJob,
  select,
  shortlist,
} from "../../redux/action/jobAction";
import { BsCardChecklist, BsCheckSquare } from "react-icons/bs";
import { CheckCircleOutlined } from "@ant-design/icons";
import { MdDelete } from "react-icons/md";
import { ShowLogo } from "./ShowLogo";

function JobInfo() {
  const params = useParams();
  const { jobs } = useSelector((state) => state.jobReducer);
  const { students } = useSelector((state) => state.studentReducer);
  const { companies } = useSelector((state) => state.companyReducer);
  const job = jobs.find((job) => job._id === params.id);
  const user = JSON.parse(localStorage.getItem("user"));
  const userid = user._id;
  const company = companies.find((company) => company._id === job.companyid);

  const dispatch = useDispatch();

  function applyNow() {
    dispatch(applyJob(job));
  }

  function ishidden() {
    if (user.category === "Admin") {
      return true;
    } else {
      return false;
    }
  }
  console.log(ishidden());
  console.log(user.category);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  function showModal1() {
    setIsModalVisible1(true);
  }

  function showModal2() {
    setIsModalVisible2(true);
  }

  function showModal3() {
    setIsModalVisible3(true);
  }

  function handleOk1() {
    setIsModalVisible1(false);
  }

  function handleOk2() {
    setIsModalVisible2(false);
  }

  function handleOk3() {
    setIsModalVisible3(false);
  }

  function List1() {
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
      {
        title: "Status",
        dataIndex: "status",
        render: () => {
          return (
            <Tag
              icon={<CheckCircleOutlined />}
              color="orange"
              style={{ fontSize: 15, padding: 7 }}
            >
              Applied
            </Tag>
          );
        },
      },
      {
        title: "Action",
        hidden: ishidden(),
        render: (text, data) => {
          return (
            <div className="flex">
              <BsCardChecklist
                style={{ fontSize: 27, cursor: "pointer" }}
                onClick={() => {
                  dispatch(shortlist(job, data.candidateid));
                }}
              />
            </div>
          );
        },
      },
    ].filter((item) => !item.hidden);

    var candidatesDatasource = [];

    for (var candidate of job.appliedCandidates) {
      if (candidate.status === "Applied") {
        var user = students.find((user) => user._id === candidate.userid);
        var obj = {
          fullName: user.firstName + " " + user.lastName,
          collegeId: user.collegeid,
          email: user.email,
          candidateid: user._id,
        };

        candidatesDatasource.push(obj);
      }
    }

    return (
      <div>
        <Table columns={candidatesColumns} dataSource={candidatesDatasource} />
        <button className="btn-p" onClick={handleOk1}>
          OK
        </button>
      </div>
    );
  }

  function List2() {
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
      {
        title: "Status",
        dataIndex: "status",
        render: () => {
          return (
            <Tag
              icon={<CheckCircleOutlined />}
              color="blue"
              style={{ fontSize: 15, padding: 5 }}
            >
              Shortlisted
            </Tag>
          );
        },
      },
      {
        title: "Action",
        hidden: ishidden(),
        render: (text, data) => {
          return (
            <div className="flex">
              <BsCheckSquare
                style={{ fontSize: 25, cursor: "pointer" }}
                onClick={() => {
                  dispatch(select(job, data.candidateid));
                }}
              />
            </div>
          );
        },
      },
    ].filter((item) => !item.hidden);

    var candidatesDatasource = [];

    for (var candidate of job.appliedCandidates) {
      if (candidate.status === "Shortlisted") {
        var user = students.find((user) => user._id === candidate.userid);
        var obj = {
          fullName: user.firstName + " " + user.lastName,
          collegeId: user.collegeid,
          email: user.email,
          candidateid: user._id,
        };

        candidatesDatasource.push(obj);
      }
    }

    return (
      <div>
        <Table columns={candidatesColumns} dataSource={candidatesDatasource} />
        <button className="btn-p" onClick={handleOk2}>
          OK
        </button>
      </div>
    );
  }

  function List3() {
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
      {
        title: "Status",
        dataIndex: "status",
        render: () => {
          return (
            <Tag
              icon={<CheckCircleOutlined />}
              color="green"
              style={{ fontSize: 15, padding: 5 }}
            >
              Selected
            </Tag>
          );
        },
      },
    ];

    var candidatesDatasource = [];

    for (var candidate of job.appliedCandidates) {
      if (candidate.status === "Selected") {
        var user = students.find((user) => user._id === candidate.userid);
        var obj = {
          fullName: user.firstName + " " + user.lastName,
          collegeId: user.collegeid,
          email: user.email,
          candidateid: user._id,
        };

        candidatesDatasource.push(obj);
      }
    }

    return (
      <div>
        <Table columns={candidatesColumns} dataSource={candidatesDatasource} />
        <button className="btn-p" onClick={handleOk3}>
          OK
        </button>
      </div>
    );
  }

  return (
    <DefaultLayout>
      {job && (
        <div className="bs cprofile1">
          <div className="flex">
            {ShowLogo("InfoPhoto", company)}
            <Link to={`/company/${company._id}`} style={{ color: "#5e60ce" }}>
              <h3
                className="companyLink"
                style={{ textTransform: "uppercase" }}
              >
                <b>{company.companyName}</b>
              </h3>
            </Link>
            {user.category === "Company" ? (
              <MdDelete
                onClick={() => {
                  dispatch(deleteJob(job));
                }}
                style={{
                  fontSize: 24,
                  cursor: "pointer",
                  marginLeft: "41rem",
                  marginBottom: 5,
                }}
              />
            ) : (
              <div></div>
            )}
          </div>

          <Divider className="mt-0" />
          <div className="bs jobInfo m-3 mt-0" style={{ float: "right" }}>
            <h6 className="color">Job Profile</h6>
            <h6>{job.jobProfile}</h6>
            <h6 className="color pt-3">Job Type</h6> <h6>{job.jobType}</h6>
            <h6 className="color pt-3">Job Location</h6> <h6>{job.location}</h6>
            <h6 className="color pt-3">Salary</h6>
            <h6>{job.salary}</h6>
          </div>
          <h5>
            <b className="color pl-1">About the Job</b>
          </h5>

          <p>{job.fullDescription}</p>

          <Divider />
          <h5 className="mb-3">
            <b className="color pl-1">Eligibility</b>
          </h5>
          <div className="row">
            <h6 className="col-3 color ml-1">Minimum CGPA Required</h6>
            <h6 className="col">{job.eligibility.cgpa}</h6>
          </div>
          <div className="row">
            <h6 className="col-3 color ml-1">Passing Year</h6>
            <h6 className="col">{job.eligibility.yop}</h6>
          </div>
          <div className="row">
            <h6 className="col-3 color ml-1">Eligible Courses</h6>
            <h6 className="col">{`${job.eligibility.course}`}</h6>
          </div>
          <div className="row">
            <h6 className="col-3 color ml-1">Eligible Branches</h6>
            <h6 className="col">{`${job.eligibility.branch}`}</h6>
          </div>
          <Divider />

          <h5>
            <b className="color">Total Candidates : </b>{" "}
            {job.appliedCandidates.length}
          </h5>
          <Divider />
          <Modal
            title="List of Applied Candidates"
            visible={isModalVisible1}
            footer={false}
            closable={false}
            width={800}
          >
            {List1()}
          </Modal>
          <Modal
            title="List of Shortlisted Candidates"
            visible={isModalVisible2}
            closable={false}
            footer={false}
            width={800}
          >
            {List2()}
          </Modal>
          <Modal
            title="List of Selected Candidates"
            visible={isModalVisible3}
            closable={false}
            footer={false}
            width={800}
          >
            {List3()}
          </Modal>
          <div className="flex justify-content-between">
            {userid === job.companyid || user.category === "Admin" ? (
              <div>
                <button className="btn-p" onClick={showModal1}>
                  Applied Candidates
                </button>
                <button onClick={showModal2} className="ml-5 btn-po">
                  Shortlisted Candidates
                </button>
                <button onClick={showModal3} className="ml-5 btn-po">
                  Selected Candidates
                </button>
              </div>
            ) : job.appliedCandidates.find(
                (candidate) => candidate.userid === userid
              ) ? (
              <button className="btn-disable" disabled>
                Already Applied
              </button>
            ) : (
              <button className="btn-p" onClick={applyNow}>
                Apply
              </button>
            )}
            <p>
              <b className="color">Posted on:</b>{" "}
              {moment(job.createdAt).format("MMM DD, yyyy")}
            </p>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
}

export default JobInfo;
