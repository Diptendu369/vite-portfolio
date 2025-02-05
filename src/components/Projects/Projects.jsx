import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/krishi.png";
import emotion from "../../Assets/Projects/age.png";
import editor from "../../Assets/Projects/liverFinal.png";
import chatify from "../../Assets/Projects/chat4.png";
import suicide from "../../Assets/Projects/atg.png";
import bitsOfCode from "../../Assets/Projects/covid.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real time chatting"
              description="Developed a real-time chat application using the MERN stack with Socket.IO for instant messaging, user authentication, and live updates. Optimized latency to under 100ms for seamless communication and enhanced user experience. Efficient data management with MongoDB ensures reliability and scalability."
              ghLink="https://github.com/Diptendu369/Chat-Application"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FedGAN COVID-19 Detector"
              description="Developed FedGAN, a federated learning framework integrating GANs for privacy-preserving COVID-19 detection in edge cloud computing. Uses differential privacy and blockchain to enable secure collaboration among medical institutions without data sharing. Achieves improved accuracy and efficiency over existing methods."
              ghLink="https://github.com/Diptendu369/Combining-GAN-AND-FL-FOR-COVID-Detection-IN-Edge-Cloud-computing"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quantum-Assisted Deep Learning for Liver Tumor Detection"
              description="Developed a hybrid quantum-classical model for liver tumor detection using the 3D-IRCADb1 dataset. Combines U-Net for segmentation with quantum-inspired algorithms for enhanced image processing. Classifies tumors as malignant or benign, aiding radiologists in early diagnosis with improved accuracy."
              ghLink="https://github.com/Diptendu369/Liver-Tumor-Detection"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Krishi YOG App"
              description="Developed 'KrishiYog' , a farmer-centric mobile app with secure login, multilingual support, AI-powered disease prediction, and a community forum. Uses React Native, Appwrite, FastAPI, and Hugging Face Models to enhance accessibility, knowledge sharing, and real-time farming updates. Aims to empower farmers with innovative digital solutions."
              ghLink="https://github.com/Diptendu369/KrishiYog-APP"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ATG.WORLD - Responsive Blog Platform"
              description="A responsive blog website built with HTML, CSS, JavaScript, and Bootstrap. ATG.WORLD offers a dynamic frontend experience, allowing users to explore articles, events, education, and job-related content. Designed for seamless browsing, it provides an interactive and engaging platform for knowledge sharing."
              ghLink="https://github.com/Diptendu369/Blog-Website2"
              demoLink="https://diptenduatg.netlify.app/#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
