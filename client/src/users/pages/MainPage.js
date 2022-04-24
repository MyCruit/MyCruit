import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import mainPic from "../../img/main.png";
import studentPic from "../../img/student.png";
import companyPic from "../../img/company.png";
import { CaretRightOutlined } from "@ant-design/icons";

function MainPage() {
  return (
    <div>
      <div className="main-page1 pb-5">
        <div className="logo pt-4">
          <img
            className=" mt-1"
            style={{ marginLeft: 50 }}
            src={logo}
            alt="Logo"
          ></img>
          <h1 className="mt-1" style={{ marginRight: 250 }}>
            MyCruit
          </h1>
          <a href="#explore" className="mr-5 mt-2">
            <h4>Explore</h4>
          </a>
          <a href="#about" className="mr-5 mt-2">
            <h4>About</h4>
          </a>
          <a href="#faq" className="mr-5 mt-2">
            <h4>FAQs</h4>
          </a>
          <a href="#contact" className="mt-2" style={{ marginRight: 150 }}>
            <h4>Contact</h4>
          </a>
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
            <button
              className="btn-y"
              style={{ marginLeft: 120, marginTop: 40, marginBottom: 5 }}
            >
              Get Started <CaretRightOutlined style={{ fontSize: 18 }} />
            </button>
          </Link>

          <img className="main-pic" src={mainPic}></img>
        </div>
      </div>

      <div className="main-page2" id="explore">
        <div>
          <h1>Explore</h1>
        </div>
      </div>
      <div className="main-page1 flex" id="about">
        <h1>About</h1>
      </div>
      <div className="main-page2" id="faq">
        <h1>FAQs</h1>
      </div>
      <div className="main-page1" id="contact">
        <h1>Contact</h1>
      </div>
      <div className="main-page2">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default MainPage;
