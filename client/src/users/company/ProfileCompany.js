import React, { useState } from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { Button, Form, Input, Row, Col, Upload, Modal } from "antd";
import { BiPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { updateCompanyLogo, updateUser } from "../../redux/action/usersAction";

const user = JSON.parse(localStorage.getItem("user"));

function ProfileCompany() {
  const dispatch = useDispatch();
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
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

  function click1() {
    setIsModalVisible1(false);
  }

  function click2() {
    setIsModalVisible2(false);
  }

  function click3() {
    setIsModalVisible3(false);
  }

  function onFinalFinish(values) {
    dispatch(updateUser(values));
  }

  const handleUpdate = () => {
    let formdata = new FormData();
    formdata.append("companyLogo", file);
    dispatch(updateCompanyLogo(formdata));
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

  function showLogo() {
    if (user.companyLogo)
      var base64 = _arrayBufferToBase64(user.companyLogo.data);
    return (
      <div>
        {user.companyLogo ? (
          <img className="companyLogo" src={`data:image/*;base64,${base64}`} />
        ) : (
          <img
            src="https://www.pngfind.com/pngs/m/665-6659827_enterprise-comments-default-company-logo-png-transparent-png.png"
            className="companyLogo"
          />
        )}
      </div>
    );
  }

  function ProfileLogo() {
    return (
      <Form id="myForm4" layout="vertical" onFinish={handleUpdate}>
        <Form.Item>
          <Upload
            name="companyLogo"
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
        <div style={{ textAlign: "center" }}>{showLogo()}</div>
      </Form>
    );
  }

  function CompanyDetails() {
    return (
      <Form
        id="myForm2"
        layout="vertical"
        onFinish={onFinalFinish}
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
          <Col lg={24} sm={24}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[
                { required: true, message: "Contact Number is required" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Company Location"
              rules={[{ required: true, message: "Location is required" }]}
              name="address"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }

  function CompanyDescription() {
    return (
      <Form
        id="myForm4"
        layout="vertical"
        onFinish={onFinalFinish}
        initialValues={user}
      >
        <Row gutter={16}>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Company Description"
              rules={[
                {
                  required: true,
                  message: "Company description is required",
                },
              ]}
              name="about"
            >
              <Input.TextArea rows={10} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }

  return (
    <DefaultLayout>
      <div className="cprofile1 bs">
        <div className="flex">
          <div className="clogo" onClick={showModal1}>
            {showLogo()}
            <BiPencil className="editLogo" style={{ fontSize: 35 }} />
          </div>
          <div style={{ marginLeft: 100 }}>
            <h3 style={{ textTransform: "uppercase" }}>
              <b>{user.companyName}</b>
              <BiPencil
                style={{
                  fontSize: 25,
                  cursor: "pointer",
                  color: "#606568",
                  marginLeft: 10,
                }}
                onClick={showModal2}
              />
            </h3>
            <div className="row">
              <h5 className="col color">Email</h5>
              <h5 className="col">{user.email}</h5>
            </div>
            <div className="row">
              <h5 className="col color">Contact</h5>
              <h5 className="col">{user.contactNumber}</h5>
            </div>
            <div className="row">
              <h5 className="col color">Loaction</h5>
              <h5 className="col">{user.address}</h5>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Update Company Logo"
        closable={false}
        visible={isModalVisible1}
        onOk={click1}
        onCancel={click1}
        style={{ top: 150 }}
        width={500}
        footer={[
          <Button onClick={click1}>Cancel</Button>,
          <Button
            form="myForm4"
            key="submit"
            htmlType="submit"
            onClick={click1}
          >
            Update
          </Button>,
        ]}
      >
        <ProfileLogo />
      </Modal>

      <Modal
        title="Update Company Details"
        closable={false}
        visible={isModalVisible2}
        onOk={click2}
        onCancel={click2}
        style={{ top: 100 }}
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
        <CompanyDetails />
      </Modal>

      <Modal
        title="Update Company Description"
        closable={false}
        visible={isModalVisible3}
        onOk={click3}
        onCancel={click3}
        style={{ top: 100 }}
        width={800}
        footer={[
          <Button onClick={click3}>Cancel</Button>,
          <Button
            form="myForm4"
            key="submit"
            htmlType="submit"
            onClick={click3}
          >
            Update
          </Button>,
        ]}
      >
        <CompanyDescription />
      </Modal>

      <div className="cprofile1 bs">
        <div>
          <h3 style={{ textAlign: "center" }}>
            <b>ABOUT THE COMPANY</b>
            <BiPencil
              style={{
                fontSize: 30,
                cursor: "pointer",
                color: "#606568",
                marginLeft: 20,
                paddingTop: 5,
              }}
              onClick={showModal3}
            />
          </h3>
          <p>{user.about}</p>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ProfileCompany;
