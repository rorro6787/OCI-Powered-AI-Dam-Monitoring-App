import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import i1 from "../../Assets/Home/embalse1.jpeg";
import i2 from  "../../Assets/Home/ai2.jpeg";
import i3 from  "../../Assets/Home/estadisticas.jpeg";
import Type from "./Type";
import { Link } from "react-router-dom";

function Home3() {
  return (
    <section>
        <Container fluid className="home-section" id="home">
            {/* <Particle /> */}
            <Container className="home3-content">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                    ¿Qué puedes hacer con <span className="main-name"> Polish Cow</span>?
                </h1>
                <Row>
                    {/* Primera Columna */}
                    <Col md={4}>
                    <img
                        src={i1}
                        alt="Imagen 1"
                        className="img-fluid"
                    />
                    <h5 className="mt-3">Encuentra embalses cercanos</h5>
                    <p>Localiza fácilmente todos los embalses dentro de un radio ajustable de hasta 100 km,
                        usando tus coordenadas GPS o ingresando una ubicación manualmente.
                    </p>
                    <Link to="/embalses">
                        <span style={{ cursor: "pointer", textDecoration: "underline"}}>
                        Descubre más
                        </span>
                    </Link>
                    </Col>

                    {/* Segunda Columna */}
                    <Col md={4}>
                    <img
                        src={i2}
                        alt="Imagen 2"
                        className="img-fluid"
                    />
                    <h5 className="mt-3">Predice la escasez de agua</h5>
                    <p>Anticipa posibles problemas de escasez de agua evaluando la cantidad embalsada en los embalses cercanos,
                       y ajusta tus planes en función de la predicción.
                    </p>
                    <a href="https://enlace-2.com" target="_blank" rel="noopener noreferrer">
                        Descubre más
                    </a>
                    </Col>

                    {/* Tercera Columna */}
                    <Col md={4}>
                    <img
                        src={i3}
                        alt="Imagen 3"
                        className="img-fluid"
                    />
                    <h5 className="mt-3">Consulta estadísticas detalladas</h5>
                    <p>Accede a estadísticas clave como valores anuales máximos, mínimos y medias para cada embalse, demarcación o área,
                       y realiza filtrados por diferentes atributos.
                    </p>
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

export default Home3;
