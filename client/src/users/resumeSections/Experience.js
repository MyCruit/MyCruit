import { Col, Divider, Form, Input, Row } from "antd";
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
        <h3>
          <b>EXPERIENCE</b>
        </h3>
        <Form className="m-4 mt-5" layout="vertical">
          <Row gutter={16}>
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Experience 1</h5>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="Institue/Organisation">
                <Input
                  name="institute1"
                  value={values.institute1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Position">
                <Input
                  name="position1"
                  value={values.position1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Duration">
                <Input
                  name="duration1"
                  value={values.duration1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="Description">
                <Input.TextArea
                  name="experienceDescription1"
                  value={values.experienceDescription1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>

            <Divider />
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Experience 2</h5>
            </Col>

            <Col lg={24} sm={24}>
              <Form.Item label="Institue/Organisation">
                <Input
                  name="institute2"
                  value={values.institute2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Position">
                <Input
                  name="position2"
                  value={values.position2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Duration">
                <Input
                  name="duration2"
                  value={values.duration2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="Description">
                <Input.TextArea
                  name="experienceDescription2"
                  value={values.experienceDescription2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <button onClick={this.back} className="mr-3 btn-po">
          <LeftOutlined style={{ marginRight: 8 }} />
          BACK
        </button>
        <button onClick={this.continue} className="ml-3 btn-p">
          NEXT
          <RightOutlined style={{ marginLeft: 8 }} />
        </button>
      </div>
    );
  }
}

export default Experience;
