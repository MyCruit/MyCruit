import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DefaultLayout from "../../component/DefaultLayout";
import companyPic from "../../img/company.png";
import studentPic from "../../img/student.png";

function HomeAdmin() {
  const { jobs } = useSelector((state) => state.jobReducer);
  const { companies } = useSelector((state) => state.companyReducer);
  const { students } = useSelector((state) => state.studentReducer);

  return (
    <DefaultLayout>
      <h1 className="mb-5">{jobs.length}</h1>
      <h1 className="mb-5">{companies.length}</h1>
      <h1 className="mb-5">{students.length}</h1>

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
    </DefaultLayout>
  );
}

export default HomeAdmin;
