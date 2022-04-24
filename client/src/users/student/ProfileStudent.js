import React, { useState } from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { BiPencil } from "react-icons/bi";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input, Select, Row, Col, Upload } from "antd";
import { useDispatch } from "react-redux";
import {
  updateUser,
  updateResume,
  updateProfilePhoto,
} from "../../redux/action/usersAction";
import pic from "../../img/profile.png";
import { ShowPhoto } from "../pages/ShowPhoto";

const { Option } = Select;

const user = JSON.parse(localStorage.getItem("user"));

function ProfileStudent() {
  const dispatch = useDispatch();
  const [isModalVisible1, setIsModalVisible1] = useState(false); //Personal Details
  const [isModalVisible2, setIsModalVisible2] = useState(false); //Education Details
  const [isModalVisible3, setIsModalVisible3] = useState(false); //Resume
  const [isModalVisible4, setIsModalVisible4] = useState(false); //Profile Photo
  const [file, setFile] = useState("");

  function showModal1() {
    setIsModalVisible1(true);
  }

  function showModal2() {
    setIsModalVisible2(true);
  }

  function showModal3() {
    setIsModalVisible3(true);
  }

  function showModal4() {
    setIsModalVisible4(true);
  }

  function click1() {
    setIsModalVisible1(false);
  }

  function click2() {
    setIsModalVisible2(false);
  }

  function click3() {
    setIsModalVisible3(false);
  }

  function click4() {
    setIsModalVisible4(false);
  }

  function onPersonInfoSubmit(values) {
    dispatch(updateUser(values));
  }

  function onEduInfoSubmit(values) {
    dispatch(updateUser(values));
  }

  function PersonalDetails() {
    return (
      <Form
        id="myForm1"
        layout="vertical"
        onFinish={onPersonInfoSubmit}
        initialValues={user}
      >
        <Row gutter={16}>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: "Date of Birth is required" }]}
            >
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Gender is required" }]}
            >
              <Select placeholder="Select a Gender">
                <Option value="Female">Female</Option>
                <Option value="Male">Male</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Contact No."
              name="contactNumber"
              rules={[{ required: true, message: "Contact No. is required" }]}
            >
              <Input maxLength={10} />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="College Email"
              name="collegeMail"
              rules={[
                { required: true, message: "College Email is required" },
                {
                  type: "email",
                  message: "Please enter valid Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="College Id"
              name="collegeid"
              rules={[{ required: true, message: "College Id is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col lg={24} sm={24}>
            <Form.Item
              label="About"
              required
              rules={[{ required: true, message: "About is required" }]}
              name="about"
            >
              <Input.TextArea showCount maxLength={200} />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Address"
              required
              rules={[{ required: true, message: "Address is required" }]}
              name="address"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }

  function EducationDetails() {
    return (
      <Form
        id="myForm2"
        initialValues={user}
        layout="vertical"
        onFinish={onEduInfoSubmit}
      >
        <Row gutter={16}>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Institue"
              name={["education", "institute"]}
              rules={[
                {
                  required: true,
                  message: "Institute is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Course"
              name={["education", "course"]}
              rules={[{ required: true, message: "Course is required" }]}
            >
              <Select placeholder="Select a Course">
                <Option value="B.Tech">B. Tech</Option>
                <Option value="M.Tech">M. Tech</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Branch"
              name={["education", "branch"]}
              rules={[{ required: true, message: "Branch is required" }]}
            >
              <Select placeholder="Select a Branch">
                <Option value="Computer Science Engineering">
                  Computer Science Engineering
                </Option>
                <Option value="Information Technology">
                  Information Technology
                </Option>
                <Option value="Electronics and Communication Engineering">
                  Electronics and Communication Engineering
                </Option>
                <Option value="Electrical and Electronics Engineering">
                  Electrical and Electronics Engineering
                </Option>
                <Option value="Electronics and Instrumentation Engineering">
                  Electronics and Instrumentation Engineering
                </Option>

                <Option value="Mechatronics Engineering">
                  Mechatronics Engineering
                </Option>
                <Option value="Biotechnology Engineering">
                  Biotechnology Engineering
                </Option>
                <Option value="Chemical Engineering">
                  Chemical Engineering
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Current Year"
              name={["education", "currentYear"]}
              rules={[{ required: true, message: "Current Year is required" }]}
            >
              <Select placeholder="Select Current Year">
                <Option value="I">I Year</Option>
                <Option value="II">II Year</Option>
                <Option value="III">III Year</Option>
                <Option value="IV">IV Year</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Starting Year"
              name={["education", "yos"]}
              rules={[{ required: true, message: "Starting Year is required" }]}
            >
              <Input placeholder="yyyy" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Passing Year (expected)"
              name={["education", "yop"]}
              rules={[{ required: true, message: "Passing Year is required" }]}
            >
              <Input placeholder="yyyy" />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="CGPA"
              name={["education", "cgpa"]}
              rules={[{ required: true, message: "CGPA is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }

  // handle update for resume
  const handleUpdate1 = () => {
    let formdata = new FormData();
    formdata.append("resume", file);
    dispatch(updateResume(formdata));
  };

  //handle update for profile photo
  const handleUpdate2 = () => {
    let formdata = new FormData();
    formdata.append("profilePhoto", file);
    dispatch(updateProfilePhoto(formdata));
  };

  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  function showResume() {
    if (user.resume) var base64 = _arrayBufferToBase64(user.resume.data);
    return (
      <div>
        {user.resume ? (
          <iframe
            src={`data:application/pdf;base64,${base64}`}
            className="resume-iframe"
          />
        ) : (
          <div>No Resume Uploaded</div>
        )}
      </div>
    );
  }

  function ProfilePhoto() {
    return (
      <Form id="myForm4" layout="vertical" onFinish={handleUpdate2}>
        <Form.Item>
          <Upload
            name="profilePhoto"
            accept="image/*"
            maxCount={1}
            beforeUpload={(file) => {
              setFile(file);
            }}
            fileList={file === "" ? [] : [file]}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <div style={{ textAlign: "center" }}>
          {ShowPhoto("profilePhoto", user)}
        </div>
      </Form>
    );
  }

  function Resume() {
    return (
      <Form id="myForm3" layout="vertical" onFinish={handleUpdate1}>
        <Form.Item>
          <Upload
            name="resume"
            accept="application/pdf"
            maxCount={1}
            beforeUpload={(file) => {
              setFile(file);
            }}
            fileList={file === "" ? [] : [file]}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        {showResume()}
      </Form>
    );
  }

  return (
    <DefaultLayout>
      <div className="profile1 bs">
        <img className="bgImg" src={pic} />
        <div className="profile" onClick={showModal4}>
          {ShowPhoto("profilePhoto", user)}
          <BiPencil className="editProfile" style={{ fontSize: 40 }} />
        </div>

        <Modal
          title="Update Profile Photo"
          closable={false}
          visible={isModalVisible4}
          onOk={click4}
          onCancel={click4}
          style={{ top: 150 }}
          width={500}
          footer={[
            <Button onClick={click4}>Cancel</Button>,
            <Button
              form="myForm4"
              key="submit"
              htmlType="submit"
              onClick={click4}
            >
              Update
            </Button>,
          ]}
        >
          <ProfilePhoto />
        </Modal>
        <h3 style={{ textTransform: "uppercase", marginTop: 50 }}>
          {user.firstName} {user.lastName}
        </h3>
        <h5>
          {user.education.yop} Passout Batch - {user.collegeid}
        </h5>
        <p>
          <span>
            {user.education.course} | {user.education.currentYear} Year
          </span>
          <br />
          <span>{user.education.branch}</span>
          <br />
          <span>{user.education.institute}</span>
        </p>
      </div>
      <div className="profile2 bs">
        <div className="row">
          <h5 className="pt-3 color col">About</h5>
          <BiPencil
            className="mt-3 mr-3"
            style={{ fontSize: 25, cursor: "pointer", color: "#606568" }}
            onClick={showModal1}
          />
        </div>

        <hr className="pb-3" />
        <div className="row">
          <h6 className="col-4 color">Username</h6>
          <h6 className="col">{user.username}</h6>
        </div>
        <hr />
        <div className="row">
          <h6 className="col-4 color">Name</h6>
          <h6 className="col">
            {user.firstName} {user.lastName}
          </h6>
        </div>
        <hr />
        <div className="row">
          <h6 className="col-4 color">Date of Birth</h6>
          <h6 className="col">{user.dob}</h6>
        </div>
        <hr />
        <div className="row">
          <h6 className="col-4 color">Gender</h6>
          <h6 className="col">{user.gender}</h6>
        </div>
        <hr />
        <div className="row">
          <h6 className="col-4 color">About</h6>
          <h6 className="col">{user.about}</h6>
        </div>
        <hr />
        <h5 className="pt-5 color">Contact Details</h5>

        <hr className="pb-3" />
        <div className="row">
          <h6 className="col-4 color">Contact No.</h6>
          <h6 className="col">{user.contactNumber}</h6>
        </div>
        <hr />
        <div className="row">
          <h6 className="col-4 color">Personal Email ID</h6>
          <h6 className="col">{user.email}</h6>
        </div>
        <hr />
        <div className="row">
          <h6 className="col-4 color">College Email ID</h6>
          <h6 className="col">{user.collegeMail}</h6>
        </div>
        <hr />
        <h5 className="pt-5 color">Address</h5>
        <hr className="pb-3" />
        <div className="row">
          <h6 className="col-4 color">Address</h6>
          <h6 className="col">{user.address}</h6>
        </div>
        <hr />
        <Modal
          title="Update Personal Details"
          closable={false}
          visible={isModalVisible1}
          onOk={click1}
          onCancel={click1}
          style={{ top: 50 }}
          width={800}
          footer={[
            <Button onClick={click1}>Cancel</Button>,
            <Button
              form="myForm1"
              key="submit"
              htmlType="submit"
              onClick={click1}
            >
              Update
            </Button>,
          ]}
        >
          <PersonalDetails />
        </Modal>
      </div>
      <div className="profile2 bs">
        <div className="row">
          <h5 className="pt-3 color col">Education</h5>
          <BiPencil
            className="mt-3 mr-3"
            style={{ fontSize: 25, cursor: "pointer", color: "#606568" }}
            onClick={showModal2}
          />
        </div>
        <hr className="pb-2" />
        <div className="row">
          <h5 className="col-8">{user.education.branch}</h5>
          <h5 className="col">CGPA - {user.education.cgpa} </h5>
        </div>
        <h6>{user.education.institute}</h6>
        <h6>
          {user.education.course} | {user.education.currentYear} Year
        </h6>
        <h6>{user.collegeid}</h6>
        <h6>
          Jul {user.education.yos} - May {user.education.yop}
        </h6>
        <Modal
          title="Update Education"
          closable={false}
          visible={isModalVisible2}
          onOk={click2}
          onCancel={click2}
          style={{ top: 50 }}
          width={800}
          footer={[
            <Button onClick={click2}>Cancel</Button>,
            <Button
              form="myForm2"
              key="submit"
              htmlType="submit"
              onClick={click2}
            >
              Update
            </Button>,
          ]}
        >
          <EducationDetails />
        </Modal>
      </div>
      <div className="profile2 bs pb-5">
        <div className="row">
          <h5 className="pt-3 color col">Resume</h5>
          <BiPencil
            className="mt-3 mr-3"
            style={{ fontSize: 25, cursor: "pointer", color: "#606568" }}
            onClick={showModal3}
          />
        </div>
        <hr className="pb-4" />
        <div>{showResume()}</div>

        <Modal
          title="Update Resume"
          closable={false}
          visible={isModalVisible3}
          onOk={click3}
          onCancel={click3}
          style={{ top: 50 }}
          width={800}
          footer={[
            <Button onClick={click3}>Cancel</Button>,
            <Button
              form="myForm3"
              key="submit"
              htmlType="submit"
              onClick={click3}
            >
              Update
            </Button>,
          ]}
        >
          <Resume />
        </Modal>
      </div>
    </DefaultLayout>
  );
}

export default ProfileStudent;
