import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

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
