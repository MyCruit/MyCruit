import React, { Component } from "react";
import { Form, Row, Col, Input, Divider, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

class Education extends Component {
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
        <h3>Education</h3>
        <Form className="m-4" layout="vertical">
          <Row gutter={16}>
            <Col lg={24} sm={24}>
              <Form.Item
                name="college"
                label="College/Unviersity"
                value={values.college}
                onChange={this.props.handleChange}
                rules={[
                  { required: true, message: "College/University is required" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="fromyear1"
                label="From Year"
                value={values.fromyear1}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Year is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="toyear1"
                label="To Year"
                value={values.toyear1}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Year is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item
                label="Qualification"
                name="qualification1"
                value={values.qualification1}
                onChange={this.props.handleChange}
                rules={[
                  { required: true, message: "Qualification is required" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item
                label="Description"
                name="description1"
                value={values.description1}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Description is required" }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Divider />
            <Col lg={24} sm={24}>
              <Form.Item
                name="school"
                label="School"
                value={values.school}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "School is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="fromyear2"
                label="From Year"
                value={values.fromyear2}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Year is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item
                name="toyear2"
                label="To Year"
                value={values.toyear2}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Year is required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item
                label="Qualification"
                name="qualification2"
                value={values.qualification2}
                onChange={this.props.handleChange}
                rules={[
                  { required: true, message: "Qualification is required" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col lg={24} sm={24}>
              <Form.Item
                label="Description"
                name="description2"
                value={values.description2}
                onChange={this.props.handleChange}
                rules={[{ required: true, message: "Description is required" }]}
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

export default Education;
