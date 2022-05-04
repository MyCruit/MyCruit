import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { Divider } from "antd";
import { ShowLogo } from "./ShowLogo";

function CompanyInfo() {
  const params = useParams();
  const { companies } = useSelector((state) => state.companyReducer);
  const company = companies.find((company) => company._id == params.id);
  return (
    <DefaultLayout>
      {company && (
        <div className="cprofile1 bs" style={{ height: 430 }}>
          <div className="flex">
            {ShowLogo("InfoPhoto", company)}
            <h3 style={{ textTransform: "uppercase" }}>
              <b>{company.companyName}</b>
            </h3>
          </div>

          <Divider className="mt-0" />
          <div className="bs companyInfo m-3 mt-0" style={{ float: "right" }}>
            <h6 className="color">Email</h6>
            <h6>{company.email}</h6>
            <h6 className="color pt-3">Contact</h6>{" "}
            <h6>{company.contactNumber}</h6>
            <h6 className="color pt-3">Address</h6> <h6>{company.address}</h6>
          </div>
          <h5>
            <b className="color pl-1">About Us</b>
          </h5>

          <p>{company.about}</p>
        </div>
      )}
    </DefaultLayout>
  );
}

export default CompanyInfo;
