import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import mainPic from "../../img/main.png";
import about from "../../img/about.png";
import faq from "../../img/faq.png";
import { CaretRightOutlined } from "@ant-design/icons";
import { BsPeople } from "react-icons/bs";
import { Col, Row, Carousel } from "antd";
import icon1 from "../../img/icon-1.png";
import icon2 from "../../img/icon-2.png";
import icon3 from "../../img/icon-3.png";
import icon4 from "../../img/icon-4.png";

function MainPage() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <div style={{ background: "#f0f2f5" }}>
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

      <div id="explore">
        <h1 className="explore-title">Explore</h1>
        <div className="explore-content">
          <h3>
            <b>How do we help?</b>
          </h3>
          <p className="mt-4 mb-5">
            Data analytics has seeped into every sphere of the world. However,
            recruitment practices still follow age old processes that are
            unstructured, unrefined and are largely dependent on manual labour.
            We seek to plug the gaps in the current system of placements and
            provide significant insights through technology and advanced data
            analytics.
          </p>
          <div>
            <Row gutter={100}>
              <Col lg={12} sm={24}>
                <div className="flex mb-5">
                  <div className="mr-4">
                    <img
                      src={icon2}
                      style={{ height: 50, width: 50, color: "#9253f8" }}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p>
                      <b>Connecting Multiple Users on One Platform</b>
                    </p>
                    <p>
                      Bring together various users such as recruiters, students
                      and college one platform for better engagement and ensure
                      improved hiring decisions.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={12} sm={24}>
                <div className="flex">
                  <div className="mr-4">
                    <img
                      src={icon1}
                      style={{ height: 50, width: 50, color: "#9253f8" }}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p>
                      <b>Systematic Recruitment</b>
                    </p>
                    <p>
                      Manage all placement related activities on one platform
                      through digitised processes. Data can be recorded, tracked
                      and benchmarked to gain further insights.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={12} sm={24}>
                <div className="flex">
                  <div className="mr-4">
                    <img
                      src={icon3}
                      style={{ height: 50, width: 50, color: "#9253f8" }}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p>
                      <b>Minimize Recruitment Costs</b>
                    </p>
                    <p>
                      Provide access to technology at minimal costs, increase
                      engagement with users and maximise return on investment.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={12} sm={24}>
                <div className="flex">
                  <div className="mr-4">
                    <img
                      src={icon4}
                      style={{ height: 50, width: 50, color: "#9253f8" }}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p>
                      <b>Data Security </b>
                    </p>
                    <p>
                      Your institute's data is very critical. That's why we make
                      sure to keep you data 100% secure.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <hr />
        </div>
        <div className="explore-content">
          <h3>What we Offer?</h3>
          <p>
            Here at MyCruit, we provide a free platform for hassle-free
            recruitments. MyCruit will reduce the workload of the placement cell
            by transitioning all the tedious placement tasks to complete
            computerization. Our product cater to the different recruitment
            needs of our different users.
          </p>
          <Carousel afterChange={onChange}>
            <div>
              <h3 className="carouselStyle">1</h3>
            </div>
            <div>
              <h3 className="carouselStyle">2</h3>
            </div>
            <div>
              <h3 className="carouselStyle">3</h3>
            </div>
          </Carousel>
        </div>
      </div>
      <div id="about">
        <h1 className="explore-title">About</h1>
        <img className="about-pic" src={about}></img>
      </div>
      <div id="faq">
        <h1 className="explore-title">F.A.Q.</h1>
        <img className="faq-pic" src={faq}></img>
      </div>
      <div id="contact">
        <h1 className="explore-title">Contact</h1>
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default MainPage;
