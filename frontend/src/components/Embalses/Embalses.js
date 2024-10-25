import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import Particle from "../Particle";
import L from "leaflet"; // Asegúrate de tener instalada la librería leaflet
import "leaflet/dist/leaflet.css"; // Importar estilos de leaflet
import embalseImg from "../../Assets/emb.png"; // Asegúrate de tener la imagen en la ruta correcta

function Embalses() {
  // Estados para almacenar latitud, longitud, radio, embalses, mapa, círculo y embalse seleccionado
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState(100); // Radio por defecto en km
  const [embalses, setEmbalses] = useState([]); // Estado para los embalses
  const [map, setMap] = useState(null); // Estado para el mapa
  const [circle, setCircle] = useState(null); // Estado para el círculo
  const [selectedEmbalse, setSelectedEmbalse] = useState(null); // Estado para el embalse seleccionado
  const [searchInitiated, setSearchInitiated] = useState(false); // Estado para iniciar la búsqueda

  // Obtener la ubicación automáticamente al cargar la página
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        initMap(latitude, longitude); // Inicializar el mapa con la ubicación obtenida
      }, (error) => {
        console.error("Error al obtener la ubicación: ", error);
      });
    } else {
      alert("Geolocalización no es soportada por este navegador.");
    }
  }, []);

  // Inicializar el mapa
  const initMap = (lat, lon) => {
    const mapInstance = L.map("map").setView([lat, lon], 10); // Crear una instancia del mapa centrada en la ubicación
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapInstance);

    // Añadir evento de clic al mapa
    mapInstance.on('click', function(e) {
      const { lat, lng } = e.latlng;
      setLatitude(lat);
      setLongitude(lng);
      if (searchInitiated) {
        updateMap(lat, lng); // Actualizar el mapa con la nueva ubicación
      }
    });

    setMap(mapInstance); // Guardar la instancia del mapa en el estado
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
    fetchEmbalses(lat, lon, radius); // Obtener los embalses cercanos
  };

  // Función para obtener los embalses cercanos
  const fetchEmbalses = async (lat, lon, radius) => {
    try {
      const response = await fetch('https://gc22e38dbd8c2e8-polishcow.adb.eu-madrid-1.oraclecloudapps.com/ords/polish_user/info_embalse/?limit=1000');
      const data = await response.json();
      const embalses = data.items;
      

      // Filtrar embalses dentro del radio especificado
      const filteredEmbalses = embalses.filter(embalse => {
        const embalseLat = parseFloat(embalse.x.replace(',', '.'));
        const embalseLon = parseFloat(embalse.y.replace(',', '.'));
        const distance = getDistanceFromLatLonInKm(lat, lon, embalseLat, embalseLon);
        return distance <= radius;
      });

      setEmbalses(filteredEmbalses); // Actualizar el estado con los embalses filtrados

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
        const marker = L.marker([embalseLat, embalseLon], { icon }).addTo(map);
        const popupContent = `
        <div style="font-family: Arial, sans-serif; font-size: 14px;">
          <strong style="font-size: 16px;">${embalse.embalse_nombre}</strong><br>
          <div style="margin-top: 5px;">
            <strong>Comunidad autónoma:</strong> ${embalse.ccaa}<br>
            <strong>Provincia:</strong> ${embalse.provincia}<br>
            <strong>Cauce:</strong> ${embalse.cauce}<br>
            <strong>Demarcación Hidrográfica:</strong> ${embalse.demarc}<br>
            ${embalse.alt_cimien ? `<strong>Altura de cimentación:</strong> ${embalse.alt_cimien} m<br>` : ''}
            ${embalse.cota_coron ? `<strong>Cota de coronación:</strong> ${embalse.cota_coron} m` : ''}
          </div>
        </div>
      `;
        marker.bindPopup(popupContent); // Mostrar el nombre del embalse en negrita y "Demark: " seguido de embalse.demark
      });
    } catch (error) {
      console.error('Error al obtener los embalses:', error);
    }
  };

  // Función para calcular la distancia entre dos puntos geográficos utilizando la fórmula del haversine
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = deg2rad(lat2 - lat1); // Diferencia de latitud en radianes
    const dLon = deg2rad(lon2 - lon1); // Diferencia de longitud en radianes
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) + // Calcular el seno de la mitad de la diferencia de latitud
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * // Calcular el coseno de las latitudes inicial y final
      Math.sin(dLon / 2) * Math.sin(dLon / 2); // Calcular el seno de la mitad de la diferencia de longitud
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Calcular el ángulo central
    const distance = R * c; // Distancia en km
    return distance;
  };

  // Función para convertir grados a radianes
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180); // Convertir grados a radianes
  };

  // Función para manejar el envío del formulario
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
          <h1><strong className="titulo">Embalses</strong></h1>
          <p>Introduce las coordenadas y el radio para encontrar embalses cercanos.</p>
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
            </InputGroup>
            <Button variant="primary" type="submit" style={{ width: "100%", fontSize: "1.2em" }}>
              Buscar Embalses
            </Button>
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