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
import producto20 from '../assets/banner20.jpeg';
import producto21 from '../assets/banner21.jpeg';
import producto22 from '../assets/banner22.jpeg';
import producto25 from '../assets/banner25.jpeg';
import producto26 from '../assets/banner26.jpeg';
import producto27 from '../assets/banner27.jpeg';
import producto28 from '../assets/banner28.jpeg';
import producto29 from '../assets/banner29.jpeg';
import producto30 from '../assets/banner30.jpeg';
import producto31 from '../assets/banner31.jpeg';
import producto32 from '../assets/banner32.jpeg';
import producto33 from '../assets/banner33.jpeg';
import producto34 from '../assets/banner34.jpeg';
import producto35 from '../assets/banner35.jpeg';
import producto36 from '../assets/banner36.jpeg';
import producto37 from '../assets/banner37.jpeg';
import producto38 from '../assets/banner38.jpeg';
import producto39 from '../assets/banner39.jpeg';
import producto40 from '../assets/banner40.jpeg';
import producto41 from '../assets/banner41.jpeg';
import producto42 from '../assets/banner42.jpeg';
import producto43 from '../assets/banner43.jpeg';
import producto44 from '../assets/banner44.jpeg';
import producto45 from '../assets/banner45.jpeg';
import producto46 from '../assets/banner46.jpeg';
import producto47 from '../assets/banner47.jpeg';
import producto48 from '../assets/banner48.jpeg';
import producto49 from '../assets/banner49.jpeg';
import producto50 from '../assets/banner50.jpeg';
import producto51 from '../assets/banner51.jpeg';
import producto52 from '../assets/banner52.jpeg';
import producto53 from '../assets/banner53.jpeg';
import producto54 from '../assets/banner54.jpeg';
import producto55 from '../assets/banner55.jpeg';
import producto56 from '../assets/banner56.jpeg';
import producto57 from '../assets/banner57.jpeg';
import producto58 from '../assets/banner58.jpeg';
import producto59 from '../assets/banner59.jpeg';
import producto60 from '../assets/banner60.jpeg';
import producto61 from '../assets/banner61.jpeg';
import producto62 from '../assets/banner61.jpeg';
import producto63 from '../assets/banner63.jpeg';
import producto64 from '../assets/banner64.jpeg';
import producto65 from '../assets/banner65.jpeg';
import producto66 from '../assets/banner66.jpeg';
import producto67 from '../assets/banner67.jpeg';
import producto68 from '../assets/banner68.jpeg';
import producto69 from '../assets/banner69.jpeg';
import producto70 from '../assets/banner70.jpeg';
import producto71 from '../assets/banner71.jpeg';
import producto72 from '../assets/banner72.jpeg';

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
  { id: 19, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto19, categoria: 'habitación' },
  { id: 20, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto20, categoria: 'habitación' },
  { id: 21, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto21, categoria: 'habitación' },
  { id: 22, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto22, categoria: 'habitación' },
  { id: 25, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto25, categoria: 'habitación' },
  { id: 26, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto26, categoria: 'habitación' },
  { id: 27, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto27, categoria: 'habitación' },
  { id: 28, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto28, categoria: 'habitación' },
  { id: 29, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto29, categoria: 'habitación' },
  { id: 30, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto30, categoria: 'habitación' },
  { id: 31, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto31, categoria: 'habitación' },
  { id: 32, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto32, categoria: 'habitación' },
  { id: 33, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto33, categoria: 'habitación' },
  { id: 34, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto34, categoria: 'habitación' },
  { id: 35, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto35, categoria: 'habitación' },
  { id: 36, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto36, categoria: 'habitación' },
  { id: 37, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto37, categoria: 'habitación' },
  { id: 38, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto38, categoria: 'habitación' },
  { id: 39, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto39, categoria: 'habitación' },
  { id: 40, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto40, categoria: 'habitación' },
  { id: 41, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto41, categoria: 'habitación' },
  { id: 42, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto42, categoria: 'habitación' },
  { id: 43, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto43, categoria: 'habitación' },
  { id: 44, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto44, categoria: 'estudio' },  
  { id: 45, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto45, categoria: 'estudio' },
  { id: 46, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto46, categoria: 'estudio' },
  { id: 47, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto47, categoria: 'estudio' },
  { id: 48, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto48, categoria: 'estudio' },
  { id: 49, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto49, categoria: 'estudio' },
  { id: 50, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto50, categoria: 'estudio' },
  { id: 51, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto51, categoria: 'estudio' },
  { id: 52, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto52, categoria: 'estudio' },
  { id: 53, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto53, categoria: 'estudio' },
  { id: 54, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto54, categoria: 'estudio' },
  { id: 55, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto55, categoria: 'estudio' },
  { id: 56, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto56, categoria: 'estudio' },
  { id: 57, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto57, categoria: 'estudio' },
  { id: 58, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto58, categoria: 'estudio' },
  { id: 59, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto59, categoria: 'estudio' },
  { id: 60, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto60, categoria: 'estudio' },
  { id: 61, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto61, categoria: 'estudio' },
  { id: 62, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto62, categoria: 'estudio' },
  { id: 63, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto63, categoria: 'estudio' },
  { id: 64, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto64, categoria: 'estudio' },
  { id: 65, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto65, categoria: 'estudio' },
  { id: 66, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto66, categoria: 'estudio' },
  { id: 67, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto67, categoria: 'estudio' },
  { id: 68, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto68, categoria: 'estudio' },
  { id: 69, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto69, categoria: 'estudio' },
  { id: 70, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto70, categoria: 'estudio' },
  { id: 71, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto71, categoria: 'estudio' },
  { id: 72, nombre: 'Mesa centro Urban', descripcion: 'Si te gusta el minimalismo...', img: producto72, categoria: 'estudio' },
];

const categorias = ['zona gamer', 'habitación', 'sala', 'estudio'];

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