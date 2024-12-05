// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/modular.png';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#595656',
        color: 'white',
        padding: '20px 0',
      }}
    >
      <Container fluid>
        <Row style={{ alignItems: 'center', textAlign: 'center' }}>
          {/* Redes Sociales */}
          <Col xs={12} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
            <a href="https://www.facebook.com/people/Outlet-Modular/61566455640822/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '30px', color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://wa.me/3052423779" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '30px', color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://www.instagram.com/outletmodular/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', color: 'white', margin: '0 10px' }} />
            </a>
          </Col>

          {/* Información de Contacto */}
          <Col xs={6} md={2}>
            <h5>Contacto</h5>
            <p>Tel: +57 305 242 3779</p>
            <p>Email: outletmodular@gmail.com</p>
          </Col>

          {/* Dirección */}
          <Col xs={6} md={2}>
            <h5>Dirección</h5>
            <p>Cra 24a #42 - 32</p>
            <p>Cali, Colombia</p>
          </Col>

          {/* Sucursales */}
          <Col xs={6} md={2}>
            <h5>Sucursales</h5>
            <p>Sucursal 1: Cali - Asturias</p>
            <p>Sucursal 2: Dos Quebradas - Bosques de la Acuarela</p>
          </Col>

          {/* Logo */}
          <Col xs={6} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '150px', maxWidth: '100%' }} />
          </Col>
        </Row>

        {/* Nombre del Desarrollador */}
        <Row className="mt-3" style={{ textAlign: 'center' }}>
          <Col>
            <p style={{ fontSize: '0.8rem' }}>Developed by Alejandro Quiceno</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;







