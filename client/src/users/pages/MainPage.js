import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import mainPic from "../../img/main.png";
import faq from "../../img/faq.png";
import { Col, Row, Carousel } from "antd";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsQuestionOctagon,
} from "react-icons/bs";
import {
  CaretRightOutlined,
  UserOutlined,
  CarryOutOutlined,
  UploadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { BiCopyright } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import icon1 from "../../img/icon-1.png";
import icon2 from "../../img/icon-2.png";
import icon3 from "../../img/icon-3.png";
import icon4 from "../../img/icon-4.png";
import CompanyLaptop from "../../img/companylaptop.png";
import StudentLaptop from "../../img/studentlaptop.png";
import Wave from "../../img/wave.png";

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
          <h1 className="mt-1" style={{ marginRight: 350 }}>
            MyCruit
          </h1>
          <a href="#explore" className="mr-5 mt-2">
            <h4>Explore</h4>
          </a>
          <a href="#faq" className="mr-5 mt-2">
            <h4>FAQs</h4>
          </a>
          <a href="#contact" className="mt-2" style={{ marginRight: 300 }}>
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

          <img className="main-pic" src={mainPic} alt=""></img>
        </div>
      </div>

      <div id="explore">
        <h1 className="title">Explore</h1>
        <div className="content" style={{ textAlign: "center" }}>
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
          <div className="mb-5">
            <Row gutter={100}>
              <Col lg={12} sm={24}>
                <div className="flex mb-5 mt-3">
                  <div className="mr-4">
                    <img
                      src={icon2}
                      alt=""
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
                <div className="flex mb-5 mt-3">
                  <div className="mr-4">
                    <img
                      src={icon1}
                      alt=""
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
                <div className="flex mb-5 mt-5">
                  <div className="mr-4">
                    <img
                      src={icon3}
                      alt=""
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
                <div className="flex mb-5 mt-5">
                  <div className="mr-4">
                    <img
                      src={icon4}
                      alt=""
                      style={{ height: 50, width: 50, color: "#9253f8" }}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p>
                      <b>Data Security </b>
                    </p>
                    <p>
                      Your institute's data is very crucial. That's why we make
                      sure to keep you data 100% secure.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <hr />
        </div>
        <div
          className="content"
          style={{ textAlign: "center", marginBottom: -20 }}
        >
          <h3>
            <b>What we offer?</b>
          </h3>
          <div className="mt-5">
            <p>
              Here at MyCruit, we provide a free platform for hassle-free
              recruitments. MyCruit will reduce the workload of the placement
              cell by transitioning all the tedious placement tasks to complete
              computerization. Our product cater to the different recruitment
              needs of our different users.
            </p>
          </div>
        </div>
        <Carousel afterChange={onChange} autoplay>
          <div className="carousel">
            <img
              src={Wave}
              style={{ width: "100%" }}
              className="carousal-wave"
            ></img>
            <div className="content flex " style={{ marginTop: 70 }}>
              <img
                src={StudentLaptop}
                style={{ height: 400, marginRight: 70 }}
              ></img>
              <div>
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: 20,
                    marginTop: -60,
                  }}
                >
                  Institute
                </h1>
                <p style={{ textAlign: "center", marginBottom: 30 }}>
                  Our first product caters to the institue and helps them manage
                  their placement processes efficiently.
                </p>
                <div className="flex mt-4">
                  <div className="properties">
                    <div>
                      <UserOutlined
                        style={{ fontSize: 30, color: "#9253f8" }}
                      />
                    </div>
                    <p>Create profile</p>
                  </div>
                  <div className="properties">
                    <div>
                      <CarryOutOutlined
                        style={{ fontSize: 30, color: "#9253f8" }}
                      />
                    </div>
                    <p>Apply to jobs</p>
                  </div>
                  <div className="properties">
                    <div>
                      <FilePdfOutlined
                        style={{ fontSize: 30, color: "#9253f8" }}
                      />
                    </div>
                    <p>Generate Resume</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel">
            <img
              src={Wave}
              style={{ width: "100%" }}
              className="carousal-wave"
            ></img>
            <div className="content flex " style={{ marginTop: 70 }}>
              <img
                src={CompanyLaptop}
                style={{ height: 400, marginRight: 70 }}
              ></img>
              <div>
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: 20,
                    marginTop: -60,
                  }}
                >
                  Company
                </h1>
                <p style={{ textAlign: "center", marginBottom: 30 }}>
                  Our second product caters to the company and helps them manage
                  their campus recruitment processes efficiently.
                </p>
                <div className="flex mt-4">
                  <div className="properties">
                    <div>
                      <UserOutlined
                        style={{ fontSize: 30, color: "#9253f8" }}
                      />
                    </div>
                    <p>Create profile</p>
                  </div>
                  <div className="properties">
                    <div>
                      <UploadOutlined
                        style={{ fontSize: 30, color: "#9253f8" }}
                      />
                    </div>
                    <p>Post jobs</p>
                  </div>
                  <div className="properties">
                    <div>
                      <FiCheckCircle
                        style={{
                          fontSize: 30,
                          color: "#9253f8",
                        }}
                      />
                    </div>
                    <p>Shortlist/Select Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div id="faq" className="faq" style={{ height: 700, paddingTop: 20 }}>
        <h1 className="title" style={{ marginBottom: 50 }}>
          Frequently asked questions?
        </h1>
        <div className="content flex">
          <img className="faq-pic" src={faq} alt=""></img>
          <div>
            <div className="faq-content">
              <h5>
                <BsQuestionOctagon style={{ fontSize: 17, marginRight: 10 }} />
                What is MyCruit?
              </h5>
              <hr className="mt-0 mb-2" />
              <h6>
                MyCruit provides a platform for institutions and companies to
                conduct hassle-free recruitment processes.
              </h6>
            </div>
            <div className="faq-content">
              <h5>
                {" "}
                <BsQuestionOctagon style={{ fontSize: 17, marginRight: 10 }} />
                Can I see my application status?
              </h5>
              <hr className="mt-0 mb-2" />
              <h6>
                Yes, in the applied jobs section, you can find all the jobs you
                have applied to and their status.
              </h6>
            </div>
            <div className="faq-content">
              <h5>
                {" "}
                <BsQuestionOctagon style={{ fontSize: 17, marginRight: 10 }} />
                Can I update my profile?
              </h5>
              <hr className="mt-0 mb-2" />
              <h6>
                Yes, MyCruit offers the feature of updating your profile once
                created in the profile section.
              </h6>
            </div>
            <div className="faq-content">
              <h5>
                {" "}
                <BsQuestionOctagon style={{ fontSize: 17, marginRight: 10 }} />
                Can a company delete its posted jobs?
              </h5>
              <hr className="mt-0 mb-2" />
              <h6>
                Yes, MyCruit offers the feature of deleting a job once posted.
              </h6>
            </div>
            <div className="faq-content">
              <h5>
                {" "}
                <BsQuestionOctagon style={{ fontSize: 17, marginRight: 10 }} />
                How can I generate my resume?
              </h5>
              <hr className="mt-0 mb-2" />
              <h6>
                In the resume section, provide all the necessary details and
                then click on the download button. Your Resume will be
                downloaded.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact">
        <h1 className="title pt-5">Contact Us</h1>
        <div className="contact-content flex">
          <div style={{ width: "50%", marginRight: 50 }}>
            <p className="mt-4 mb-5">
              Customer satisfaction is our top priority! Our support service is
              available 24/7 to assist you with any questions you may have about
              our platform.
              <br />
              You may contact us any way you prefer.
            </p>
            <div className="flex mb-5">
              <div className="countIcon" style={{ backgroundColor: "#ead5f9" }}>
                <BsFillTelephoneFill
                  className="iconPosition"
                  // style={{ color: "#9253f8" }}
                />
              </div>
              <p>
                <b>Contact No:</b>
              </p>
              <p>(+91)7219906932</p>
            </div>
            <div className="flex mb-5">
              <div className="countIcon" style={{ backgroundColor: "#ead5f9" }}>
                <BsFillEnvelopeFill
                  className="iconPosition"
                  // style={{ color: "#9253f8" }}
                />
              </div>
              <p>
                <b>E-mail:</b>
              </p>
              <p>mycruit@gmail.com</p>
            </div>
            <div className="flex mb-5">
              <div className="countIcon" style={{ backgroundColor: "#ead5f9" }}>
                <IoLocationSharp
                  className="iconPosition"
                  // style={{ color: "#9253f8" }}
                />
              </div>
              <p>
                <b>Address:</b>
              </p>
              <p>Banasthali Vidyapith, Tonk, Rajasthan, 304022</p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div style={{ border: "3px solid", width: 605, height: 405 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.6174382784!2d75.87233141484114!3d26.40354448334962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0c282ffffff%3A0x4776f298b0f0587e!2sBanasthali%20University!5e0!3m2!1sen!2sin!4v1651659586525!5m2!1sen!2sin"
                width="600"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div
          className=" flex justify-content-around"
          style={{
            height: 60,
            backgroundColor: "black",
            color: "white",
            margin: "auto",
            opacity: 0.8,
          }}
        >
          <div className="flex">
            <BiCopyright style={{ fontSize: 18, marginTop: 2 }} />
            <p>Copyright MyCruit. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
