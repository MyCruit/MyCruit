import { Layout, Menu } from "antd";
import React from "react";
import pic from "../img/logo.png";
import Popconfirm from "antd/lib/popconfirm";
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

const onConfirm = (e) => {
  window.location = "/login";
  window.localStorage.clear();
};

const CompanyMenu = () => {
  return (
    <Menu defaultSelectedKeys={[window.location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">
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
        <Popconfirm
          title="Are you sure you want to quit?"
          placement="right"
          onConfirm={onConfirm}
          okText="Quit"
          cancelText="Cancel"
        >
          <Link to="">
            <div className="navbar">
              <LogoutOutlined className="navbar-icon m-1" />
              <h6>Logout</h6>
            </div>
          </Link>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
};

const StudentMenu = () => {
  return (
    <Menu defaultSelectedKeys={[window.location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">
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
        <Popconfirm
          title="Are you sure you want to quit?"
          placement="right"
          onConfirm={onConfirm}
          okText="Quit"
          cancelText="Cancel"
        >
          <Link to="">
            <div className="navbar">
              <LogoutOutlined className="navbar-icon m-1" />
              <h6>Logout</h6>
            </div>
          </Link>
        </Popconfirm>
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
            zIndex: 9999,
          }}
        >
          <div className="flex justify-content-between">
            <div className="logo">
              <img src={pic} alt="Logo"></img>
              <h1>MyCruit</h1>
            </div>
            <div>
              <h5 className="mr-5 mb-4">{user.username}</h5>
            </div>
          </div>
        </Header>

        <Layout>
          <Sider
            style={{
              position: "sticky",
              height: "100%",
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