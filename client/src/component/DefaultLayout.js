import { Avatar, Layout, Menu, Modal } from "antd";
import React, { useState } from "react";
import pic from "../img/logo.png";
import { RiErrorWarningLine } from "react-icons/ri";
import {
  UserOutlined,
  CarryOutOutlined,
  HomeOutlined,
  UploadOutlined,
  LogoutOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { ShowPhoto } from "../users/pages/ShowPhoto";
import { ShowLogo } from "../users/pages/ShowLogo";

const { Header, Sider, Content } = Layout;
const user = JSON.parse(localStorage.getItem("user"));

const CompanyMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    window.location = "/";
    window.localStorage.clear();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Menu defaultSelectedKeys={[window.location.pathname]}>
      <Menu.Item key="/home">
        <Link to="/home">
          <div className="navbar">
            <HomeOutlined className="navbar-icon m-1" />
            <h6>Home</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/profile">
        <Link to="/profile">
          <div className="navbar">
            <UserOutlined className="navbar-icon m-1" />
            <h6>Profile</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/post">
        <Link to="/post">
          <div className="navbar">
            <UploadOutlined className="navbar-icon m-1" />
            <h6>Post</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/logout">
        <Link to="">
          <div className="navbar" onClick={showModal}>
            <LogoutOutlined className="navbar-icon m-1" />
            <h6>Logout</h6>
          </div>
        </Link>
        <Modal
          title=""
          closable={false}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ top: 250 }}
          width={400}
          footer={[
            <button className="btn-po  mr-3" onClick={handleCancel}>
              Cancel
            </button>,
            <button className="btn-p" onClick={handleOk}>
              Logout
            </button>,
          ]}
        >
          <div className="flex">
            <RiErrorWarningLine
              style={{ fontSize: 25, marginRight: 15, color: "#fab326" }}
            />
            <h6>Are you sure you want to Logout?</h6>
          </div>
        </Modal>
      </Menu.Item>
    </Menu>
  );
};

const StudentMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    window.location = "/";
    window.localStorage.clear();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Menu defaultSelectedKeys={[window.location.pathname]}>
      <Menu.Item key="/home">
        <Link to="/home">
          <div className="navbar">
            <HomeOutlined className="navbar-icon m-1" />
            <h6>Home</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/profile">
        <Link to="/profile">
          <div className="navbar">
            <UserOutlined className=" navbar-icon m-1" />
            <h6>Profile</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/resume">
        <Link to="/resume">
          <div className="navbar">
            <FilePdfOutlined className="navbar-icon m-1" />
            <h6>Resume</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/appliedJobs">
        <Link to="/appliedJobs">
          <div className="navbar">
            <CarryOutOutlined className="navbar-icon m-1" />
            <h6>Applied</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/logout">
        <Link to="">
          <div className="navbar" onClick={showModal}>
            <LogoutOutlined className="navbar-icon m-1" />
            <h6>Logout</h6>
          </div>
        </Link>
        <Modal
          title=""
          closable={false}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ top: 250 }}
          width={400}
          footer={[
            <button className="btn-po mr-3" onClick={handleCancel}>
              Cancel
            </button>,
            <button className="btn-p" onClick={handleOk}>
              Logout
            </button>,
          ]}
        >
          <div className="flex">
            <RiErrorWarningLine
              style={{ fontSize: 25, marginRight: 15, color: "#fab326" }}
            />
            <h6>Are you sure you want to Logout?</h6>
          </div>
        </Modal>
      </Menu.Item>
    </Menu>
  );
};

const AdminMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    window.location = "/";
    window.localStorage.clear();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Menu defaultSelectedKeys={[window.location.pathname]}>
      <Menu.Item key="/home">
        <Link to="/home">
          <div className="navbar">
            <HomeOutlined className="navbar-icon m-1" />
            <h6>Home</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/studentList">
        <Link to="/studentList">
          <div className="navbar">
            <UserOutlined className="navbar-icon m-1" />
            <h6>Student</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/companyList">
        <Link to="/companyList">
          <div className="navbar">
            <FaRegBuilding className="navbar-icon m-1" />
            <h6>Company</h6>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="/logout">
        <Link to="">
          <div className="navbar" onClick={showModal}>
            <LogoutOutlined className="navbar-icon m-1" />
            <h6>Logout</h6>
          </div>
        </Link>
        <Modal
          title=""
          closable={false}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ top: 250 }}
          width={400}
          footer={[
            <button className="btn-po  mr-3" onClick={handleCancel}>
              Cancel
            </button>,
            <button className="btn-p" onClick={handleOk}>
              Logout
            </button>,
          ]}
        >
          <div className="flex">
            <RiErrorWarningLine
              style={{ fontSize: 25, marginRight: 15, color: "#fab326" }}
            />
            <h6>Are you sure you want to Logout?</h6>
          </div>
        </Modal>
      </Menu.Item>
    </Menu>
  );
};

class DefaultLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        >
          <div className="flex justify-content-between">
            <Link to="/">
              <div className="logo">
                <img src={pic} alt="Logo"></img>
                <h1>MyCruit</h1>
              </div>
            </Link>
            <div className="flex">
              {user.category === "Student" ? (
                ShowPhoto("headerPhoto", user)
              ) : user.category === "Company" ? (
                ShowLogo("headerPhoto", user)
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/e/e9/Banasthali_Vidyapeeth_Logo.png"
                  className="headerPhoto"
                />
              )}
              <h5 className="mr-5 mb-4">{user.username}</h5>
            </div>
          </div>
        </Header>

        <Layout>
          <Sider
            style={{
              position: "sticky",
              top: 0,
            }}
          >
            {user.category === "Student" ? (
              <StudentMenu />
            ) : user.category === "Company" ? (
              <CompanyMenu />
            ) : (
              <AdminMenu />
            )}
          </Sider>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
