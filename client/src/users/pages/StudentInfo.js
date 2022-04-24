import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { ShowPhoto } from "./ShowPhoto";

function StudentInfo() {
  const params = useParams();
  const { students } = useSelector((state) => state.studentReducer);
  const student = students.find((student) => student._id == params.id);
  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  if (student.resume) {
    var base64 = _arrayBufferToBase64(student.resume.data);
  }
  return (
    <DefaultLayout>
      {student && (
        <div>
          <div className="bs cprofile1 p-5">
            <div className="flex">
              {ShowPhoto("InfoPhoto")}
              <h3 style={{ textTransform: "uppercase" }}>
                <b>
                  {student.firstName} {student.lastName}
                </b>
              </h3>
            </div>

            <h5 className="pt-3 color">Personal Details</h5>
            <hr className="pb-3" />
            <div className="row">
              <h6 className="col-4 color">Username</h6>
              <h6 className="col">{student.username}</h6>
            </div>
            <hr />
            <div className="row">
              <h6 className="col-4 color">Name</h6>
              <h6 className="col">
                {student.firstName} {student.lastName}
              </h6>
            </div>
            <hr />
            <div className="row">
              <h6 className="col-4 color">Date of Birth</h6>
              <h6 className="col">{student.dob}</h6>
            </div>
            <hr />
            <div className="row">
              <h6 className="col-4 color">Gender</h6>
              <h6 className="col">{student.gender}</h6>
            </div>
            <hr />
            <div className="row">
              <h6 className="col-4 color">About</h6>
              <h6 className="col">{student.about}</h6>
            </div>
            <hr />
            <h5 className="pt-5 color">Contact Details</h5>

            <hr className="pb-3" />
            <div className="row">
              <h6 className="col-4 color">Contact No.</h6>
              <h6 className="col">{student.contactNumber}</h6>
            </div>
            <hr />
            <div className="row">
              <h6 className="col-4 color">Personal Email ID</h6>
              <h6 className="col">{student.email}</h6>
            </div>
            <hr />
            <div className="row">
              <h6 className="col-4 color">College Email ID</h6>
              <h6 className="col">{student.collegeMail}</h6>
            </div>
            <hr />
            <div className="row">
              <h6 className="col-4 color">Address</h6>
              <h6 className="col">{student.address}</h6>
            </div>
          </div>

          <div className="bs cprofile1 p-5">
            <h5 className="color">Education</h5>
            <hr className="pb-2" />
            <div className="row">
              <h5 className="col-8">{student.education.branch}</h5>
              <h5 className="col">CGPA - {student.education.cgpa} </h5>
            </div>
            <h6>{student.education.institute}</h6>
            <h6>
              {student.education.course} | {student.education.currentYear} Year
            </h6>
            <h6>{student.collegeid}</h6>
            <h6>
              Jul {student.education.yos} - May {student.education.yop}
            </h6>
          </div>

          <div className="bs cprofile1 p-5">
            <h5 className="color">Resume</h5>
            <hr className="pb-4" />
            {student.resume ? (
              <iframe
                src={`data:application/pdf;base64,${base64}`}
                className="resume-iframe"
              />
            ) : (
              <div>No Resume Uploaded</div>
            )}
          </div>
        </div>
      )}
    </DefaultLayout>
  );
}

export default StudentInfo;
