import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { Button, Form, Select, Input, Row, Col, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { postJob } from "../../redux/action/jobAction";

const { Option } = Select;
function Post() {
  const dispatch = useDispatch();

  function onFinalFinish(values) {
    dispatch(postJob(values));
  }
  return (
    <DefaultLayout>
      <div>
        <h1>Job Details</h1>
      </div>
      <Form layout="vertical" onFinish={onFinalFinish}>
        <Row gutter={16}>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Profile"
              name="jobProfile"
              rules={[{ required: true, message: "Profile is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Type"
              name="jobType"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Select placeholder="Select Job Type">
                <Option value="Full-Time">Full-Time</Option>
                <Option value="6-Month Internship">6-Month Internship</Option>
                <Option value="Summer Internship">Summer Internship</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Salary(or Stipend)"
              name="salary"
              rules={[{ required: true, message: "Salary is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Location"
              rules={[{ required: true, message: "Location is required" }]}
              name="location"
            >
              <Input />
            </Form.Item>
          </Col>

          <Col lg={24} sm={24}>
            <Form.Item label="Eligibility">
              <Form.Item label="Passing year" name={["eligibility", "yop"]}>
                <Select placeholder="Select eligible Batch">
                  <Option value="2022">Batch 2022</Option>
                  <Option value="2023">Batch 2023</Option>
                  <Option value="2024">Batch 2024</Option>
                  <Option value="2025">Batch 2025</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Course" name={["eligibility", "course"]}>
                <Checkbox.Group>
                  <Checkbox value="B.Tech">Bachelor of Technology</Checkbox>
                  <Checkbox value="M.Tech">Master of Technology</Checkbox>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label="Branch" name={["eligibility", "branch"]}>
                <Checkbox.Group>
                  <Checkbox value="CSE">Computer Science</Checkbox>
                  <br />
                  <Checkbox value="IT">Information Technology</Checkbox>
                  <br />
                  <Checkbox value="ECE">Electronics and Communication</Checkbox>
                  <br />
                  <Checkbox value="EEE">Electrical and Electronics</Checkbox>
                  <br />
                  <Checkbox value="EI">
                    Electronics and Instrumentation
                  </Checkbox>
                  <br />

                  <Checkbox value="MT">Mechatronics</Checkbox>
                  <br />
                  <Checkbox value="BT">Biotechnology</Checkbox>
                  <br />
                  <Checkbox value="CE">Chemical</Checkbox>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label="CGPA" name={["eligibility", "cgpa"]}>
                <Input placeholder="Minimum CGPA required" />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Detailed Description"
              rules={[
                {
                  required: true,
                  message: "Detailed description is required",
                },
              ]}
              name="fullDescription"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Button htmlType="submit">Post</Button>
      </Form>
    </DefaultLayout>
  );
}

export default Post;
