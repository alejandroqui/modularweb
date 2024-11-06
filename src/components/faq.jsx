// src/components/FAQ.jsx
import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import fondo from '../assets/banner2.jpeg';

const FAQ = () => {
  return (
    <div
      id="faq"
      style={{
        position: 'relative',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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

      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#595656',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.8rem',
          textAlign: 'center',
          marginBottom: '20px',
        }}>
          <h1 style={{ margin: 0 }}>Preguntas Frecuentes</h1>
        </div>

        {/* FAQ Section */}
        <Container style={{ padding: '0 20px', maxWidth: '800px' }}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cuánto tiempo tarda la entrega de los muebles modular?</Accordion.Header>
              <Accordion.Body>
                La entrega en la ciudad de Cali es de máximo 2 días, y en el resto del país, máximo 5 días hábiles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Ofrecen servicio de instalación para los muebles?</Accordion.Header>
              <Accordion.Body>
                Sí, contamos con un servicio de instalación profesional. Nuestro equipo se encargará de que tus muebles modulares queden perfectamente instalados.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Los muebles modulares tienen garantía?</Accordion.Header>
              <Accordion.Body>
                Todos nuestros muebles modulares tienen una garantía de 5 años en la madera, cubriendo defectos de fabricación o problemas de instalación.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Cuentan con servicio contra-entrega?</Accordion.Header>
              <Accordion.Body>
                Sí, ofrecemos servicio contra-entrega en todo el país.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>¿Cuál es el proceso de compra?</Accordion.Header>
              <Accordion.Body>
                Puedes realizar la compra directamente por nuestros canales de marketplace, WhatsApp, Instagram o en nuestra tienda virtual.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
        <br />
      </div>
    </div>
  );
};

export default FAQ;

