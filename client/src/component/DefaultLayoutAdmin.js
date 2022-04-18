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

class DefaultLayoutAdmin extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        >
          <div className="flex justify-content-between">
            <div className="logo">
              <img src={pic} alt="Logo"></img>
              <h1>MyCruit</h1>
            </div>
            <div className="flex">
              <Link to="/home">
                <h6 className="mr-5 mb-4">Home</h6>
              </Link>
              <Link to="/studentList">
                <h6 className="mr-5 mb-4">Student</h6>
              </Link>
              <Link to="/companyList">
                <h6 className="mr-5 mb-4">Company</h6>
              </Link>
              <Link to="">
                <h6 className="mr-5 mb-4">Logout</h6>
              </Link>
            </div>
            <div>
              <h5 className="mr-5 mb-4">{user.username}</h5>
            </div>
          </div>
        </Header>

        <Layout
          style={{
            background: "#fafafb",
          }}
        >
          <Content
            style={{
              height: "100vh",
              width: "80%",
              margin: "auto",
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayoutAdmin;
