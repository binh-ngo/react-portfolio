import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Eatsy"
              description="Food delivery service for homecooks. Built with React.js, Bootstrap, Socket.io, Node.js, and MongoDB."
              ghLink="https://github.com/binh-ngo/eatsy-front-end"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Video-Share"
              description="Video conferencing website deployed on Heroku. Allows the user to share their screen, videos, and real-time text chat due to Socket.io. Also utilized Materialize, Sequelize, and Node.js."
              ghLink="https://github.com/binh-ngo/Video-Share"
              demoLink="https://video-share.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;