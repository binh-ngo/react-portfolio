import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeImg from "../../assets/profile.webp"
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <h1 className="home-about-title" style={{ fontSize: "2.6em" }}>
              BUT FIRST, LET ME  <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
        <Col sm={4} className="myAvtar">
            <img className="home-image" src={homeImg}/>
          </Col>
          <Col sm={8} className="home-about-description">
            <p className="home-about-body">
              Throughout life, I've always loved to create things. I was a sous chef at some of the best fine dining restaurants in Hawaii before I decided to make this pivot. The ability to bring my ideas to fruition gave me the drive to always think of the next big thing.
              <br />
              <br />I love 
              <i>
                <b className="blue"> Typescript and Python </b>
              </i>
              and I strive to be proficient in many more languages by consistently learning throughout my life.
              <br />
              <br />
              My current interests are developing new apps using&nbsp;
              <i>
                <b className="blue">Artificial Intelligence and Machine Learning </b> and
                {" "}
                <b className="blue">
                relevant frameworks like Langchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              utilizing <b className="blue">AWS' Cloud Development Kit</b> and
              <i>
                <b className="blue">
                  {" "}
                  Software Development Kit
                </b>
              </i>
              &nbsp; while utilizing
              <i>
                <b className="blue"> React.js and Tailwind for the frontend.</b>
              </i>
            </p>
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