import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#595656',
        height: '200px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.9rem',
      }}
    >
      <Container>
        <br />
        <Row>
          {/* Redes Sociales */}
          <Col md={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '30px', color: 'white' }} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '30px', color: 'white' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', color: 'white' }} />
            </a>
          </Col>

          {/* Información de Contacto */}
          <Col md={3}>
            <h5>Contacto</h5>
            <p>Teléfono: +123 456 789</p>
            <p>Email: info@tuempresa.com</p>
          </Col>

          {/* Dirección */}
          <Col md={3}>
            <h5>Dirección</h5>
            <p>Calle Principal #123</p>
            <p>Ciudad, País</p>
          </Col>

          {/* Sucursales */}
          <Col md={3}>
            <h5>Sucursales</h5>
            <p>Sucursal 1: Ciudad A</p>
            <p>Sucursal 2: Ciudad B</p>
          </Col>
        </Row>
        
        {/* Nombre del Desarrollador */}
        <Row className="mt-2">
          <Col style={{ textAlign: 'center', fontSize: '0.8rem' }}>
            <p>Developed by Alejandro Quiceno</p>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Footer;


