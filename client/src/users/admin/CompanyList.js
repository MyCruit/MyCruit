import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { MdDelete, MdRemoveRedEye, MdFormatListBulleted } from "react-icons/md";
import { ShowLogo } from "../pages/ShowLogo";
import { deleteUser } from "../../redux/action/usersAction";

function CompanyList() {
  const { companies } = useSelector((state) => state.companyReducer);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => {
        return a.name.localeCompare(b.name);
      },
      sortDirections: ["ascend"],
      render: (text, data) => {
        return (
          <div className="flex">
            {ShowLogo("listPhoto", data)}
            {data.name}
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Posted Jobs",
      render: (text, data) => {
        return (
          <div className="flex">
            <div>{data.jobs}</div>
            <Link
              to={`/jobList/${data.companyid}`}
              style={{ color: "#000000" }}
              className="ml-3 mt-3"
            >
              <MdFormatListBulleted className="mb-2" style={{ fontSize: 24 }} />
            </Link>
          </div>
        );
      },
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <Link
              to={`/company/${data.companyid}`}
              style={{ color: "#000000" }}
              className="mr-3 mt-1"
            >
              <MdRemoveRedEye style={{ fontSize: 24 }} />
            </Link>
            <MdDelete
              className="mb-2 mt-1"
              style={{ fontSize: 24, cursor: "pointer" }}
              onClick={() => {
                dispatch(deleteUser("Company", data.companyid));
              }}
            />
          </div>
        );
      },
    },
  ];

  var companyDatasource = [];

  for (var company of companies) {
    var obj = {
      name: company.companyName,
      email: company.email,
      jobs: company.postedJobs.length,
      companyid: company._id,
      companyLogo: company.companyLogo,
    };
    companyDatasource.push(obj);
  }

  return (
    <DefaultLayout>
      <h1>Company List</h1>
      <Table
        columns={columns}
        dataSource={companyDatasource}
        pagination={false}
      />
    </DefaultLayout>
  );
}

export default CompanyList;
