import React from "react";
import { Col, Form, Input, message, Row, Select } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/action/usersAction";
import registerPic from "../../img/register.png";
import logo from "../../img/logo.png";

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
    <div className="register">
      <Row justify="center">
        <Col className="authPic bs">
          <img className="authLogo m-4" src={logo}></img>
          <h3 className="mb-5 mt-3 ml-5">Get's Started</h3>
          <div className="p-4 mr-4">
            <img src={registerPic}></img>
          </div>
        </Col>
        <Col lg={10} sm={24} className="bs authForm p-5">
          <h3>Register</h3>
          <hr />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Category is required" }]}
            >
              <Select placeholder="Select a Category">
                <Option value="Student">Student</Option>
                <Option value="Company">Company</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                {
                  type: "email",
                  message: "Please enter valid Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Password is required" },
                { min: 8, message: "Password must have a minimum length of 8" },
                {
                  pattern: new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                  ),
                  message:
                    "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Confirm Password is required" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <button class="authButton" type="submit">
              Register
            </button>
          </Form>
          <h6>
            Already have an account?{" "}
            <a href="/login">
              <b style={{ color: "#5e60ce" }}>Login</b>
            </a>
          </h6>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
