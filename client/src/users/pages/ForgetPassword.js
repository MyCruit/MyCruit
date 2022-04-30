import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { passwordReset } from "../../redux/action/passwordAction";
const { Option } = Select;

function ForgetPassword() {
    const dispatch=useDispatch();
    function submit(values) {
        dispatch(passwordReset(values));
      }
  return (
    <div>
      <Form layout="vertical" onFinish={submit}>
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

            <button className="mb-3 btn-p" htmlType="submit">
              Submit
            </button>
          </Form>
    </div>
  );
}
export default ForgetPassword;