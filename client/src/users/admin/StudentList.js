import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";

function StudentList() {
  const { students } = useSelector((state) => state.studentReducer);

  const columns = [
    {
      title: "College ID",
      dataIndex: "collegeId",
      sorter: (a, b) => {
        return a.collegeId.localeCompare(b.collegeId);
      },
      sortDirections: ["descend"],
    },
    {
      title: "Name",
      dataIndex: "fullName",
      sorter: (a, b) => {
        return a.fullName.localeCompare(b.fullName);
      },
      sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Course",
      dataIndex: "course",
      filters: [
        {
          text: "B.Tech",
          value: "B.Tech",
        },
        {
          text: "M.Tech",
          value: "M.Tech",
        },
      ],
      onFilter: (value, record) => record.branch.includes(value),
    },
    {
      title: "Branch",
      dataIndex: "branch",
      filters: [
        {
          text: "CSE",
          value: "Computer Science Engineering",
        },
        {
          text: "IT",
          value: "Information Technology",
        },
        {
          text: "EEE",
          value: "Electronics and Communication Engineering",
        },
        {
          text: "ECE",
          value: "Electrical and Electronics Engineering",
        },
        {
          text: "EI",
          value: "Electronics and Instrumentation Engineering",
        },
        {
          text: "ME",
          value: "Mechatronics Engineering",
        },
        {
          text: "BE",
          value: "Biotechnology Engineering",
        },
        {
          text: "CE",
          value: "Chemical Engineering",
        },
      ],
      onFilter: (value, record) => record.branch.includes(value),
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <Link
              className="mr-3"
              to={`/students/${data.candidateid}`}
              style={{ color: "#000000" }}
            >
              <MdRemoveRedEye />
            </Link>
            <MdDelete style={{ color: "#000000" }} />
          </div>
        );
      },
    },
  ];

  var studentsDatasource = [];

  for (var student of students) {
    var obj = {
      fullName: student.firstName + " " + student.lastName,
      collegeId: student.collegeid,
      email: student.email,
      course: student.education.course,
      branch: student.education.branch,
      candidateid: student._id,
    };

    studentsDatasource.push(obj);
  }

  return (
    <DefaultLayout>
      <h1>Student List</h1>
      <Table columns={columns} dataSource={studentsDatasource} />;
    </DefaultLayout>
  );
}

export default StudentList;
