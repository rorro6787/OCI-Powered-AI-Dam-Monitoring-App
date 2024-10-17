import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Particle from "../Particle";
/* import Github from "./Github";
import Techstack from "./Techstack"; */
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
/* import Toolstack from "./Toolstack"; */

function Embalses() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Embalses</strong>
        </h1>

        {/*<h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
        {/* <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default Embalses;
