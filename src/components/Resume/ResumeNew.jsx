// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);
//   const [pdfUrl, setPdfUrl] = useState(
//     "https://raw.githubusercontent.com/Diptendu369/jaksbdaj/main/Soumyajit_Behera-BIT_MESRA.pdf"
//   );

//   useEffect(() => {
//     const updateWidth = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         {/* Top Download Button */}
//         <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
//           <Button
//             variant="primary"
//             href={pdfUrl}
//             target="_blank"
//             style={{ maxWidth: "250px", fontWeight: "bold" }}
//           >
//             Download CV
//           </Button>
//         </Row>

//         {/* PDF Viewer */}
//         <Row className="resume" style={{ justifyContent: "center", marginBottom: "20px" }}>
//           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
//             <div style={{ width: "90%", maxWidth: "800px" }}>
//               <Viewer
//                 fileUrl={pdfUrl}
//                 theme={{
//                   scale: width > 786 ? 1.7 : 0.6, // Adjust scale for smaller width
//                 }}
//               />
//             </div>
//           </Worker>
//         </Row>

//         {/* Bottom Download Button */}
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdfUrl}
//             target="_blank"
//             style={{ maxWidth: "250px", fontWeight: "bold" }}
//           >
//             Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import resumePdf from "../../assets/diptendu_resume.pdf";
import resumeImage from "../../assets/diptendu_resume.png"; // Convert PDF to PNG

function ResumeNew() {
  return (
    <Container fluid className="resume-section" style={{ textAlign: "center" }}>
      {/* Download Button */}
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
          }}
        >
          📥 Download CV
        </Button>
      </Row>

      {/* Full-Page Resume Image */}
      <Row className="resume" style={{ justifyContent: "center" }}>
        <img
          src={resumeImage}
          alt="Diptendu Resume"
          style={{
            width: "60%",
            height: "auto",
            boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
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
          }}
        >
          📥 Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
