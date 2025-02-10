
// import React from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import resumePdf from "../../assets/diptendu_resume.pdf";
// import resumeImage from "../../assets/diptendu_resume.png"; // Convert PDF to PNG

// function ResumeNew() {
//   return (
    
//     <Container fluid className="resume-section" style={{ textAlign: "center" }}>
//       {/* Download Button */}
//       <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
//         <Button
//           variant="primary"
//           href={resumePdf}
//           download="Diptendu_Resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             maxWidth: "250px",
//             fontWeight: "bold",
//             fontSize: "18px",
//           }}
//         >
//           📥 Download CV
//         </Button>
//       </Row>

//       {/* Full-Page Resume Image */}
//       <Row className="resume" style={{ justifyContent: "center" }}>
//         <img
//           src={resumeImage}
//           alt="Diptendu Resume"
//           style={{
//             width: "60%",
//             height: "auto",
//             boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
//             borderRadius: "10px",
//           }}
//         />
//       </Row>

//       {/* Bottom Download Button */}
//       <Row style={{ justifyContent: "center", marginTop: "20px" }}>
//         <Button
//           variant="primary"
//           href={resumePdf}
//           download="Diptendu_Resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             maxWidth: "250px",
//             fontWeight: "bold",
//             fontSize: "18px",
//           }}
//         >
//           📥 Download CV
//         </Button>
//       </Row>
//     </Container>
//   );
// }

// export default ResumeNew;
import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import resumePdf from "../../assets/diptendu_resume.pdf";
import resumeImage from "../../assets/diptendu_resume.png"; // Resume Image
import { Opulento } from "uvcanvas"; // Background Effect

function ResumeNew() {
  return (
    <Container
      fluid
      className="resume-section"
      style={{
        textAlign: "center",
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", // Matching Theme
        color: "white",
        overflow: "hidden", // Prevents extra scrollbar
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      {/* Background Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: 0.2, // Light opacity for better visibility
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Opulento />
      </div>

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={resumePdf}
            download="Diptendu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "250px",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "10px 20px",
            }}
          >
            📥 Download CV
          </Button>
        </Row>

        {/* Enlarged Resume Image */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <img
            src={resumeImage}
            alt="Diptendu Resume"
            style={{
              width: "75%", // Increased size
              height: "auto",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              border: "2px solid rgba(255, 255, 255, 0.2)", // Subtle border
            }}
          />
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumePdf}
            download="Diptendu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "250px",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "10px 20px",
            }}
          >
            📥 Download CV
          </Button>
        </Row>
      </div>
    </Container>
  );
}

export default ResumeNew;
