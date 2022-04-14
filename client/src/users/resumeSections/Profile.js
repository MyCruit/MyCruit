import React, { Component } from "react";
import { Form, Input, Row, Col, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

class Profile extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className="bs p-5 m-5">
        <h3>Personal Details</h3>
        <Form className="m-4" layout="vertical">
          <Row gutter={16}>
            <Col lg={12} sm={24}>
              <Form.Item
                name="firstname"
                label="First Name"
                value={values.firstname}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "First Name is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                label="Last Name"
                name="lastname"
                value={values.lastname}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Last Name is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                label="Email"
                name="email"
                value={values.email}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                label="Phone Number"
                name="phone"
                value={values.phone}
                onChange={this.props.handleChange}
                rules={[
                  { required: true, message: "Phone Number is required" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                label="GitHub"
                name="github"
                value={values.github}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                label="Linked In"
                name="linkedin"
                value={values.linkedin}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Button onClick={this.continue}>
          NEXT
          <RightOutlined />
        </Button>
      </div>
    );
  }
}

export default Profile;
