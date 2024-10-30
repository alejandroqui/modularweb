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
import producto10 from '../assets/banner10.jpeg';
import producto11 from '../assets/banner11.jpeg';
import producto12 from '../assets/banner12.jpeg';
import producto13 from '../assets/banner13.jpeg';
import producto14 from '../assets/banner14.jpeg';
import producto15 from '../assets/banner15.jpeg';
import producto16 from '../assets/banner16.jpg';
import producto17 from '../assets/banner17.jpeg';
import producto18 from '../assets/banner18.jpeg';
import producto19 from '../assets/banner19.jpeg';

import fondo from '../assets/banner5.jpeg';

const productos = [
  { id: 1, nombre: 'Escritorio gamer max blue', descripcion: 'Lleva tu experiencia de juego a un nuevo nivel...', img: producto1, categoria: 'zona gamer' },
  { id: 2, nombre: 'Escritorio en L Axis modular', descripcion: 'Diseño de vanguardia...', img: producto2, categoria: 'estudio' },
  { id: 3, nombre: 'Escritorio gamer Domo modular', descripcion: 'El escritorio gamer domo te ofrece...', img: producto3, categoria: 'zona gamer' },
  { id: 4, nombre: 'Mesa de television Urban modular', descripcion: 'Nada como el toque exclusivo...', img: producto4, categoria: 'sala' },
  { id: 5, nombre: 'Escritorio gamer Basic modular', descripcion: 'El escritorio gamer basic esta pensado...', img: producto5, categoria: 'zona gamer' },
  { id: 6, nombre: 'Mesa de Television Town modular', descripcion: 'Dale un diseño rustico...', img: producto6, categoria: 'sala' },
  { id: 7, nombre: 'Escritorio gamer Trinity modular', descripcion: 'El mas top del segmento...', img: producto7, categoria: 'zona gamer' },
  { id: 8, nombre: 'Centro de Entretenimiento Roni modular', descripcion: 'Tu sala también quiere sentirse...', img: producto8, categoria: 'sala' },
  { id: 9, nombre: 'Escritorio basic Batistine modular', descripcion: 'Si te gusta el minimalismo...', img: producto9, categoria: 'estudio' },
  { id: 10, nombre: 'Escritorio gamer Lax blue', descripcion: 'Si te gusta el minimalismo...', img: producto10, categoria: 'zona gamer' },
  { id: 11, nombre: 'Escritorio gamer Lax red', descripcion: 'Si te gusta el minimalismo...', img: producto11, categoria: 'zona gamer' },
  { id: 12, nombre: 'Escritorio gamer max red', descripcion: 'Si te gusta el minimalismo...', img: producto12, categoria: 'zona gamer' },
  { id: 13, nombre: 'Mesa tv Good 50"', descripcion: 'Si te gusta el minimalismo...', img: producto13, categoria: 'sala' },
  { id: 14, nombre: 'Mesa tv Mikasa 65"', descripcion: 'Si te gusta el minimalismo...', img: producto14, categoria: 'sala' },
  { id: 15, nombre: 'Mesa tv Flat 65"', descripcion: 'Si te gusta el minimalismo...', img: producto15, categoria: 'sala' },
  { id: 16, nombre: 'Mesa tv Tunez"', descripcion: 'Si te gusta el minimalismo...', img: producto16, categoria: 'sala' },
  { id: 17, nombre: 'Mesa tv y sonido Prato Rovere 32"', descripcion: 'Si te gusta el minimalismo...', img: producto17, categoria: 'sala' },
  { id: 18, nombre: 'Mesa tv y sonido Prato wengue 32"', descripcion: 'Si te gusta el minimalismo...', img: producto18, categoria: 'sala' },
  { id: 19, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto19, categoria: 'sala' },
];

const categorias = ['zona gamer', 'habitación', 'sala', 'estudio', 'baño', 'cocina'];

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
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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

        {/* Botón de desplegar categorías */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Button
            variant="primary"
            onClick={toggleMostrarCategorias}
            style={{
              backgroundColor: '#595656',
              border: 'none',
              padding: '12px 24px',
              fontSize: '1.1rem',
              width: '250px',
              height: '70px',
              borderRadius: '20%',
            }}
          >
            {mostrarTodasCategorias ? 'Mostrar menos' : 'Desplegar Catalogo'}
          </Button>
        </div>

        {/* Sección de las categorías */}
        <div style={{ padding: '20px' }}>
          {categorias.map((categoria, index) => {
            if (!mostrarTodasCategorias && index > 0) return null;

            const productosCategoria = productos.filter((producto) => producto.categoria === categoria);
            const productosVisibles = expanded[categoria] ? productosCategoria : productosCategoria.slice(0, 3);

            return (
              <div key={categoria} style={{ marginBottom: '40px' }}>
                {/* Título de la categoría */}
                <h2 style={{ color: 'white', fontSize: '1.8rem', textTransform: 'capitalize' }}>{categoria}</h2>
                <Row>
                  {productosVisibles.map((producto) => (
                    <Col key={producto.id} md={4} className="mb-4">
                      <Card onClick={() => handleCardClick(producto)} style={{ width: '80%', margin: 'auto', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={producto.img} style={{ height: '250px', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title style={{ fontSize: '1.25rem' }}>{producto.nombre}</Card.Title>
                          <Card.Text style={{ fontSize: '0.9rem' }}>{producto.descripcion}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                {/* Botón de mostrar más */}
                {productosCategoria.length > 3 && (
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Button
                      variant="primary"
                      onClick={() => toggleExpanded(categoria)}
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
                      {expanded[categoria] ? 'Mostrar menos' : 'Mostrar más'}
                    </Button>
                  </div>
                )}
              </div>
            );
          })}

          {/* Modal para mostrar información del producto seleccionado */}
          {selectedProducto && (
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
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



