import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="blue">Binh-Nguyen Ngo </span>
            from <span className="blue"> Seattle, WA.</span>
            <br />I am a web developer that loves to create and has the drive to learn more everyday.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              - Writing AWS focused Tech Blogs
            </li>
            <li className="about-activity">
              - Traveling
            </li>
            <li className="about-activity">
              - Cooking
            </li>
            <li className="about-activity">
              - Reading and Learning
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;