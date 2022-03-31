import React, { useState } from "react";
import DefaultLayoutStudent from "../../component/DefaultLayoutStudent";
import {
  Steps,
  Button,
  message,
  Upload,
  Col,
  Form,
  Input,
  Row,
  Select,
  DatePicker,
} from "antd";
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
    },
    {
      title: "Education",
      content: educationDetails(),
    },
    {
      title: "Resume",
      content: resume(),
    },
  ];
  const [personalInfo, setPersonalInfo] = useState();
  const dispatch = useDispatch();

  function onPersonInfoSubmit(values) {
    setPersonalInfo(values);
  }

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };
    console.log(finalObj);
    dispatch(updateUser(finalObj));
  }

  //forms
  function personalDetails() {
    return (
      <Form
        layout="vertical"
        onFinish={onPersonInfoSubmit}
        // initialValues={user}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "First name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Last name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Profile Photo" name="profilePhoto"></Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: "Date of birth is required" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "gender is required" }]}
        >
          <Select placeholder="Select a Gender">
            <Option value="F">Female</Option>
            <Option value="M">Male</Option>
            <Option value="O">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="College Id"
          name="collegeid"
          rules={[{ required: true, message: "College Id is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="College E-mail"
          name="collegeMail"
          rules={[
            { required: true, message: "College E-mail is required" },
            {
              type: "email",
              message: "Please enter valid Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Address is required" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Abour"
          name="about"
          rules={[{ required: true, message: "About is required" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Button htmlType="submit">Submit</Button>
      </Form>
    );
  }

  function educationDetails() {
    return (
      <Form
        layout="vertical"
        onFinish={onFinalFinish}
        //  initialValues={user}
      >
        <Form.Item
          label="Institue"
          name="institute"
          rules={[{ required: true, message: "Institution name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Course"
          name="course"
          rules={[{ required: true, message: "Course is required" }]}
        >
          <Select placeholder="Select a Course">
            <Option value="B.tech">B. Tech</Option>
            <Option value="M.Tech">M. Tech</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Branch"
          name="branch"
          rules={[{ required: true, message: "Branch is required" }]}
        >
          <Select placeholder="Select a Branch">
            <Option value="CSE">Computer Science</Option>
            <Option value="IT">Information Technology</Option>
            <Option value="EEE">EEE</Option>
            <Option value="EI">EI</Option>
            <Option value="ECE">ECE</Option>
            <Option value="MT">Mechatronics</Option>
            <Option value="BT">BioTech</Option>
            <Option value="CE">Chemical Engineering</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Year of Starting"
          name="yos"
          rules={[{ required: true, message: "Year of starting is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Year of Passing (Expected)"
          name="yop"
          rules={[{ required: true, message: "Year of passing is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CGPA"
          name="cgpa"
          rules={[{ required: true, message: "CGPA is required" }]}
        >
          <Input />
        </Form.Item>

        <Button htmlType="submit">Submit</Button>
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
      <DefaultLayoutStudent>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
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
      </DefaultLayoutStudent>
    </div>
  );
}

export default ProfileStudent;
