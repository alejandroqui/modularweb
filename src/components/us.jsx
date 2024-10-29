import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ceoFoto from '../assets/ceo.jpeg'; // Asegúrate de tener una foto del CEO en esta ruta
import logo from '../assets/modular_black.jpeg'; // Asegúrate de tener el logo en esta ruta

const Nosotros = () => {
  return (
    <>
      {/* Estilo para el título, ocupando todo el ancho */}
      <div  id="Us" style={{
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
    </>
  );
};

export default Nosotros;







