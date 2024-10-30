import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ceoFoto from '../assets/ceo.jpeg'; // Asegúrate de tener una foto del CEO en esta ruta
import logo from '../assets/modular_black.jpeg'; // Asegúrate de tener el logo en esta ruta
import fondo from '../assets/banner3.jpeg'; // Imagen de fondo

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
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Aumenta la transparencia
        zIndex: 1,
      }} />

      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Estilo para el título, ocupando todo el ancho */}
        <div style={{
          backgroundColor: '#595656',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          marginBottom: '40px',
          width: '100%', // Ocupar todo el ancho de la pantalla
        }}>
          <h1>Nosotros</h1>
        </div>

        <Container id="nosotros" style={{ padding: '0 20px' }}>
          <Row className="justify-content-center">
            <Col md={8}>
              <Row>
                <Col md={6}>
                  <Card style={{ borderRadius: '10px', height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <Card.Img
                      variant="top"
                      src={ceoFoto}
                      style={{ borderRadius: '10px 10px 0 0', objectFit: 'cover', height: '50%', width: '100%' }}
                    />
                    <Card.Body style={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
                      <Card.Title style={{ fontSize: '1.5rem' }}>Nuestros CEO</Card.Title>
                      <Card.Text style={{ fontSize: '1rem', flex: 1 }}>
                        Nuestros CEO han liderado la venta de muebles modulares desde 2020,
                        innovando y ofreciendo productos funcionales y estéticamente agradables.
                        <br /><br />
                        Gracias a su liderazgo, nuestra compañía se ha establecido como un referente en
                        el mercado, siempre buscando la satisfacción del cliente.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{ borderRadius: '10px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={logo}
                      alt="Logo"
                      style={{
                        borderRadius: '50%', // Bordes totalmente redondos
                        width: '300px', // Aumentar tamaño del logo
                        height: '300px', // Aumentar tamaño del logo
                        objectFit: 'cover',
                        border: '2px solid #595656', // Añadir un borde si lo deseas
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Nosotros;








