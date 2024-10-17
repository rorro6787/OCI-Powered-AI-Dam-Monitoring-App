import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import Particle from "../Particle";
import L from "leaflet"; // Asegúrate de tener instalada la librería leaflet
import "leaflet/dist/leaflet.css"; // Importar estilos de leaflet
import { FaSearch } from "react-icons/fa"; // Icono de búsqueda

function Embalses() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState(100); // Radio por defecto en km
  const [embalses, setEmbalses] = useState([]); // Estado para los embalses
  const [map, setMap] = useState(null); // Estado para el mapa
  const [circle, setCircle] = useState(null); // Estado para el círculo

  // Función para obtener la ubicación del usuario
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        if (map) {
          map.setView([position.coords.latitude, position.coords.longitude], 10);
          fetchEmbalses(position.coords.latitude, position.coords.longitude, radius);
        } else {
          initMap(position.coords.latitude, position.coords.longitude);
        }
      }, (error) => {
        console.error("Error al obtener la ubicación: ", error);
      });
    } else {
      alert("Geolocalización no es soportada por este navegador.");
    }
  };

  // Inicializar el mapa
  const initMap = (lat, lon) => {
    const mapInstance = L.map("map").setView([lat, lon], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapInstance);

    setMap(mapInstance);
    updateMap(lat, lon); // Actualizar el mapa con el círculo y los embalses
  };

  // Función para actualizar el mapa con círculo y embalses
  const updateMap = (lat, lon) => {
    // Limpiar el mapa
    if (circle) {
      map.removeLayer(circle); // Eliminar el círculo anterior
    }

    // Crear un nuevo círculo
    const newCircle = L.circle([lat, lon], {
      color: "blue",
      radius: radius * 1000 // Convertir km a metros
    }).addTo(map);

    setCircle(newCircle); // Actualizar el estado del círculo

    // Aquí deberías llamar a tu API para obtener los embalses
    fetchEmbalses(lat, lon, radius);
  };

  // Función para obtener los embalses cercanos
  const fetchEmbalses = (lat, lon, radius) => {
    // Aquí deberías realizar una llamada a tu API
    // Simulando una API con datos ficticios
    const dummyEmbalses = [
      { id: 1, name: "Embalse 1", lat: lat + 0.1, lon: lon + 0.1 },
      { id: 2, name: "Embalse 2", lat: lat - 0.1, lon: lon - 0.1 },
      { id: 3, name: "Embalse 3", lat: lat + 0.2, lon: lon - 0.2 },
    ];

    setEmbalses(dummyEmbalses);

    // Limpiar los marcadores anteriores
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Agregar nuevos marcadores
    dummyEmbalses.forEach(embalse => {
      L.marker([embalse.lat, embalse.lon]).addTo(map).bindPopup(embalse.name);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    const lat = parseFloat(latitude); // Convertir la latitud a número
    const lon = parseFloat(longitude); // Convertir la longitud a número
    if (map) {
      updateMap(lat, lon); // Actualizar el mapa con las nuevas coordenadas
    } else {
      initMap(lat, lon); // Inicializar el mapa si no hay un mapa existente
    }
  };

  return (
    <Container fluid className="embalse-section">
      <Particle />
      <Row style={{ justifyContent: "center", textAlign: "center", marginTop: "20px" }}>
        <Col md={8}>
          <h1><strong className="purple">Embalses</strong></h1>
          <p>Introduce las coordenadas y el radio para encontrar embalses cercanos.</p>
          <InputGroup className="mb-3">
            <Button variant="outline-secondary" onClick={getLocation}>
              Obtener mi ubicación
            </Button>
          </InputGroup>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Latitud"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              />
              <Form.Control
                placeholder="Longitud"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
              />
              <Form.Control
                placeholder="Radio (km)"
                type="number"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                min="1"
                required
              />
              <Button variant="primary" type="submit">
                Buscar Embalses
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
        <Col md={12}>
          <div id="map" style={{ height: "400px", width: "100%" }}></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Embalses;
