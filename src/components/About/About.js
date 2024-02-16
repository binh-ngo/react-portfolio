import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import atom from "../../assets/atom.webp";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="blue">Hey</strong> there,
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={atom}
                 style={{height:"700px", marginTop:"-35%", marginBottom:"-25%"}} 
                 alt="about" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Frameworks <strong className="blue">and  </strong> Languages <strong className="blue">Learned </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="blue">Tools</strong> Used
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;