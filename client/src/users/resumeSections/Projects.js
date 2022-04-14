import React, { Component } from "react";
import { Col, Form, Input, Row, Button, Divider } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

class Projects extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className="bs p-5 m-5">
        <h3>Project</h3>
        <Form className="m-4 mt-5" layout="vertical">
          <Row gutter={16}>
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Project 1</h5>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="Title">
                <Input
                  name="title1"
                  value={values.title1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>

            <Col lg={24} sm={24}>
              <Form.Item label="Description">
                <Input
                  name="projectDescription1"
                  value={values.projectDescription1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>

            <Divider />
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Project 2</h5>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="Title">
                <Input
                  name="title2"
                  value={values.title2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>

            <Col lg={24} sm={24}>
              <Form.Item label="Description">
                <Input
                  name="projectDescription2"
                  value={values.projectDescription2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button onClick={this.back} className="mr-3">
          <LeftOutlined />
          BACK
        </Button>
        <Button onClick={this.continue} className="ml-3">
          NEXT
          <RightOutlined />
        </Button>
      </div>
    );
  }
}

export default Projects;
