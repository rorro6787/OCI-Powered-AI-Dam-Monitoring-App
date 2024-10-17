import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, FormControl, Table, ListGroup, Button } from "react-bootstrap";
import Particle from "../Particle";
import axios from "axios";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

function Estadisticas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [embalses, setEmbalses] = useState([]);
  const [selectedEmbalse, setSelectedEmbalse] = useState(null);
  const [chartData, setChartData] = useState(null);

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
    setSelectedEmbalse(embalse);
    setSearchTerm(embalse.nombre);
    setSuggestions([]);
    fetchChartData(embalse.id);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
    setSelectedEmbalse(null);
    setChartData(null);
  };

  const fetchChartData = (id) => {
    axios.get(`https://gc22e38dbd8c2e8-polishcow.adb.eu-madrid-1.oraclecloudapps.com/ords/polish_user/embalse_agua/?q={"ID":{"$eq":${id}}}&limit=10000`)
      .then(response => {
        const data = response.data.items;
        const years = data.map(item => new Date(item.fecha).getFullYear()); // Extraer solo el año
        const aguaActual = data.map(item => item.agua_actual);

        setChartData({
          labels: years,
          datasets: [
            {
              label: 'Relación Agua - Año', // Cambiado el label a relación-agua-año
              data: aguaActual,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            }
          ]
        });
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
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
      {selectedEmbalse && (
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
      {chartData && (
        <Row style={{ justifyContent: "center", textAlign: "center", marginTop: "20px" }}>
          <Col md={8}>
            <h3>Relación Agua - Año</h3> {/* Título de la gráfica */}
            <Line data={chartData} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Estadisticas;
