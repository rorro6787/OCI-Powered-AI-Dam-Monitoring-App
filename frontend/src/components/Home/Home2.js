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
    LET ME <span className="purple"> INTRODUCE </span> OUR TEAM
  </h1>
  <p className="home-about-body">
    Somos un grupo llamado <b>Polish Cow</b> formado cinco estudiantes de informática apasionados por la <b>sostenibilidad</b> y la <b>tecnología</b>. Motivados por la creciente <b>escasez de agua</b>, hemos decidido enfocarnos en la <b>gestión</b> y <b>optimización</b> de los embalses, con la esperanza de aportar <b>soluciones innovadoras</b> a este problema crítico.
    <br />
    <br />
    Nos motiva la oportunidad de <b>aprender</b> y <b>contribuir</b> a una causa tan vital para el futuro de nuestro planeta.
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
