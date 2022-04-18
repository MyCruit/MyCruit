import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import mainPic from "../../img/main.png";
import { CaretRightOutlined } from "@ant-design/icons";

function MainPage() {
  return (
    <div className="main-page">
      <div className="logo pt-5">
        <img style={{ marginLeft: 50 }} src={logo} alt="Logo"></img>
        <h1 style={{ marginRight: 250 }}>MyCruit</h1>
        <Link to="" className="mr-5 mt-1">
          <h4>Student</h4>
        </Link>
        <Link to="" className="mr-5 mt-1">
          <h4>Company</h4>
        </Link>
        <Link to="" className="mr-5 mt-1">
          <h4>About</h4>
        </Link>
        <Link to="" className="mt-1" style={{ marginRight: 150 }}>
          <h4>FAQs</h4>
        </Link>
        <Link to="/register">
          <button className="btn-y">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn-y">Login</button>
        </Link>
      </div>
      <div>
        <p className="main-title">
          Browse. <br />
          Apply. <br />
          Prepare Your Future.
        </p>

        <p className="main-content">
          Make campus recruitment processes digitized, <br />
          smart and data driven to boost efficiencies and save costs.
        </p>
        <Link to="/register">
          <button className="btn-y" style={{ marginLeft: 120, marginTop: 40 }}>
            Get Started <CaretRightOutlined style={{ fontSize: 18 }} />
          </button>
        </Link>
        <div className="main-pic">
          <img src={mainPic}></img>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
