import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/site.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">Computer Science Engineer</b> specializing in 
              <b className="purple"> AI & ML </b> with expertise in <b className="purple">MERN Stack Development</b>.
              <br />
              <br />
              With experience in both <b className="purple">web development</b> and <b className="purple">data science</b>, 
              I have worked on projects ranging from real-time applications to AI-driven solutions.
              <br />
              <br />
              I am proficient in languages like <b className="purple">C++, JavaScript, and Python</b>, 
              and I have hands-on experience with frameworks and tools like <b className="purple">React, Node.js, TensorFlow, and MongoDB</b>.
              <br />
              <br />
              My interests lie in developing scalable <b className="purple">web technologies</b>, exploring 
              <b className="purple"> AI-driven applications</b>, and leveraging <b className="purple">blockchain</b> 
              for secure and decentralized solutions.
              <br />
              <br />
              Some of my recent projects include a <b className="purple">farmer-centric app (KrishiYog)</b>, 
              an <b className="purple">AI-powered COVID-19 detection system</b>, and a <b className="purple">real-time chat application</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ maxWidth: "70%", height: "auto" }} 
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span> with me
            </p>
            <ul className="home-about-social-links" style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "0" }}>
              <li className="social-icons" style={{ margin: "0" }}>
                <a
                  href="https://github.com/diptendu369"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" style={{ margin: "0" }}>
                <a
                  href="https://x.com/Hifilosophy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons" style={{ margin: "0" }}>
                <a
                  href="https://www.linkedin.com/in/diptendu-jashu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" style={{ margin: "0" }}>
                <a
                  href="https://www.instagram.com/diptendu_jashu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
