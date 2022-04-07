import { Col, Form, Input, Row, Select } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/action/usersAction";
import loginPic from "../../img/login.png";
import logo from "../../img/logo.png";

const { Option } = Select;

function Login() {
  const dispatch = useDispatch();

  function login(values) {
    console.log("onFinish");
    dispatch(loginUser(values));
  }
  return (
    <div className="login">
      <Row justify="center">
        <Col className="authPic bs">
          <img className="authLogo m-4" src={logo}></img>
          <h3 className="mt-2 ml-5">Hello, Welcome Back</h3>
          <div className="p-3 mr-4">
            <img src={loginPic}></img>
          </div>
        </Col>
        <Col lg={10} sm={24} className="bs authForm pt-5 pl-5 pr-5">
          <h2>Login</h2>
          <hr />
          <Form layout="vertical" onFinish={login}>
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
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password />
            </Form.Item>

            <button class="authButton" type="submit">
              Login
            </button>
          </Form>
          <h6>
            Don't have an account?{" "}
            <a href="/register">
              <b style={{ color: "#5e60ce" }}>Get Started</b>
            </a>
          </h6>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
