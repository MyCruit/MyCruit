import React, { useState } from "react";
import DefaultLayoutStudent from "../../component/DefaultLayoutStudent";
import { FaUser, FaGraduationCap } from "react-icons/fa";
import { AiFillLayout } from "react-icons/ai";
import {
  Steps,
  Button,
  message,
  Form,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Tabs,
} from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/action/usersAction";

const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;
function ProfileStudent() {
  const [personalInfo, setPersonalInfo] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();
  function onPersonInfoSubmit(values) {
    setPersonalInfo(values);
    console.log(values);
    dispatch(updateUser(values));
  }

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };

    console.log(finalObj);

    dispatch(updateUser(finalObj));
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <DefaultLayoutStudent>
        <Tabs defaultActiveKey="1" activeKey={activeTab}>
          <TabPane tab="Personal Info" key="1">
            <Form
              layout="vertical"
              onFinish={onPersonInfoSubmit}
              initialValues={user}
            >
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      { required: true, message: "First Name is required" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      { required: true, message: "Last Name is required" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="Date of Birth"
                    name="dob"
                    rules={[
                      { required: true, message: "Date of Birth is required" },
                    ]}
                  >
                    <Input placeholder="dd/mm/yyyy" />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
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
                <Col lg={8} sm={24}>
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
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="College Id"
                    name="collegeid"
                    rules={[
                      { required: true, message: "College Id is required" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="Profile Photo"
                    name="profilePhoto"
                  ></Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item
                    label="About"
                    required
                    rules={[{ required: true }]}
                    name="about"
                  >
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item
                    label="Address"
                    required
                    rules={[{ required: true }]}
                    name="address"
                  >
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType="submit">Update</Button>
              <Button
                onClick={() => {
                  setActiveTab("2");
                }}
                className="float-right"
              >
                Next
              </Button>
            </Form>
          </TabPane>
          <TabPane tab="Education" key="2">
            <Form
              initialValues={user}
              layout="vertical"
              onFinish={onFinalFinish}
            >
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
                    rules={[
                      { required: true, message: "Starting Year is required" },
                    ]}
                  >
                    <Input placeholder="dd/mm/yyyy" />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="Passing Year (expected)"
                    name={["education", "yop"]}
                    rules={[
                      { required: true, message: "Passing Year is required" },
                    ]}
                  >
                    <Input placeholder="dd/mm/yyyy" />
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
              <Button
                onClick={() => {
                  setActiveTab("3");
                }}
                className="float-right"
              >
                Next
              </Button>
              <Button
                onClick={() => {
                  setActiveTab("1");
                }}
                className="float-right mr-4"
              >
                Previous
              </Button>
            </Form>
          </TabPane>

          <TabPane tab="Resume" key="3">
            <Form
              initialValues={user}
              layout="vertical"
              onFinish={onFinalFinish}
            >
              <Form.Item
                label="Resume"
                required
                rules={[{ required: true }]}
                name="resume"
              >
                <Input />
              </Form.Item>
              <Button htmlType="submit">Update</Button>
              <Button
                onClick={() => {
                  setActiveTab("2");
                }}
                className="float-right"
              >
                Previous
              </Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayoutStudent>
    </div>
  );
}

export default ProfileStudent;
