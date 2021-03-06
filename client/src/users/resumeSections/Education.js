import React, { Component } from "react";
import { Form, Row, Col, Input, Divider } from "antd";
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
        <h3>
          <b>EDUCATION</b>
        </h3>
        <Form className="m-4 mt-5" layout="vertical">
          <Row gutter={16}>
            <Col lg={24} sm={24}>
              <Form.Item label="College/Unviersity">
                <Input
                  name="college"
                  value={values.college}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="From Year">
                <Input
                  name="fromyear1"
                  value={values.fromyear1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="To Year">
                <Input
                  name="toyear1"
                  value={values.toyear1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="Qualification">
                <Input
                  name="qualification1"
                  value={values.qualification1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="CGPA">
                <Input
                  name="cgpa1"
                  value={values.cgpa1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Divider />
            <Col lg={24} sm={24}>
              <Form.Item label="School">
                <Input
                  name="school"
                  value={values.school}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="From Year">
                <Input
                  name="fromyear2"
                  value={values.fromyear2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="To Year">
                <Input
                  name="toyear2"
                  value={values.toyear2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24}>
              <Form.Item label="Qualification">
                <Input
                  name="qualification2"
                  value={values.qualification2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>

            <Col lg={24} sm={24}>
              <Form.Item label="CGPA">
                <Input
                  name="cgpa2"
                  value={values.cgpa2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <button onClick={this.back} className="btn-po mr-3">
          <LeftOutlined style={{ marginRight: 8 }} />
          BACK
        </button>
        <button onClick={this.continue} className=" btn-p ml-3">
          NEXT
          <RightOutlined style={{ marginLeft: 8 }} />
        </button>
      </div>
    );
  }
}

export default Education;
