import React from "react";
import DefaultLayout from "../../component/DefaultLayout";
import { Button, Form, Input, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/action/usersAction";

const user = JSON.parse(localStorage.getItem("user"));
function ProfileCompany() {
  const dispatch = useDispatch();

  function onFinalFinish(values) {
    dispatch(updateUser(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      <div>
        <h3>Company Details</h3>
      </div>
      <Form layout="vertical" onFinish={onFinalFinish} initialValues={user}>
        <Row gutter={16}>
          <Col lg={12} sm={24}>
            {/* <Form.Item label="Company Logo" name="companyLogo"></Form.Item> */}
            <Form.Item label="Company email" name="email">
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24}>
            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[
                { required: true, message: "Contact Number is required" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Company Description"
              rules={[
                {
                  required: true,
                  message: "Company description is required",
                },
              ]}
              name="about"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col lg={24} sm={24}>
            <Form.Item
              label="Company Location"
              rules={[{ required: true, message: "Location is required" }]}
              name="address"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Button htmlType="submit">Update</Button>
      </Form>
    </DefaultLayout>
  );
}

export default ProfileCompany;
