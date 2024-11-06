import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import img1 from '../assets/banner3.jpeg'; 
import img2 from '../assets/banner1.jpeg';
import img3 from '../assets/banner5.jpeg';
import img4 from '../assets/banner8.jpeg';
import img5 from '../assets/banner4.jpeg';
import img6 from '../assets/banner6.jpeg';
import img7 from '../assets/banner23.png';
import img8 from '../assets/banner24.png';
import img9 from '../assets/banner9.jpeg';
import img10 from '../assets/banner20.jpeg';
import img11 from '../assets/banner27.jpeg';
import img12 from '../assets/banner21.jpeg';
import img13 from '../assets/banner36.jpeg';
import img14 from '../assets/banner40.jpeg';
import img15 from '../assets/banner39.jpeg';

const images = [
  { src: img1, alt: "Primera imagen del banner" },
  { src: img2, alt: "Segunda imagen del banner" },
  { src: img3, alt: "Tercera imagen del banner" },
  { src: img4, alt: "Cuarta imagen del banner" },
  { src: img5, alt: "Quinta imagen del banner" },
  { src: img6, alt: "Sexta imagen del banner" },
  { src: img7, alt: "Séptima imagen del banner" },
  { src: img8, alt: "Octava imagen del banner" },
  { src: img9, alt: "Novena imagen del banner" },
  { src: img10, alt: "Décima imagen del banner" },
  { src: img11, alt: "Undécima imagen del banner" },
  { src: img12, alt: "Duodécima imagen del banner" },
  { src: img13, alt: "Decimotercera imagen del banner" },
  { src: img14, alt: "Decimocuarta imagen del banner" },
  { src: img15, alt: "Decimoquinta imagen del banner" },
];

const Banner = () => {
  return (
    <div id="banner" className="mt-4 mt-md-5">
      <Carousel className="w-100">
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 banner-image"
              src={image.src}
              alt={image.alt}
              style={{
                objectFit: 'cover',
                width: '100%', // Asegura que la imagen ocupe todo el ancho en móviles
                height: 'auto', // Mantiene la proporción de la imagen
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container fluid className="py-4 bg-light">
        <h2 className="text-center mb-4 text-secondary">Descubre nuestros productos y servicios</h2>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-secondary">Productos</h3>
              <ul className="list-unstyled text-muted">
                <li>Escritorios modulares sencillos, tipo L y gamer.</li>
                <li>Armarios y cajoneras de diferentes tamaños y estilos.</li>
                <li>Camas modulares y base camas.</li>
                <li>Centros de entretenimiento y mesas de televisor.</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-secondary">Servicios</h3>
              <ul className="list-unstyled text-muted">
                <li>Asesoría en diseño de interiores para optimizar tus espacios.</li>
                <li>Instalación de muebles.</li>
                <li>Opciones de financiamiento para adaptarse a tu presupuesto.</li>
                <li>Garantía de calidad y servicio postventa.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        /* Estilo para imágenes en pantallas pequeñas (móviles) */
        .banner-image {
          height: 250px; /* Altura para pantallas pequeñas */
        }

        /* Estilo para pantallas más grandes */
        @media (min-width: 768px) {
          .banner-image {
            max-height: 400px; /* Limita la altura máxima en pantallas grandes */
            width: 80%; /* Hace que la imagen sea más angosta en pantallas grandes */
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
























  
