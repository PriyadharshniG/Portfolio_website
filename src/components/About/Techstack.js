import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiPostman,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <h2 className="project-heading" style={{ textAlign: "center", paddingBottom: "20px" }}>
         Tech Stack I Work With
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="C">
          <strong style={{ fontSize: "2rem" }}>C</strong>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Java">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="React.js">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Node.js">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Express.js">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="MongoDB">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="MySQL">
          <SiMysql />
        </Col>
      
        <Col xs={4} md={2} className="tech-icons" title="Git">
          <DiGit />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
