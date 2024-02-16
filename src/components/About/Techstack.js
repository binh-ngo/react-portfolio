import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAmazonaws, SiGraphql, SiTypescript, SiFlask } from "react-icons/si"
import {
  DiReact,
  DiPython,
  DiMysql,
} from "react-icons/di";
import { GrSwift } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import langchain from "../../assets/langchain.png"



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <div className="text">AWS SDK</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div className="text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrSwift />
        <div className="text">Swift</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaApple />
        <div className="text">iOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <div className="text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={langchain} alt="langchain logo" style={{"height": "72px", "width": "72px"}} />
        <div className="text">Langchain</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <div className="text">GraphQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;