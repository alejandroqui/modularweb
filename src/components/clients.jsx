import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import cliente1 from '../assets/clientes/cliente1.jpeg';
import cliente2 from '../assets/clientes/cliente2.jpeg';
import cliente3 from '../assets/clientes/cliente3.jpeg';
import cliente4 from '../assets/clientes/cliente4.jpeg';
import cliente5 from '../assets/clientes/cliente5.jpeg';
import cliente6 from '../assets/clientes/cliente6.jpeg';
import cliente7 from '../assets/clientes/cliente7.jpeg';
import cliente8 from '../assets/clientes/cliente8.jpeg';
import cliente9 from '../assets/clientes/cliente9.jpeg';
import cliente10 from '../assets/clientes/cliente10.jpeg';
import cliente11 from '../assets/clientes/cliente11.jpeg';
import cliente12 from '../assets/clientes/cliente12.jpeg';

import fondo from '../assets/banner4.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const experiencias = [
  {
    id: 1,
    texto: 'Armado mesa de television Urban, solicitada por el cliente!',
    img: cliente1,
  },
  {
    id: 2,
    texto: 'Venta y armado del centro de entretenimiento Roni',
    img: cliente2,
  },
  {
    id: 3,
    texto: 'Entrega de armado de closet 2x2 Burdeos',
    img: cliente3,
  },
  {
    id: 4,
    texto: 'Armado de armario de otro proveedor, el servicio de armado fue contratado gracias a nuestra excelente reputacion!',
    img: cliente4,
  },
  {
    id: 5,
    texto: 'Venta e instalacion de escritorio configurable Spaqua',
    img: cliente5,
  },
  {
    id: 6,
    texto: 'Armado de comoda Burdeos, solicitada por el cliente en la pos-venta',
    img: cliente6,
  },
  {
    id: 7,
    texto: 'Una entrega mas con instalacion del centro de entretenimiento Roni',
    img: cliente7,
  },
  {
    id: 8,
    texto: 'Muestra de el orden en el cual se entregan los productos, en su caja, con manual de usuario y garantia del fabricante',
    img: cliente8,
  },
  {
    id: 9,
    texto: 'Entrega de venta y armado del escritorio Gamer Basic',
    img: cliente9,
  },
  {
    id: 10,
    texto: 'Entrega del escritorio extensible Space, configuracion derecha',
    img: cliente10,
  },
  {
    id: 11,
    texto: 'Armado en domicilio de Closet Bari de 2x2 mts',
    img: cliente11,
  },
  {
    id: 12,
    texto: 'Domicilio garantizado en cali y alrededores, a todo el país por Inter Rapidisimo!',
    img: cliente12,
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
              <Card style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)', height: '600px', width: '400px' }}>
                <Card.Img variant="top" src={experiencia.img} alt={`Cliente ${experiencia.id}`} style={{ height: '500px', objectFit: 'cover' }} />
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









