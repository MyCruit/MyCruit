import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import DefaultLayout from "../../component/DefaultLayout";

function CompanyInfo() {
  const params = useParams();
  const { companies } = useSelector((state) => state.companyReducer);
  const company = companies.find((company) => company._id == params.id);
  return (
    <DefaultLayout>
      {company && (
        <div>
          <h3>
            <b>Company Inforamtion</b>
          </h3>
          <p>
            <b>Name : </b>
            {company.companyName}
          </p>
          <p>
            <b>Email : </b>
            {company.email}
          </p>
          <p>
            <b>About : </b>
            {company.about}
          </p>
          <p>
            <b>Contact : </b>
            {company.contactNumber}
          </p>
          <p>
            <b>Address : </b>
            {company.address}
          </p>
        </div>
      )}
    </DefaultLayout>
  );
}

export default CompanyInfo;
