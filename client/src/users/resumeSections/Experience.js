import { Button, Col, Divider, Form, Input, Row } from "antd";
import React, { Component } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

class Experience extends Component {
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
        <h3>Experience</h3>
        <Form className="m-4" layout="vertical">
          <Row gutter={16}>
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Experience 1</h5>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item
                name="institute1"
                label="Institue/Organisation"
                value={values.institute1}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="position1"
                label="Position"
                value={values.position1}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="duration1"
                label="Duration"
                value={values.duration1}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item
                label="Description"
                name="experienceDescription1"
                value={values.experienceDescription1}
                onChange={this.props.handleChange}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>

            <Divider />
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Experience 2</h5>
            </Col>

            <Col lg={24} sm={24}>
              <Form.Item
                name="institute2"
                label="Institue/Organisation"
                value={values.institute2}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="position2"
                label="Position"
                value={values.position2}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="duration2"
                label="Duration"
                value={values.duration2}
                onChange={this.props.handleChange}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item
                label="Description"
                name="experienceDescription2"
                value={values.experienceDescription2}
                onChange={this.props.handleChange}
              >
                <Input.TextArea />
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

export default Experience;
