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
        height: '250px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.9rem',
        padding: '0',
      }}
    >
      <Container fluid style={{ padding: '0' }}>
        <Row style={{ alignItems: 'center', margin: '0', textAlign: 'center' }}>
          {/* Redes Sociales */}
          <Col md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://www.facebook.com/people/Outlet-Modular/61566455640822/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '30px', color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://wa.me/3052423779" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '30px', color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', color: 'white', margin: '0 10px' }} />
            </a>
          </Col>

          {/* Información de Contacto */}
          <Col md={2}>
            <h5>Contacto</h5>
            <p>Teléfono: +57 305 242 3779</p>
            <p>Email: outletmodular@gmail.com</p>
          </Col>

          {/* Dirección */}
          <Col md={2}>
            <h5>Dirección</h5>
            <p>Cra 24a #42 - 32</p>
            <p>Cali, Colombia</p>
          </Col>

          {/* Sucursales */}
          <Col md={2}>
            <h5>Sucursales</h5>
            <p>Sucursal 1: Cali - asturias</p>
            <p>Sucursal 2: Dos quebradas - Bosques de la acuarela</p>
          </Col>

          {/* Logo */}
          <Col md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '200px' }} /> {/* Logo a 200px de altura */}
          </Col>
        </Row>
        
        {/* Nombre del Desarrollador */}
        <Row className="mt-2" style={{ margin: '0' }}>
          <Col style={{ textAlign: 'center', fontSize: '0.8rem' }}>
            <p>Developed by Alejandro Quiceno</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;






