import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiInsomnia,
  SiAmazons3,
  SiAmazondynamodb,
  SiJest,
  SiAwslambda,
  SiAmazonapigateway,
  SiTailwindcss,
  SiAmazoncloudwatch,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb />
        <div className="text">DynamoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
        <div className="text">Lambda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonapigateway />
        <div className="text">API gateway</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
        <div className="text">S3 Bucket</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div className="text">Tailwind</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoncloudwatch />
        <div className="text">Cloudwatch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <div className="text">Jest</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
        <div className="text">Insomnia</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="text">Postman</div>
      </Col>
    </Row>
  );
}

export default Toolstack;