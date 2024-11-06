// src/components/Productos.jsx
import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import { productos, categorias, fondoImagen } from './productsData';

const Productos = () => {
  const [expanded, setExpanded] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [mostrarTodasCategorias, setMostrarTodasCategorias] = useState(false);

  const handleCardClick = (producto) => {
    setSelectedProducto(producto);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProducto(null);
  };

  const toggleExpanded = (categoria) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [categoria]: !prevExpanded[categoria],
    }));
  };

  const toggleMostrarCategorias = () => {
    setMostrarTodasCategorias(!mostrarTodasCategorias);
  };

  return (
    <div
      id="products"
      style={{
        position: 'relative',
        backgroundImage: `url(${fondoImagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          backgroundColor: '#595656',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          marginTop: '-20px',
          textAlign: 'center',
        }}>
          <h1>Productos</h1>
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Button
            variant="primary"
            onClick={toggleMostrarCategorias}
            style={{
              backgroundColor: '#595656',
              border: 'none',
              padding: '12px 24px',
              fontSize: '1.1rem',
              width: '100%',
              maxWidth: '250px',
              height: '70px',
              borderRadius: '20%',
            }}
          >
            {mostrarTodasCategorias ? 'Mostrar menos' : 'Desplegar Catálogo'}
          </Button>
        </div>

        <div style={{ padding: '20px' }}>
          {categorias.map((categoria, index) => {
            if (!mostrarTodasCategorias && index > 0) return null;

            const productosCategoria = productos.filter((producto) => producto.categoria === categoria);
            const productosVisibles = expanded[categoria] ? productosCategoria : productosCategoria.slice(0, 3);

            return (
              <div key={categoria} style={{ marginBottom: '40px' }}>
                <h2 style={{ color: 'white', fontSize: '1.8rem', textTransform: 'capitalize' }}>{categoria}</h2>
                <Row>
                  {productosVisibles.map((producto) => (
                    <Col key={producto.id} xs={12} sm={6} md={4} className="mb-4">
                      <Card onClick={() => handleCardClick(producto)} style={{ cursor: 'pointer' }}>
                        <Card.Img variant="top" src={producto.img} style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body style={{ padding: '10px' }}>
                          <Card.Title style={{ fontSize: '1.25rem', marginBottom: '5px' }}>{producto.nombre}</Card.Title>
                          <Card.Text style={{ fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {producto.descripcion}
                          </Card.Text>
                          <Card.Text style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                            Precio: {producto.precio}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                {productosCategoria.length > 3 && (
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Button
                      variant="primary"
                      onClick={() => toggleExpanded(categoria)}
                      style={{
                        backgroundColor: '#595656',
                        border: 'none',
                        padding: '12px 24px',
                        fontSize: '1rem',
                        width: '100%',
                        maxWidth: '200px',
                        height: '50px',
                        borderRadius: '0',
                      }}
                    >
                      {expanded[categoria] ? 'Mostrar menos' : 'Mostrar más'}
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProducto?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6}>
              <div style={{ paddingRight: '20px' }}>
                <h4>Descripción</h4>
                <p>{selectedProducto?.descripcion}</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Precio: {selectedProducto?.precio}</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img 
                src={selectedProducto?.img} 
                alt={selectedProducto?.nombre} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} 
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Productos;



