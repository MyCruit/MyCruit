import { Form, Input, message} from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { reset } from "../../redux/action/passwordAction";
function ResetForm() {
    const dispatch=useDispatch();
    const params=useParams();
    let x=window.location.pathname;
    x=x.split("/");
    const id=x[3];
    const category=params.category;
    function submit(values) {
        if (values.password !== values.confirmPassword) {
            message.error("Confirm Password and Password doesn't Match!");
          } else {
            dispatch(reset(values,id,category));
          }
      }
  return (
    <div>
      <Form layout="vertical" onFinish={submit}>
            <Form.Item
              label="New Password"
              name="password"
              rules={[{ required: true, message: "New Password is required" }]}
            >
            <Input/>

            </Form.Item>

            <Form.Item
              label="Confirm New Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Confirm New Password is required" },
              ]}
            >
              <Input />
            </Form.Item>

            <button className="mb-3 btn-p" htmlType="submit">
              Submit
            </button>
          </Form>
    </div>
  );
}
export default ResetForm;