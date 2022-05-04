import { Form, Input, Select } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { passwordReset } from "../../redux/action/passwordAction";
const { Option } = Select;

function ForgetPassword() {
  const dispatch = useDispatch();
  function submit(values) {
    dispatch(passwordReset(values));
  }
  return (
    <div className="bg flex justify-content-around">
      <div className="forgetPassword bs">
        <Form layout="vertical" onFinish={submit}>
          <h4 style={{ paddingBottom: 30 }}>
            Forget Your Password?? Don't worry we are here to help...
          </h4>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Category is required" }]}
          >
            <Select placeholder="Select a Category">
              <Option value="Student">Student</Option>
              <Option value="Company">Company</Option>
              <Option value="Admin">Admin</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              {
                type: "email",
                message: "Email must be a valid email address",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="flex">
            <Link to="/login">
              <button className="mb-3 btn-po">Go Back</button>
            </Link>
            <button
              style={{ marginLeft: 30 }}
              className="mb-3 btn-p"
              htmlType="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default ForgetPassword;
