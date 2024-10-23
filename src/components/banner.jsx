// src/components/Home.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/banner1.jpeg'; 
import img2 from '../assets/banner2.jpeg';
import img3 from '../assets/banner3.jpeg';
import img4 from '../assets/banner4.jpeg';
import img5 from '../assets/banner5.jpeg';
import img6 from '../assets/banner6.jpeg';
import img7 from '../assets/banner7.jpeg';
import img8 from '../assets/banner8.jpeg';
import img9 from '../assets/banner9.jpeg';

const images = [
  { src: img1, alt: "Primera imagen del banner" },
  { src: img2, alt: "Segunda imagen del banner" },
  { src: img3, alt: "Tercera imagen del banner" },
  { src: img4, alt: "Cuarta imagen del banner" },
  { src: img5, alt: "Quinta imagen del banner" },
  { src: img6, alt: "Sexta imagen del banner" },
  { src: img7, alt: "Séptima imagen del banner" },
  { src: img8, alt: "Octava imagen del banner" },
  { src: img9, alt: "novena imagen del banner" },
];

const Banner = () => {
  const triplets = [];
  for (let i = 0; i < images.length; i += 3) {
    triplets.push(images.slice(i, i + 3));
  }

  return (
    <div id="banner"> 
      {/* Banner de imágenes en carrusel */}
      <Carousel style={{ width: '100%' }}>
        {triplets.map((triplet, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: 'flex', width: '100%', padding: '0' }}>
              {triplet.map((image, idx) => (
                <div key={idx} style={{ flex: 1, padding: '0' }}> {/* Se eliminan márgenes */}
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                    style={{ height: '600px', objectFit: 'cover', margin: '0', padding: '0' }} // Ajuste completo de imagen sin márgenes
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Descripción de productos y servicios en dos columnas */}
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Descubre nuestros productos y servicios</h2><br /><br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Columna izquierda: Productos */}
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <h2>Productos</h2>
            <ul style={{ fontSize: '18px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li>Escritorios modulares sencillos, tipo L y gamer.</li>
              <li>Armarios y cajoneras de diferentes tamaños y estilos.</li>
              <li>Camas modulares y base camas.</li>
              <li>Centros de entretenimiento y mesas de televisor.</li>
            </ul>
          </div>

          {/* Columna derecha: Servicios */}
          <div style={{ flex: 1, paddingLeft: '20px' }}>
            <h2>Servicios</h2>
            <ul style={{ fontSize: '18px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li>Asesoría en diseño de interiores para optimizar tus espacios.</li>
              <li>Instalación de muebles.</li>
              <li>Opciones de financiamiento para adaptarse a tu presupuesto.</li>
              <li>Garantía de calidad y servicio postventa.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;









  
