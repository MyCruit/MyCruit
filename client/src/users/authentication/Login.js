import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/action/usersAction";
const { Option } = Select;

function Login() {
  const dispatch = useDispatch();
  function login(values) {
    dispatch(loginUser(values));
  }
  return (
    <div className="login">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select a Category">
                <Option value="Student">Student</Option>
                <Option value="Company">Company</Option>
                <Option value="Admin">Admin</Option>
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

            <Button htmlType="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
