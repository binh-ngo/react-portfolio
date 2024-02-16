import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiInsomnia,
  SiAmazons3,
  SiAmazondynamodb,
  SiJest,
  SiAwslambda,
  SiAmazonapigateway,
  SiTailwindcss,
  SiXcode
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <RiOpenaiFill />
        <div className="text">OpenAI</div>
      </Col>
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
        <div className="text">API Gateway</div>
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
        <SiXcode />
        <div className="text">XCode</div>
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
    </Row>
  );
}

export default Toolstack;