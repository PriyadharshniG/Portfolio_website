import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyadharshni G</span> from{" "}
            <span className="purple">Tamil Nadu, India.</span>
            <br />
            I am currently in my pre-final year of Computer Science Engineering at IFET College of Engineering, Villupuram.
            <br />
            I have a strong interest in <span className="purple">Full Stack Development</span>,{" "}
            <span className="purple">Machine Learning</span>, and{" "}
            <span className="purple">Deep Learning</span>.
            <br />
            I enjoy learning new technologies and building innovative solutions that can make a real impact.
            <br />
            <br />
            Here are a few things I love doing beyond coding:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing UIs and prototypes using Figma
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and exploring tech content
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating YouTube Videos 
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Innovate, create, and empower through technology!"{" "}
          </p>
          <footer className="blockquote-footer">Priyadharshni G</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
