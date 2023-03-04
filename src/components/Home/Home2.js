import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BUT FIRST, LET ME  <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Throughout life, I've always loved to create things. The ability to bring my ideas to fruition gave me the drive to always think of the next thing.
              <br />
              <br />I am fluent in 
              <i>
                <b className="blue"> Javascript </b>
              </i>
              but I am just getting started. I will always aspire to consistently learn throughout my life.
              <br />
              <br />
              My current interests are developing new &nbsp;
              <i>
                <b className="blue">Web Apps and Products </b> and
                simply{" "}
                <b className="blue">
                making everyday things better.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/binh-ngo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/binh-nguyen-ngo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;