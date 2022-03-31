import React from "react";
import DefaultLayoutStudent from "../../component/DefaultLayoutStudent";
import { Steps, Button, message } from "antd";
import { FaUser, FaGraduationCap } from "react-icons/fa";
import { AiFillLayout } from "react-icons/ai";

const { Step } = Steps;
const steps = [
  {
    title: "Personal Details",
    content: "First-content",
    icon: <FaUser />,
  },
  {
    title: "Education",
    content: "Second-content",
    icon: <FaGraduationCap style={{ fontSize: "32px" }} />,
  },
  {
    title: "Resume",
    content: "Last-content",
    icon: <AiFillLayout />,
  },
];
function ProfileStudent() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div>
      <DefaultLayoutStudent>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>

        <div className="steps-content">{steps[current].content}</div>

        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button onClick={() => next()}>Next</Button>
          )}

          {current === steps.length - 1 && (
            <Button onClick={() => message.success("Processing complete!")}>
              Done
            </Button>
          )}

          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </DefaultLayoutStudent>
    </div>
  );
}

export default ProfileStudent;
