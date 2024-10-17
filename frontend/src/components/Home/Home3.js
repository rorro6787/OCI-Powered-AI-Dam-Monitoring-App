import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import i1 from "../../Assets/Home/embalse1.jpeg";
import i2 from  "../../Assets/Home/ai2.jpeg";
import i3 from  "../../Assets/Home/estadisticas.jpeg";
import { Link } from "react-router-dom";
function Home3() {
  return (
    <section>
        <Container fluid className="home-section" id="home">
            {/* <Particle /> */}
            <Container className="home3-content">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                    ¿Qué puedes hacer con <span className="green"> Polish Cow</span>?
                </h1>
                <Row>
        {/* Primera Columna */}
        <Col md={4}>
          <img
            src={i1}
            alt="Imagen 1"
            className="img-fluid"
          />
          <h4 className="titulo">Encuentra embalses cercanos</h4>
          <p>Localiza fácilmente todos los embalses dentro de un radio ajustable de hasta 100 km,
            usando tus coordenadas GPS o ingresando una ubicación manualmente.
          </p>
                    </Col>

                    {/* Segunda Columna */}
                    <Col md={4}>
                    <img
                        src={i2}
                        alt="Imagen 2"
                        className="img-fluid"
                    />
                    <h5 className="titulo">Predice la escasez de agua</h5>
                    <p>Anticipa posibles problemas de escasez de agua evaluando la cantidad embalsada en los embalses cercanos,
                       y ajusta tus planes en función de la predicción.
                    </p>
                    </Col>

                    {/* Tercera Columna */}
                    <Col md={4}>
                    <img
                        src={i3}
                        alt="Imagen 3"
                        className="img-fluid"
                    />
                    <h5 className="titulo">Consulta estadísticas detalladas</h5>
                    <p>Accede a estadísticas clave como valores anuales máximos, mínimos y medias para cada embalse, demarcación o área,
                       y realiza filtrados por diferentes atributos.
                    </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    </section>
  );
}

export default Home3;
