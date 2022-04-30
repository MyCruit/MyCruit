import React, { Component } from "react";
import { Form, Input, Row, Col } from "antd";
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
        <h3>
          <b>PERSONAL DETAILS</b>
        </h3>
        <Form className="m-4 mt-5" layout="vertical">
          <Row gutter={16}>
            <Col lg={12} sm={24}>
              <Form.Item label="First Name">
                <Input
                  name="firstname"
                  value={values.firstname}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Last Name">
                <Input
                  name="lastname"
                  value={values.lastname}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Email">
                <Input
                  name="email"
                  value={values.email}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Phone Number">
                <Input
                  name="phone"
                  value={values.phone}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Address">
                <Input
                  name="address"
                  value={values.address}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Linkedin">
                <Input
                  name="linkedin"
                  value={values.linkedin}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <button className="btn-p" onClick={this.continue}>
          NEXT
          <RightOutlined style={{ marginLeft: 8 }} />
        </button>
      </div>
    );
  }
}

export default Profile;
