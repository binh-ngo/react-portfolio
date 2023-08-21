import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import eatsy from "../../assets/eatsy.webp";
import videoShare from "../../assets/Screenshot 2023-03-05 at 1.29.22 PM.webp";
import dailySchedule from "../../assets/dailyschedule.webp";
import ecommerce from "../../assets/ecommerce.webp"
import employee from "../../assets/employee.webp"
import cheatsheet from "../../assets/cheatsheet.webp"
import pomodoro from "../../assets/pomodoro.webp"
import stackOverflow from "../../assets/stackoverflow.webp"
import waitloss from "../../assets/waitloss.webp"


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
              imgPath={stackOverflow}
              isBlog={false}
              title="StackOverflow Clone"
              description="My personal emulation of the popular Q&A website. Built with React & Tailwind for the frontend and GraphQL & AWS Appsync for the backend. Written in Typescript and deployed on AWS through CDK."
              ghLink="https://github.com/binh-ngo/stack-overflow-clone"
              demoLink="d2dzpzqgth948g.cloudfront.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waitloss}
              isBlog={false}
              title="Waitloss.live"
              description="Application that allows business owners to manage their customers and waitlist with ease. Built with React & Tailwind for the frontend and GraphQL for the backend. Written in Typescript and deployed on AWS through CDK."
              ghLink="https://github.com/binh-ngo/waitlist"
              demoLink="d33px9ufiinlrq.cloudfront.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatsy}
              isBlog={false}
              title="Eatsy"
              description="Food based social media platform for home cooks. Built with React.js, Bootstrap, Socket.io, Node.js, and MongoDB."
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
              imgPath={cheatsheet}
              isBlog={false}
              title="Coding Cheatsheet"
              description="This application is a project that is continuously in progress as I learn more and more throughout my journey. This application will feature content helpful content on subjects like React, AWS CDK, Algorithms, and Leetcode Problems. Created with React for the frontend, DynamoDB for the backend, and deployed on AWS through CDK."
              ghLink="https://github.com/binh-ngo/code-tools"
              demoLink="https://d3dj3a4bm3qbww.cloudfront.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodoro}
              isBlog={false}
              title="Pomodoro Timer"
              description="This is a traditional pomodoro timer that is used to create a calm and serene work environment while encouraging you to be as productive as you can be. This application is a Next.js project written in Typescript, styled in Tailwind, and is deployed on AWS through CDK."
              ghLink="https://github.com/binh-ngo/pomodoro"
              demoLink="https://d8769wj4hnbhr.cloudfront.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Database"
              description="This application is a mysql database and backend app for an e-commerce site. With this app, you have full CRUD functionality allowing you to create, receive, update, and delete various items in this online store."
              ghLink="https://github.com/binh-ngo/e-commerce-back-end"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Tracker"
              description="This application allows the user to work in a database that can dynamically change the composition of a company. You can create, delete, and update various things such as departments, roles, and employees. "
              ghLink="https://github.com/binh-ngo/employee-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailySchedule}
              isBlog={false}
              title="Daily Schedule App"
              description="I created a program that allows the user to manage their daily schedule. Hour blocks are colored in relation to the current time of the local machine. The user is able to list their tasks and save it to the local storage after clicking the provided button."
              ghLink="https://github.com/binh-ngo/daily-schedule"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;