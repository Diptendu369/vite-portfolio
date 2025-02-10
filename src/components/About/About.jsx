// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";


// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Know Who <strong className="purple">I'M</strong>
//             </h1>
//             <Aboutcard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skillset </strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />

//         <Github />
//       </Container>
//     </Container>
//   );
// }

//2


// export default About;
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
//  // Importing Opulento background component
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import { Opulento } from "uvcanvas";
// function About() {
//   return (
//     <Container
//       fluid
//       className="about-section"
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", // Matching Home Page
//         color: "white",
//         overflowX: "hidden", // Prevents horizontal scrollbar
//         paddingBottom: "50px",
//       }}
//     >
//       {/* Opulento Background */}
//       <Opulento />

//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           {/* About Card */}
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Know Who <strong className="purple">I'M</strong>
//             </h1>
//             <Aboutcard />
//           </Col>

//           {/* Image Section */}
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img
//               src={laptopImg}
//               alt="about"
//               className="img-fluid"
//               style={{
//                 boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
//                 borderRadius: "10px",
//                 border: "2px solid rgba(255, 255, 255, 0.2)", // Subtle border effect
//               }}
//             />
//           </Col>
//         </Row>

//         {/* Skillset Section */}
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skillset</strong>
//         </h1>
//         <Techstack />

//         {/* Tools Section */}
//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />

//         {/* GitHub Section */}
//         <Github />
//       </Container>
//     </Container>
//   );
// }

// export default About;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Opulento } from "uvcanvas";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Opulento /> {/* Set Opulento as the background */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
