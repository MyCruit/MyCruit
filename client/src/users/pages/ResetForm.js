import { Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { reset } from "../../redux/action/passwordAction";
function ResetForm() {
  const dispatch = useDispatch();
  const params = useParams();
  let x = window.location.pathname;
  x = x.split("/");
  const id = x[3];
  const category = params.category;
  function submit(values) {
    if (values.password !== values.confirmPassword) {
      message.error("Confirm Password and Password doesn't match!");
    } else {
      dispatch(reset(values, id, category));
    }
  }
  return (
    <div className="bg flex justify-content-around">
      <div className="forgetPassword bs">
        <Form layout="vertical" onFinish={submit}>
          <h3 style={{ paddingBottom: 30 }}>Reset your Password</h3>
          <Form.Item
            label="New Password"
            name="password"
            rules={[
              { required: true, message: "New Password is required" },
              {
                pattern: new RegExp(
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                ),
                message:
                  "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            rules={[
              { required: true, message: "Confirm New Password is required" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <button className="mb-3 btn-p" htmlType="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
export default ResetForm;
