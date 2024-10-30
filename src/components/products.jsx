import React, { useState } from 'react';
import { Card, Row, Col, Button, Collapse, Modal } from 'react-bootstrap';
import producto1 from '../assets/banner1.jpeg';
import producto2 from '../assets/banner2.jpeg';
import producto3 from '../assets/banner3.jpeg';
import producto4 from '../assets/banner4.jpeg';
import producto5 from '../assets/banner5.jpeg';
import producto6 from '../assets/banner6.jpeg';
import producto7 from '../assets/banner7.jpeg';
import producto8 from '../assets/banner8.jpeg';
import producto9 from '../assets/banner9.jpeg';
import fondo from '../assets/banner5.jpeg'; // Imagen de fondo

const productos = [
  { id: 1, nombre: 'Escritorio gamer max Modular', descripcion: 'Lleva tu experiencia de juego a un nuevo nivel...', img: producto1 },
  { id: 2, nombre: 'Escritorio en L Axis modular', descripcion: 'Diseño de vanguardia...', img: producto2 },
  { id: 3, nombre: 'Escritorio gamer Domo modular', descripcion: 'El escritorio gamer domo te ofrece...', img: producto3 },
  { id: 4, nombre: 'Mesa de television Urban modular', descripcion: 'Nada como el toque exclusivo...', img: producto4 },
  { id: 5, nombre: 'Escritorio gamer Basic modular', descripcion: 'El escritorio gamer basic esta pensado...', img: producto5 },
  { id: 6, nombre: 'Mesa de Television Town modular', descripcion: 'Dale un diseño rustico...', img: producto6 },
  { id: 7, nombre: 'Escritorio gamer Trinity modular', descripcion: 'El mas top del segmento...', img: producto7 },
  { id: 8, nombre: 'Centro de Entretenimiento Roni modular', descripcion: 'Tu sala tambien quiere sentirse...', img: producto8 },
  { id: 9, nombre: 'Escritorio basic Batistine modular', descripcion: 'Si te gusta el minimalismo...', img: producto9 },
];

const Productos = () => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);

  const handleCardClick = (producto) => {
    setSelectedProducto(producto);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProducto(null);
  };

  const productosIniciales = productos.slice(0, 6);
  const productosExtra = productos.slice(6);

  return (
    <div
      id="products"
      style={{
        position: 'relative',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0',
      }}
    >
      {/* Capa de fondo con opacidad */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajusta el nivel de opacidad
        zIndex: 1,
      }} />

      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Franja negra con el título "Productos" */}
        <div style={{
          backgroundColor: '#595656',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          marginTop: '-20px',
        }}>
          <h1>Productos</h1>
        </div>

        {/* Sección de las tarjetas de productos */}
        <div style={{ padding: '20px' }}>
          <Row>
            {productosIniciales.map((producto) => (
              <Col key={producto.id} md={4} className="mb-4">
                <Card onClick={() => handleCardClick(producto)} style={{ width: '80%', margin: 'auto', cursor: 'pointer' }}>
                  <Card.Img variant="top" src={producto.img} style={{ height: '400px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.25rem' }}>{producto.nombre}</Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem' }}>{producto.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Botón para desplegar más productos */}
          {productosExtra.length > 0 && (
            <>
              <Collapse in={expanded}>
                <div>
                  <Row>
                    {productosExtra.map((producto) => (
                      <Col key={producto.id} md={4} className="mb-4">
                        <Card onClick={() => handleCardClick(producto)} style={{ width: '80%', margin: 'auto', cursor: 'pointer' }}>
                          <Card.Img variant="top" src={producto.img} style={{ height: '400px', objectFit: 'cover' }} />
                          <Card.Body>
                            <Card.Title style={{ fontSize: '1.25rem' }}>{producto.nombre}</Card.Title>
                            <Card.Text style={{ fontSize: '0.9rem' }}>{producto.descripcion}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Collapse>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <Button
                  variant="primary"
                  onClick={() => setExpanded(!expanded)}
                  style={{
                    backgroundColor: '#595656',
                    border: 'none',
                    padding: '12px 24px',
                    fontSize: '1.1rem',
                    width: '200px',
                    height: '50px',
                    borderRadius: '0',
                  }}
                >
                  {expanded ? 'Mostrar menos' : 'Mostrar más'}
                </Button>
              </div>
            </>
          )}

          {/* Modal para mostrar información del producto seleccionado */}
          {selectedProducto && (
            <Modal show={showModal} onHide={handleCloseModal} size="lg" style={{ maxWidth: '6000px' }}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProducto.nombre}</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: '0 0 70%', paddingRight: '20px' }}>
                  <img
                    src={selectedProducto.img}
                    alt={selectedProducto.nombre}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: '1', paddingLeft: '20px' }}>
                  <p style={{ fontSize: '1.25rem' }}>{selectedProducto.descripcion}</p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productos;
