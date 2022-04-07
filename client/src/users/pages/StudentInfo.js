import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import DefaultLayout from "../../component/DefaultLayout";

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
          <h3>
            <b>Personal inforamtion</b>
          </h3>
          <p>
            <b>First name : </b>
            {student.firstName}
          </p>
          <p>
            <b>Last name : </b>
            {student.lastName}
          </p>
          <p>
            <b>Gender : </b>
            {student.gender}
          </p>
          <p>
            <b>About : </b>
            {student.about}
          </p>
          <p>
            <b>Email : </b>
            {student.email}
          </p>
          <p>
            <b>Contact : </b>
            {student.contactNumber}
          </p>
          <p>
            <b>College Email : </b>
            {student.collegeMail}
          </p>
          <p>
            <b>College ID: </b>
            {student.collegeid}
          </p>
          <p>
            <b>Address : </b>
            {student.address}
          </p>
          <hr />
          <h3>
            <b>Education</b>
          </h3>
          <p>
            <b>Institute : </b>
            {student.education.institute}
          </p>
          <p>
            <b>Course : </b>
            {student.education.course}
          </p>
          <p>
            <b>Branch : </b>
            {student.education.branch}
          </p>
          <p>
            <b>Current Year : </b>
            {student.education.currentYear}
          </p>
          <p>
            <b>Passing Year : </b>
            {student.education.yop}
          </p>
          <p>
            <b>CGPA : </b>
            {student.education.cgpa}
          </p>
          <hr />
          <div>
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
