import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/banner3.jpeg'; 
import img2 from '../assets/banner1.jpeg';
import img3 from '../assets/banner5.jpeg';
import img4 from '../assets/banner8.jpeg';
import img5 from '../assets/banner4.jpeg';
import img6 from '../assets/banner6.jpeg';
import img7 from '../assets/banner23.png';
import img8 from '../assets/banner24.png';
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
  { src: img9, alt: "Novena imagen del banner" },
];

const Banner = () => {
  const triplets = [];
  for (let i = 0; i < images.length; i += 3) {
    triplets.push(images.slice(i, i + 3));
  }

  return (
    <div id="banner" style={{ marginTop: '150px' }}> 
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

      {/* Descripción de productos y servicios en tarjetas */}
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#595656' }}>Descubre nuestros productos y servicios</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* Tarjeta: Productos */}
          <div style={{ flex: 1, margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#595656' }}>Productos</h2>
            <ul style={{ fontSize: '18px', lineHeight: '1.8', color: '#595656' }}>
              <li>Escritorios modulares sencillos, tipo L y gamer.</li>
              <li>Armarios y cajoneras de diferentes tamaños y estilos.</li>
              <li>Camas modulares y base camas.</li>
              <li>Centros de entretenimiento y mesas de televisor.</li>
            </ul>
          </div>

          {/* Tarjeta: Servicios */}
          <div style={{ flex: 1, margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#595656' }}>Servicios</h2>
            <ul style={{ fontSize: '18px', lineHeight: '1.8', color: '#595656' }}>
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










  
