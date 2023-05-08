import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandNextjs } from "react-icons/tb"
import { SiAmazonaws, SiGraphql, SiTypescript } from "react-icons/si"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <div className="text">AWS CDK</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div className="text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
        <div className="text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <div className="text">GraphQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="text">Node</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="text">MongoDB</div>
      </Col>
    </Row>
  );
}

export default Techstack;