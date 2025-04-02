import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { Opulento } from "uvcanvas";


function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Novatrix Background with Lower Opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.2, // Adjust opacity here (0.1 - 1)
          pointerEvents: "none", // Ensures it doesn’t block interactions
          overflow: "hidden",
        }}
      >
        <Opulento />
      </div>

      {/* Overlay content with zIndex to stay above Novatrix */}
      <section style={{ position: "relative", zIndex: 1 }}>
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
                  I'M <strong className="main-name">DIPTENDU JASHU</strong>
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
