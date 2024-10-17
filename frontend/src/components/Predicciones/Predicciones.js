import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SpamGuard from "../../Assets/Projects/SpamGuard.png";
import PentestingAD from "../../Assets/Projects/Pentesting_AD.png";
import Type2 from "./Type2";

function Predicciones() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Nuestras <strong className="purple">PREDICCIONES </strong>
        </h1>
        <br />
        <p>Queremos informarte que, aunque no hemos podido completar todas las secciones previstas de nuestro proyecto, tenemos la intención de terminarlas en un futuro cercano.</p>
      </Container>
    </Container>
  );
}

export default Predicciones;
