import React, { useState } from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { FaUser, FaGraduationCap } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { Steps, Button, message, Form, Input, Select, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/action/usersAction";

const { Step } = Steps;
const { Option } = Select;
const user = JSON.parse(localStorage.getItem("user"));

function ProfileStudent() {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "Personal Details",
      content: personalDetails(),
      icon: <FaUser />,
    },
    {
      title: "Education",
      content: educationDetails(),
      icon: <FaGraduationCap style={{ fontSize: "32px" }} />,
    },
    {
      title: "Resume",
      content: resume(),
      icon: <IoDocumentText />,
    },
  ];
  const [personalInfo, setPersonalInfo] = useState();
  const dispatch = useDispatch();

  function onPersonInfoSubmit(values) {
    setPersonalInfo(values);
    dispatch(updateUser(values));
  }

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };
    dispatch(updateUser(finalObj));
  }

  //forms
  function personalDetails() {
    return (
      <Form
        layout="vertical"
        onFinish={onPersonInfoSubmit}
        initialValues={user}
      >
        <Row gutter={16}>
          <Col lg={12} sm={24}>
            <Form.Item label="Email" name="email">
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
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
              rules={[{ required: true, message: "First name is required" }]}
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
          <Col lg={12} sm={24}>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: "Date of Birth is required" }]}
            >
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Gender is required" }]}
            >
              <Select placeholder="Select a Gender">
                <Option value="F">Female</Option>
                <Option value="M">Male</Option>
                <Option value="O">Other</Option>
              </Select>
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
          {/* <Col lg={8} sm={24}>
            <Form.Item label="Profile Photo" name="profilePhoto"></Form.Item>
          </Col> */}
          <Col lg={24} sm={24}>
            <Form.Item
              label="About"
              required
              rules={[{ required: true }]}
              name="about"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Address"
              required
              rules={[{ required: true }]}
              name="address"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Button htmlType="submit">Update</Button>
      </Form>
    );
  }

  function educationDetails() {
    return (
      <Form initialValues={user} layout="vertical" onFinish={onFinalFinish}>
        <Row gutter={16}>
          <Col lg={8} sm={24}>
            <Form.Item
              label="Institue"
              name={["education", "institute"]}
              rules={[
                {
                  required: true,
                  message: "Institution Name is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={8} sm={24}>
            <Form.Item
              label="Course"
              name={["education", "course"]}
              rules={[{ required: true, message: "Course is required" }]}
            >
              <Select placeholder="Select a Course">
                <Option value="B.tech">B. Tech</Option>
                <Option value="M.Tech">M. Tech</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={8} sm={24}>
            <Form.Item
              label="Branch"
              name={["education", "branch"]}
              rules={[{ required: true, message: "Branch is required" }]}
            >
              <Select placeholder="Select a Branch">
                <Option value="CSE">Computer Science Engineering</Option>
                <Option value="IT">Information Technology</Option>
                <Option value="EEE">
                  Electrical and Electronics Engineering
                </Option>
                <Option value="EI">
                  Electronics and Instrumentation Engineering
                </Option>
                <Option value="ECE">
                  Electronics and Communication Engineering
                </Option>
                <Option value="MT">Mechatronics Engineering</Option>
                <Option value="BT">Biotechnology Engineering</Option>
                <Option value="CE">Chemical Engineering</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={8} sm={24}>
            <Form.Item
              label="Starting Year"
              name={["education", "yos"]}
              rules={[{ required: true, message: "Starting Year is required" }]}
            >
              <Input placeholder="yyyy" />
            </Form.Item>
          </Col>
          <Col lg={8} sm={24}>
            <Form.Item
              label="Passing Year (expected)"
              name={["education", "yop"]}
              rules={[{ required: true, message: "Passing Year is required" }]}
            >
              <Input placeholder="yyyy" />
            </Form.Item>
          </Col>
          <Col lg={8} sm={24}>
            <Form.Item
              label="CGPA"
              name={["education", "cgpa"]}
              rules={[{ required: true, message: "CGPA is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Button htmlType="submit">Update</Button>
      </Form>
    );
  }

  function resume() {
    return (
      <Form layout="vertical">
        <Form.Item label="Upload Your Resume">
          <Form.Item name="resume"></Form.Item>
        </Form.Item>

        <Button htmlType="submit">Submit</Button>
      </Form>
    );
  }

  return (
    <div>
      <DefaultLayout>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>

        <div className="steps-content">{steps[current].content}</div>

        <div className="steps-action">
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button onClick={() => next()}>Next</Button>
          )}

          {current === steps.length - 1 && (
            <Button onClick={() => message.success("Processing complete!")}>
              Done
            </Button>
          )}
        </div>
      </DefaultLayout>
    </div>
  );
}

export default ProfileStudent;
