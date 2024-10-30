import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import cliente1 from '../assets/clientes/cliente1.jpeg';
import cliente2 from '../assets/clientes/cliente2.jpeg';
import cliente3 from '../assets/clientes/cliente3.jpeg';
import fondo from '../assets/banner4.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const experiencias = [
  {
    id: 1,
    texto: 'La entrega de la mesa de televisión fue excepcional. Nuestro equipo garantizó un transporte seguro y eficiente, logrando que el mueble llegara en perfectas condiciones al hogar del cliente en Cali...',
    img: cliente1,
  },
  {
    id: 2,
    texto: 'La instalación del centro de entretenimiento fue rápida y organizada. Nuestro equipo planificó cada paso del proceso, desde el transporte hasta la instalación...',
    img: cliente2,
  },
  {
    id: 3,
    texto: 'La entrega y armado del armario de gran tamaño fueron impecables. El equipo de logística cuidó cada detalle para que el transporte fuera seguro...',
    img: cliente3,
  },
];

const Clientes = () => {
  return (
    <div
      id="clients"
      style={{
        position: 'relative',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '50px 0',
      }}
    >
      {/* Capa de fondo con opacidad */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
      }} />

      {/* Franja negra con el título "Clientes" a ancho completo */}
      <div style={{
        backgroundColor: '#595656',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginTop: '-50px',  // Ajuste para elevar la franja
        position: 'relative',
        zIndex: 2,
      }}>
        <h1>Clientes</h1>
      </div>
      
      {/* Contenido */}
      <Container style={{ position: 'relative', zIndex: 2, marginTop: '20px' }}>
        <Row>
          {experiencias.map((experiencia) => (
            <Col md={4} key={experiencia.id} className="mb-4">
              <Card style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                <Card.Img variant="top" src={experiencia.img} alt={`Cliente ${experiencia.id}`} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body style={{ backgroundColor: '#333', color: 'white' }}>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    {experiencia.texto}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Clientes;








