import { Layout, Menu } from "antd";
import React from "react";
import pic from "../img/logo.png";
import Popconfirm from "antd/lib/popconfirm";
import {
  UserOutlined,
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
  console.log(e);
};

class DefaultLayoutCompany extends React.Component {
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
            breakpoint="lg"
            collapsedWidth="0"
            style={{
              position: "sticky",
              height: "100%",
              top: 0,
            }}
          >
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
          </Sider>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayoutCompany;
