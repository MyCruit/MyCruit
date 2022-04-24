import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import { ShowLogo } from "../pages/ShowLogo";

function CompanyList() {
  const { companies } = useSelector((state) => state.companyReducer);
  console.log(companies);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
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
      title: "No. of jobs posted",
      dataIndex: "jobs",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <Link
              to={`/company/${data.companyid}`}
              style={{ color: "#000000" }}
              className="mr-3"
            >
              <MdRemoveRedEye />
            </Link>
            <MdDelete style={{ color: "#000000" }} />
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
