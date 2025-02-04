// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { SiPostman, SiSlack, SiVercel, SiApple } from "react-icons/si";
// import { FaCode } from "react-icons/fa"; // Example alternative for Visual Studio Code

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <FaCode /> {/* Alternative for Visual Studio Code */}
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiApple />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiFirebase, SiJupyter } from "react-icons/si";
import { FaGitAlt, FaLinux, FaAws } from "react-icons/fa"; // AWS Alternative

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt /> {/* Git Version Control */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* API Testing */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /> {/* Firebase */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws /> {/* AWS Alternative */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /> {/* Jupyter Notebook */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux /> {/* Linux */}
      </Col>
    </Row>
  );
}

export default Toolstack;
