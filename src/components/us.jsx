// src/components/Nosotros.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ceoFoto from '../assets/ceo.jpeg';
import logo from '../assets/modular_black.jpeg';
import fondo from '../assets/banner3.jpeg';

const Nosotros = () => {
  return (
    <div
      id="Us"
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
        {/* Título */}
        <div style={{
          backgroundColor: '#595656',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.8rem',
          marginBottom: '30px',
          width: '100%',
          textAlign: 'center',
        }}>
          <h1 style={{ margin: 0 }}>Nosotros</h1>
        </div>

        <Container id="nosotros" style={{ padding: '0 20px' }}>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={6} className="mb-4">
                  <Card style={{ borderRadius: '10px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Card.Img
                      variant="top"
                      src={ceoFoto}
                      style={{
                        borderRadius: '10px 10px 0 0',
                        objectFit: 'cover',
                        height: '300px',
                        width: '100%',
                      }}
                    />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                      <Card.Title style={{ fontSize: '1.5rem' }}>Nuestros CEO</Card.Title>
                      <Card.Text style={{ fontSize: '1rem', flex: 1, textAlign: 'justify' }}>
                        Nuestros CEO han liderado las operaciones de Outlet Modular desde 2020,
                        innovando y ofreciendo productos funcionales y estéticamente agradables.
                        <br /><br />
                        Gracias a su liderazgo, nuestra compañía se ha establecido como un referente en
                        el mercado, siempre buscando la satisfacción del cliente.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mb-4">
                  <Card style={{
                    borderRadius: '10px',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                  }}>
                    <img
                      src={logo}
                      alt="Logo"
                      style={{
                        borderRadius: '50%',
                        width: '250px',
                        height: '250px',
                        objectFit: 'cover',
                        border: '2px solid #595656',
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
};

export default Nosotros;









