import { Layout, Menu } from "antd";
import React from "react";
import pic from "../img/logo.png";
import Popconfirm from "antd/lib/popconfirm";
import {
  BookOutlined,
  UserOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const onConfirm = (e) => 
    {
      window.location = "/login";
      window.localStorage.clear();
      console.log(e);
    }
class DefaultLayoutStudent extends React.Component {
  render() {
    return (
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
            <Menu.Item key="/resume" icon={<BookOutlined />}>
              <Link to="/resume">Resume</Link>
            </Menu.Item>
            <Menu.Item key="/appliedJobs" icon={<CarryOutOutlined />}>
              <Link to="/appliedJobs">Applied Jobs</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Popconfirm title="Are you sure you want to quit?" placement="right"  onConfirm={onConfirm} okText="Quit"
   cancelText="No">
                Logout
              </Popconfirm>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              position: "sticky",
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

export default DefaultLayoutStudent;
