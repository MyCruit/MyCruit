import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { Col, Divider, Form, Input, Row } from "antd";
import { LeftOutlined, DownloadOutlined } from "@ant-design/icons";

class Extras extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  createAndDownloadPDF = () => {
    axios
      .post("/create-pdf", this.props.values)
      .then(() => {
        axios
          .get("fetch-pdf", { responseType: "arraybuffer" })
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, `${this.props.values.firstname}'s Resume.pdf`);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { values } = this.props;

    return (
      <div className="bs p-5 m-5">
        <h3>
          <b>SKILLS AND INTERESTS</b>
        </h3>
        <Form className="m-4 mt-5" layout="vertical">
          <Row gutter={16}>
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Skills</h5>
            </Col>

            <Col lg={8} sm={24}>
              <Form.Item label="Skill 1">
                <Input
                  name="skill1"
                  value={values.skill1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Skill 2">
                <Input
                  name="skill2"
                  value={values.skill2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Skill 3">
                <Input
                  name="skill3"
                  value={values.skill3}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Skill 4">
                <Input
                  name="skill4"
                  value={values.skill4}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Skill 5">
                <Input
                  name="skill5"
                  value={values.skill5}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Skill 6">
                <Input
                  name="skill6"
                  value={values.skill6}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>

            <Divider />
            <Col lg={24} align="left">
              <h5 className="mb-4 mt-2">Interests</h5>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Interest 1">
                <Input
                  name="interest1"
                  value={values.interest1}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Interest 2">
                <Input
                  name="interest2"
                  value={values.interest2}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Interest 3">
                <Input
                  name="interest3"
                  value={values.interest3}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Interest 4">
                <Input
                  name="interest4"
                  value={values.interest4}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Interest 5">
                <Input
                  name="interest5"
                  value={values.interest5}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item label="Interest 6">
                <Input
                  name="interest6"
                  value={values.interest6}
                  onChange={this.props.handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <button onClick={this.back} className="mb-3 btn-po">
          <LeftOutlined style={{ marginRight: 8 }} />
          BACK
        </button>
        <br />
        <button onClick={this.createAndDownloadPDF} className="mt-3 btn-p">
          DOWNLOAD RESUME
          <DownloadOutlined style={{ fontSize: 18, marginLeft: 10 }} />
        </button>
      </div>
    );
  }
}

export default Extras;
