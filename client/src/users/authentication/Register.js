import React from "react";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/action/usersAction";
const { Option } = Select;
function Register() {
  const dispatch = useDispatch();
  function register(values) {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords Not Matched");
    } else {
      dispatch(registerUser(values));
    }
  }
  return (
    <div>
      <div className="register">
        <Row justify="center">
          <Col lg={10} sm={24} className="bs p-5">
            <h3>Register</h3>
            <hr />
            <Form layout="vertical" onFinish={register}>
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true }]}
              >
                <Select placeholder="Select a Category">
                  <Option value="Student">Student</Option>
                  <Option value="Company">Company</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Button htmlType="submit">Register</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Register;
