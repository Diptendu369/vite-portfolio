import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg"; 
import bgImage from "../../assets/home-bg.jpg"; 
// import ParticlesBackground from "../ParticlesBackground"; // Updated import
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Add the Particles Background */}
      {/* <ParticlesBackground /> */}

      <section style={{ position: "relative", zIndex: 2 }}>
        <Container fluid id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> DIPTENDU JASHU </strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Home2 />
      </section>
    </div>
  );
}

export default Home;
