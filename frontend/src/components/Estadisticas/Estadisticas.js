import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, FormControl, Table, ListGroup, Button } from "react-bootstrap";
import Particle from "../Particle";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Estadisticas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [embalses, setEmbalses] = useState([]);
  const [selectedEmbalse, setSelectedEmbalse] = useState(null); // Cambiado para almacenar solo un embalse

  useEffect(() => {
    axios.get("https://gc22e38dbd8c2e8-polishcow.adb.eu-madrid-1.oraclecloudapps.com/ords/polish_user/info_embalse/?limit=1000")
      .then(response => {
        setEmbalses(response.data.items);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = embalses.filter(embalse =>
        embalse.nombre.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (embalse) => {
    setSelectedEmbalse(embalse); // Cambiado para establecer un solo embalse
    setSearchTerm(embalse.nombre);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
    setSelectedEmbalse(null); // Limpiar selección si se borra el campo de búsqueda
  };

  return (
    <Container fluid className="estadisticas-section">
      <Particle />
      <Row style={{ justifyContent: "center", textAlign: "center" }}>
        <Col md={8}>
          <h1 className="estadisticas-title"><strong className="purple">Estadísticas de Embalses</strong></h1>
          <div className="embalses-description">
            <p>
              En esta sección podrás buscar embalses y visualizar atributos importantes de cada embalse,
              como su nombre, capacidad y ubicación, en una tabla interactiva.
            </p>
          </div>
          <InputGroup className="mb-3">
            <InputGroup.Text><FaSearch /></InputGroup.Text>
            <FormControl
              placeholder="Buscar embalse..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <Button variant="outline-secondary" onClick={clearSearch}>
                <FaTimes />
              </Button>
            )}
          </InputGroup>
          {suggestions.length > 0 && (
            <ListGroup>
              {suggestions.map((embalse, index) => (
                <ListGroup.Item key={index} onClick={() => handleSuggestionClick(embalse)}>
                  {embalse.nombre}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
      {selectedEmbalse && ( // Cambiado para mostrar solo si hay un embalse seleccionado
        <Row style={{ justifyContent: "center", textAlign: "center", marginTop: "20px" }}>
          <Col md={8}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Agua Total (m³)</th>
                  <th>Demarcación</th>
                  <th>Cauce</th>
                  <th>Provincia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedEmbalse.nombre}</td>
                  <td>{selectedEmbalse.agua_total}</td>
                  <td>{selectedEmbalse.demarc}</td>
                  <td>{selectedEmbalse.cauce}</td>
                  <td>{selectedEmbalse.provincia}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Estadisticas;
