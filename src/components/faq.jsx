import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
  return (
    <div id="faq">
      {/* Header */}
      <div style={{
        backgroundColor: '#595656',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
      }}>
        <h1>Preguntas Frecuentes</h1>
      </div>

      {/* FAQ Section */}
      <br />
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Cuánto tiempo tarda la entrega de los muebles modulares?</Accordion.Header>
            <Accordion.Body>
              La entrega de los muebles modulares suele tardar entre 5 y 10 días hábiles, dependiendo de la ubicación y disponibilidad de stock.
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
              Todos nuestros muebles modulares tienen una garantía de 1 año, cubriendo defectos de fabricación o problemas de instalación.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>¿Es posible personalizar los muebles modulares?</Accordion.Header>
            <Accordion.Body>
              Sí, ofrecemos opciones de personalización en color, tamaño y configuración para adaptarse mejor a tus necesidades.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>¿Cuál es el proceso de compra?</Accordion.Header>
            <Accordion.Body>
              Puedes realizar la compra directamente en nuestra página web o contactar a nuestro equipo de ventas para asistencia personalizada.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default FAQ;
