import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import miCara from "../../Assets/mi_cara.jpeg";
import Type from "./Type";

function Home3() {
  return (
    <section>
        <Container fluid className="home-section" id="home">
            {/* <Particle /> */}
            <Container className="home3-content">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                    Título del Home 3
                </h1>
                <Row>
                    {/* Primera Columna */}
                    <Col md={4}>
                    <img
                        src={miCara}
                        alt="Imagen 1"
                        className="img-fluid"
                    />
                    <h5 className="mt-3">Título 1</h5>
                    <p>Descripción breve de la imagen 1.</p>
                    <a href="https://enlace-1.com" target="_blank" rel="noopener noreferrer">
                        Descubre más
                    </a>
                    </Col>

                    {/* Segunda Columna */}
                    <Col md={4}>
                    <img
                        src={miCara}
                        alt="Imagen 2"
                        className="img-fluid"
                    />
                    <h5 className="mt-3">Título 2</h5>
                    <p>Descripción breve de la imagen 2.</p>
                    <a href="https://enlace-2.com" target="_blank" rel="noopener noreferrer">
                        Descubre más
                    </a>
                    </Col>

                    {/* Tercera Columna */}
                    <Col md={4}>
                    <img
                        src={miCara}
                        alt="Imagen 3"
                        className="img-fluid"
                    />
                    <h5 className="mt-3">Título 3</h5>
                    <p>Descripción breve de la imagen 3.</p>
                    <a href="https://enlace-3.com" target="_blank" rel="noopener noreferrer">
                        Descubre más
                    </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    </section>
  );
}

export default Home3;
