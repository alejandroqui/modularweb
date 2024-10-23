// src/components/Productos.jsx
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import producto1 from '../assets/banner1.jpeg';
import producto2 from '../assets/banner2.jpeg';
import producto3 from '../assets/banner3.jpeg';
import producto4 from '../assets/banner4.jpeg';
import producto5 from '../assets/banner5.jpeg';
import producto6 from '../assets/banner6.jpeg';
import producto7 from '../assets/banner7.jpeg';
import producto8 from '../assets/banner8.jpeg';
import producto9 from '../assets/banner9.jpeg';

const productos = [
  {
    id: 1,
    nombre: 'Escritorio gamer max Modular',
    descripcion: 'Lleva tu experiencia de juego a un nuevo nivel, el escritorio gamer max te permite espacio y comodidad insuperables, no habrá rival para ti y tus partidas!!',
    img: producto1,
  },
  {
    id: 2,
    nombre: 'Escritorio en L Axis modular',
    descripcion: 'Diseño de vanguardia, comodidad y estilo, todo en un mismo elemento, el escritorio axis L es perfecto para el hogar o la oficina, y te brinda el toque de sofisticación que necesitas!',
    img: producto2,
  },
  {
    id: 3,
    nombre: 'Escritorio gamer Domo modular',
    descripcion: 'El escritorio gamer domo te ofrece capacidad de carga y sonido envolvente, para los gamers que quieren llevar su experiencia a un nuevo nivel!',
    img: producto3,
  },
  {
    id: 4,
    nombre: 'Mesa de television Urban modular',
    descripcion: 'Nada como el toque exclusivo que un poco de madera le puede brindar a tu centro de entretenimineto, la mesa de television urban tiene el estilo y la elegancia que tu sala o dormitorio necesitan.',
    img: producto4,
  },
  {
    id: 5,
    nombre: 'Escritorio gamer Basic modular',
    descripcion: 'El escritorio gamer basic esta pensado para los mas pequeños, brinda un espacio perfecto para los niños y niñas que quieren dar sus primeros pasos en el mundo del gaming, tenemos productos para toda la familia!!',
    img: producto5,
  },
  {
    id: 6,
    nombre: 'Mesa de Television Town modular',
    descripcion: 'Dale un diseño rustico pero elegante a tus espacios con la mesa de television Town, fabricada en madera y metal, garantizan el soporte y diseño ideal para televisores hasta de 85"',
    img: producto6,
  },
  {
    id: 7,
    nombre: 'Escritorio gamer Trinity modular',
    descripcion: 'El mas top del segmento! el escritorio modular trinity te ofrece 6 configuraciones distintas, asi que se puedes estar tranquilo o tranquila, se adecaura a cualquier sitio que desees!! vas a la fija con tu escritorio trinity!',
    img: producto7,
  },
  {
    id: 8,
    nombre: 'Centro de Entretenimiento Roni modular',
    descripcion: 'Tu sala tambien quiere sentirse a la vanguardia, el toque que necesita es el centro de entretenimiento Roni, su excelente calidad y soporte lo convierten una de las referencias mas vendidas.',
    img: producto8,
  },
  {
    id: 9,
    nombre: 'Escritorio basic Batistine modular',
    descripcion: 'Si te gusta el minimalismo, el escritorio batistine es para ti, soporta hasta 40 kg y su diseño esta inspirado en los nuevos hogares, con un estilo minimalista y moderno.',
    img: producto9,
  },
];

const Productos = () => {
  return (
    <div id="products">
      {/* Franja negra con el título "Productos" */}
      <div style={{
        backgroundColor: '#595656 ',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
      }}>
        <h1>Productos</h1>
      </div>

      {/* Sección de las tarjetas de productos */}
      <div style={{ padding: '20px' }}>
        <Row>
          {productos.map((producto) => (
            <Col key={producto.id} md={4} className="mb-4">
              <Card style={{ width: '80%', margin: 'auto' }}> {/* Ajusta el ancho de la tarjeta */}
                <Card.Img variant="top" src={producto.img} style={{ height: '400px', objectFit: 'cover' }} /> {/* Ajusta la altura de la imagen */}
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.25rem' }}>{producto.nombre}</Card.Title> {/* Tamaño de fuente más pequeño */}
                  <Card.Text style={{ fontSize: '0.9rem' }}>{producto.descripcion}</Card.Text> {/* Tamaño de fuente más pequeño */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Productos;

