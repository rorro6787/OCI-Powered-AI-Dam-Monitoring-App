import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import homeLogo from "../../Assets/icono.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";

function Home() {
  const onSubmit = (event) => {
    event.preventDefault();

    // Usar reCAPTCHA para obtener el token
    window.grecaptcha.execute("6LfLY2QqAAAAANN3y6qgv3WEoWJLGbg1_dax-6gB", { action: "submit" })
      .then((token) => {
        // Aquí puedes enviar el token al backend
        console.log("Token de reCAPTCHA: ", token);
        
        // Envía el token al backend (ejemplo):
        // fetch('/tu-endpoint', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ "g-recaptcha-response": token }),
        // })
        // .then(response => response.json())
        // .then(data => console.log(data));
      });
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                ¡Bienvenido!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Somos
                <strong className="main-name"> Polish Cow</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Imagen 3"
                className="img-fluid"
              />
            </Col>
          </Row>

          {/* Formulario con reCAPTCHA */}
          <Row>
            <Col md={12} style={{ padding: 20 }}>
              <Form id="demo-form" onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Introduce tu email" required />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Introduce tu nombre" required />
                </Form.Group>

                <Button className="g-recaptcha"
                  data-sitekey="6LfLY2QqAAAAANN3y6qgv3WEoWJLGbg1_dax-6gB"
                  data-callback='onSubmit'
                  data-action='submit'
                  type="submit">
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home3 />
      <Home2 />
    </section>
  );
}

export default Home;
