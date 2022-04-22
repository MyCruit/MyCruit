import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DefaultLayout from "../../component/DefaultLayout";
import companyPic from "../../img/company.png";
import studentPic from "../../img/student.png";
import { FaUserGraduate, FaBuilding } from "react-icons/fa";
import { RiSuitcaseFill } from "react-icons/ri";

function HomeAdmin() {
  const { jobs } = useSelector((state) => state.jobReducer);
  const { companies } = useSelector((state) => state.companyReducer);
  const { students } = useSelector((state) => state.studentReducer);

  return (
    <DefaultLayout>
      <div className="flex justify-content-around">
        <div className="mb-5 p-4 bs counting flex">
          <div
            className="countIcon"
            style={{ backgroundColor: "rgba(3,77,212,0.17)" }}
          >
            <FaUserGraduate
              className="iconPosition"
              style={{ color: "#034dd4" }}
            />
          </div>
          <div>
            <div
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              {students.length}
            </div>
            <div style={{ fontSize: 12, textAlign: "center" }}>
              Total Students
            </div>
          </div>
        </div>
        <div className="mb-5 p-4 bs counting flex">
          <div
            className="countIcon"
            style={{ backgroundColor: "rgba(222,176,7,0.19)" }}
          >
            <FaBuilding className="iconPosition" style={{ color: "#e3a509" }} />
          </div>
          <div>
            <div
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              {companies.length}
            </div>
            <div style={{ fontSize: 12, textAlign: "center" }}>
              Total Companies
            </div>
          </div>
        </div>
        <div className="mb-5 p-4 bs counting flex">
          <div
            className="countIcon"
            style={{ backgroundColor: "rgba(55,184,22,0.19)" }}
          >
            <RiSuitcaseFill
              className="iconPosition"
              style={{ color: "#37b816" }}
            />
          </div>
          <div>
            <div
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              {jobs.length}
            </div>
            <div style={{ fontSize: 12, textAlign: "center" }}>
              Total Jobs Posted
            </div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <Link to="/studentList">
          <div className="card">
            <img src={studentPic} />
            <div className="cardname">
              <h3>Students</h3>
            </div>
          </div>
        </Link>
        <Link to="/companyList">
          <div className="card">
            <img src={companyPic} />
            <div className="cardname">
              <h3>Companies</h3>
            </div>
          </div>
        </Link>
      </div>
    </DefaultLayout>
  );
}

export default HomeAdmin;
