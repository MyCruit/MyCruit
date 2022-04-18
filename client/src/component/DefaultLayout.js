import { Layout, Menu, Modal } from "antd";
import React, { useState } from "react";
import pic from "../img/logo.png";
import { RiErrorWarningLine } from "react-icons/ri";
import {
  UserOutlined,
  LayoutOutlined,
  CarryOutOutlined,
  HomeOutlined,
  UploadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const user = JSON.parse(localStorage.getItem("user"));

const CompanyMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    window.location = "/login";
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
          okText="Logout"
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
    window.location = "/login";
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
            <LayoutOutlined className="navbar-icon m-1" />
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
          okText="Logout"
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
            <div>
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
            {user.category === "Student" ? <StudentMenu /> : <CompanyMenu />}
          </Sider>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
