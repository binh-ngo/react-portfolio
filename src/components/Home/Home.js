import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../assets/profilepic.webp";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🤙🏽
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Binh-Nguyen Ngo,</strong>
                <br/>
                But you can call me Binh.
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                className="profile-image"
                src={profile}
                alt="home pic"
                // className="blob-home"
                style={{ maxWidth: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;