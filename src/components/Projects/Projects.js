import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder images — replace with real ones in Assets/Projects folder
import attendance from "../../Assets/Projects/attendance.jpg";
import diabetic from "../../Assets/Projects/diabetic.jpg";
import stress from "../../Assets/Projects/stress.jpg";
import hrms from "../../Assets/Projects/hrms.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I’ve worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="A Python-based application using OpenCV for real-time face detection and recognition to automate attendance. Includes a GUI interface built with Tkinter and CSV report generation."
              ghLink="https://github.com/PriyadharshniG/face-recognition-attendance-system-main.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetic}
              isBlog={false}
              title="Diabetic Retinopathy Prediction"
              description="Built using CNN models with OpenCV and deep learning techniques to classify retinal images and detect stages of diabetic retinopathy. Trained on medical image datasets."
              // ghLink="https://github.com/yourusername/diabetic-retinopathy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stress}
              isBlog={false}
              title="Stress Detection in IT Professionals"
              description="A machine learning project that analyzes biometric and behavioral data to detect stress levels in IT professionals. Used feature extraction and classification models."
              // ghLink="https://github.com/yourusername/stress-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrms}
              isBlog={false}
              title="Human Resource Management System"
              description="A web-based Human Resource Management System that streamlines employee management, leave tracking, and performance evaluation using React and MongoDB."
              // ghLink="https://github.com/yourusername/hrms-system"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
