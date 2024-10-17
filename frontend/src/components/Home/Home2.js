import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mi_cara.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineLock,
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
                I fell in love with cybersecurity and emerging technologies a long time ago.
              <br />
              <br />
              I have experience with
              <i>
                <b className="purple"> pentesting </b>
              </i> on many online platforms and builiding home lab environments to 
              learn both the 
              <i>
                <b className="red"> offensive </b>
              </i> and 
               <i>
                <b className="blue"> defensive </b>
              </i> point of view.
              <br />
              <br />
              My field of Interest is {" "}
              <i>
                <b className="purple">Offensive Security </b>, but
                I have also been exploring the{" "}
                <b className="purple">
                  Generative AI
                </b> area.
              </i>
              <br />
              <br />
              Whenever possible, I try to apply my passion participating in CTFs and doing
              practical projects. The{" "}
              <b className="purple">synergy</b> of <b className="red">cybersecurity</b>{" "}
              and{" "} <b className="green">AI</b> is inevitable 🤝.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <br />
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LinceAzul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ivan-iroslavov-petkov-80b960236/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://tryhackme.com/r/p/LinceAzul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineLock />
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
