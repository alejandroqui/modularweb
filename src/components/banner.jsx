import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import img1 from '../assets/banner/1.jpg'; 
import img2 from '../assets/banner/2.jpg';
import img3 from '../assets/banner/3.jpg';
import img4 from '../assets/banner/4.jpg';

const images = [
  { src: img1, alt: "Primera imagen del banner" },
  { src: img2, alt: "Segunda imagen del banner" },
  { src: img3, alt: "Tercera imagen del banner" },
  { src: img4, alt: "Cuarta imagen del banner" },
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
                width: '100%',
                height: '100%', // Asegura que ocupe la altura definida en CSS
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
          height: 250px; /* Altura fija para pantallas pequeñas */
        }

        /* Estilo para pantallas más grandes */
        @media (min-width: 768px) {
          .banner-image {
            height: 400px; /* Altura fija para pantallas grandes */
            max-height: 600px; /* Limita la altura máxima */
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;

























  
