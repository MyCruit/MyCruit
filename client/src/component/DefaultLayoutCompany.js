import { Layout, Menu } from "antd";
import React from "react";
import pic from "../img/logo.png";
import {
  UserOutlined,
  HomeOutlined,
  UploadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class DefaultLayoutCompany extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            position: "sticky",
            overflow: "auto",
            height: "100%",
            top: 0,
          }}
        >
          <div className="logo">
            <img src={pic} alt="Logo"></img>
            <h1>MyCruit</h1>
          </div>
          <Menu defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="/post" icon={<UploadOutlined />}>
              <Link to="/post">Post</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link to="/login">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              position: "sticky",
              overflow: "auto",
              top: 0,
              zIndex: 9999,
            }}
          ></Header>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayoutCompany;
