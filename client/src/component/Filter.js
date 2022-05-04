import { Input, Modal, Form, Select } from "antd";
import React, { useState } from "react";
import { FilterFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { searchJobs, sortJobs } from "../redux/action/jobAction";

const { Search } = Input;
const { Option } = Select;
function Filter() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function sort(values) {
    dispatch(sortJobs(values));
    handleCancel();
  }

  return (
    <div className="flex">
      <Search
        onSearch={(value) => {
          dispatch(searchJobs(value));
        }}
      />
      <FilterFilled
        style={{ fontSize: 32, marginLeft: 10, color: "black" }}
        onClick={showModal}
      />

      <Modal
        title="Select filters"
        footer={false}
        visible={isModalVisible}
        closable={false}
        style={{ top: 200 }}
      >
        <Form layout="vertical" onFinish={sort}>
          <Form.Item name="jobType" label="Job Type">
            <Select placeholder="Select Job Type">
              <Option value="Full-Time">Full-Time</Option>
              <Option value="6-Month Internship">6-Month Internship</Option>
              <Option value="Summer Internship">Summer Internship</Option>
            </Select>
          </Form.Item>

          <Form.Item name="salary" label="Salary">
            <Select>
              <Option value={10000}>10K+</Option>
              <Option value={15000}>15K+</Option>
              <Option value={25000}>25K+</Option>
              <Option value={50000}>50K+</Option>
              <Option value={75000}>75K+</Option>
              <Option value={100000}>1L+</Option>
              <Option value={1000000}>10L+</Option>
              <Option value={2500000}>25L+</Option>
              <Option value={5000000}>50L+</Option>
            </Select>
          </Form.Item>
          <button className="btn-p" htmlType="submit">
            Filter
          </button>
        </Form>
      </Modal>
    </div>
  );
}

export default Filter;
