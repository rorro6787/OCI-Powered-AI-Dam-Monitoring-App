import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button, Table } from "react-bootstrap";
import Particle from "../Particle";
import L from "leaflet"; // Asegúrate de tener instalada la librería leaflet
import "leaflet/dist/leaflet.css"; // Importar estilos de leaflet
import { FaSearch } from "react-icons/fa";
import embalseImg from "../../Assets/emb.png"; // Asegúrate de tener la imagen en la ruta correcta

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
    fetchEmbalses(lat, lon, radius);
  };

  // Función para obtener los embalses cercanos
  const fetchEmbalses = async (lat, lon, radius) => {
    try {
      const response = await fetch('https://gc22e38dbd8c2e8-polishcow.adb.eu-madrid-1.oraclecloudapps.com/ords/polish_user/embalse_info/?limit=400');
      const data = await response.json();
      const embalses = data.items;

      // Filtrar embalses dentro del radio especificado
      const filteredEmbalses = embalses.filter(embalse => {
        const embalseLat = parseFloat(embalse.x.replace(',', '.'));
        const embalseLon = parseFloat(embalse.y.replace(',', '.'));
        const distance = getDistanceFromLatLonInKm(lat, lon, embalseLat, embalseLon);
        return distance <= radius;
      });

      setEmbalses(filteredEmbalses);

      // Limpiar los marcadores anteriores
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Agregar nuevos marcadores
      const icon = L.icon({
        iconUrl: embalseImg,
        iconSize: [32, 32], // Tamaño del icono
        iconAnchor: [16, 32], // Punto del icono que corresponde a la ubicación del marcador
        popupAnchor: [0, -32] // Punto desde el cual se abrirá el popup relativo al icono
      });

      filteredEmbalses.forEach(embalse => {
        const embalseLat = parseFloat(embalse.x.replace(',', '.'));
        const embalseLon = parseFloat(embalse.y.replace(',', '.'));
        L.marker([embalseLat, embalseLon], { icon }).addTo(map);
      });
    } catch (error) {
      console.error('Error al obtener los embalses:', error);
    }
  };

  // Función para calcular la distancia entre dos puntos geográficos
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en km
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
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

  // Filtrar nombres únicos de embalses
  const uniqueEmbalses = Array.from(new Set(embalses.map(embalse => embalse.embalse_nombre)));

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
      <Row style={{ justifyContent: "center", textAlign: "center", marginTop: "20px" }}>
        <Col md={8}>
          <h2>Lista de Embalses</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre del Embalse</th>
              </tr>
            </thead>
            <tbody>
              {uniqueEmbalses.map((nombre, index) => (
                <tr key={index}>
                  <td>{nombre}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Embalses;