import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Priyadharshni G</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} GP</h3>
        </Col>
        <Col md="4" className="footer-body">
           <ul className="home-about-social-links">
                        <li className="social-icons">
                          <a
                            href="https://github.com/PriyadharshniG"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <AiFillGithub />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.linkedin.com/in/priyadharshnig/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://leetcode.com/u/priyadharshni823/" 
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <SiLeetcode />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.youtube.com/@InnoVisionTamil" 
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <AiFillYoutube />
                          </a>
                        </li>
                      </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
