import React from "react";
import { Link } from "react-router-dom";
import DefaultLayoutAdmin from "../../component/DefaultLayoutAdmin";
import companyPic from "../../img/companyPic.png";
import studentPic from "../../img/studentPic.png";

function HomeAdmin() {
  return (
    <DefaultLayoutAdmin>
      <h1 className="mb-5">Dashboard</h1>

      <div className="flex justify-content-around">
        <Link to="/companyList">
          <div className="card">
            <img src={companyPic} />
            <div className="cardname">
              <h3>Company</h3>
            </div>
          </div>
        </Link>
        <Link to="/studentList">
          <div className="card">
            <img src={studentPic} />
            <div className="cardname">
              <h3>Student</h3>
            </div>
          </div>
        </Link>
      </div>
    </DefaultLayoutAdmin>
  );
}

export default HomeAdmin;
