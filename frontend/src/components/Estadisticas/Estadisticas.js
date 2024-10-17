import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Form, InputGroup, FormControl } from "react-bootstrap";
import Particle from "../Particle";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

function Estadisticas() {
  const [width, setWidth] = useState(1200);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);

    // Fetch data from the API
    axios.get('URL_DE_TU_API')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = data.filter(item => 
    item.nombre_de_la_columna.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", textAlign: "center", marginTop: "20px" }}>
          <Col md={8}>
            <h1>Estadísticas</h1>
            <p>Seleccione una opción del desplegable para ver los datos correspondientes.</p>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                placeholder="Buscar..."
                aria-label="Buscar"
                aria-describedby="basic-addon1"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </InputGroup>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Seleccione una opción</option>
              {filteredOptions.map((item, index) => (
                <option key={index} value={item.nombre_de_la_columna}>
                  {item.nombre_de_la_columna}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          {selectedOption && data.filter(item => item.nombre_de_la_columna === selectedOption).map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Header>Item {index + 1}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{item.nombre_de_la_columna}</ListGroup.Item>
                  {/*<ListGroup.Item>Capacidad: {selectedEmbalse.capacidad}</ListGroup.Item>*/}
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
    </div>
  );
}

export default Estadisticas;
