import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import eatsy from "../../assets/eatsy.png";
import videoShare from "../../assets/Screenshot 2023-03-05 at 1.29.22 PM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatsy}
              isBlog={false}
              title="Eatsy"
              description="Food delivery service for homecooks. Built with React.js, Bootstrap, Socket.io, Node.js, and MongoDB."
              ghLink="https://github.com/binh-ngo/eatsy-front-end"
              demoLink="https://eatsyfoods.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoShare}
              isBlog={false}
              title="Video-Share"
              description="Video conferencing website deployed on Heroku. Allows the user to share their screen, videos, and real-time text chat due to Socket.io. Also utilized Materialize, Sequelize, and Node.js."
              ghLink="https://github.com/binh-ngo/Video-Share"
              demoLink="https://video-share.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="#"
              isBlog={false}
              title="E-Commerce Database"
              description="This application is a mysql database and backend app for an e-commerce site. With this app, you have full CRUD functionality allowing you to create, receive, update, and delete various items in this online store."
              ghLink="https://github.com/binh-ngo/e-commerce-back-end"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="#"
              isBlog={false}
              title="Employee Tracker"
              description="This application allows the user to work in a database that can dynamically change the composition of a company. You can create, delete, and update various things such as departments, roles, and employees. "
              ghLink="https://github.com/binh-ngo/employee-tracker"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="#"
              isBlog={false}
              title="Daily Schedule App"
              description="I created a program that allows the user to manage their daily schedule. Hour blocks are colored based on their relationship to the current time of the local machine (which is shown at the top of the page) that the user is using. The user is able to type what they need to do during the specific time-blocks and they can save it to the local storage after clicking the provided button. The program then retrieves the task from the local storage so the burden of remembering the tasks is solely the computer's responsibility."
              ghLink="https://github.com/binh-ngo/daily-schedule"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="#"
              isBlog={false}
              title="README Generator"
              description="This application is a README generator that is used from the command line. The application provides a series of prompts in order to obtain information from the user to create a professional README."
              ghLink="https://github.com/binh-ngo/README-generator"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;