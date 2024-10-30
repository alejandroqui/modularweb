import React from 'react';
import cliente1 from '../assets/clientes/cliente1.jpeg';
import cliente2 from '../assets/clientes/cliente2.jpeg';
import cliente3 from '../assets/clientes/cliente3.jpeg';
import fondo from '../assets/banner4.jpeg'; // Imagen de fondo

const experiencias = [
  {
    id: 1,
    texto: 'La entrega de la mesa de televisión fue excepcional. Nuestro equipo garantizó un transporte seguro y eficiente, logrando que el mueble llegara en perfectas condiciones al hogar del cliente en Cali. Además, el equipo de instalación se encargó del armado en el lugar, lo que facilitó enormemente la experiencia del cliente. La mesa quedó perfectamente ensamblada, y cada detalle fue cuidadosamente revisado para asegurar su estabilidad y estética. El cliente expresó su satisfacción no solo con la calidad del producto, sino también con la atención y profesionalismo del equipo de montaje.',
    img: cliente1,
  },
  {
    id: 2,
    texto: 'La instalación del centro de entretenimiento fue rápida y organizada. Nuestro equipo planificó cada paso del proceso, desde el transporte hasta la instalación, para que el mueble llegara en óptimas condiciones. Al llegar al hogar del cliente, el equipo se encargó del montaje y brindó recomendaciones sobre cómo aprovechar mejor el espacio. El cliente quedó encantado con el resultado final y valoró el compromiso del equipo en asegurar que todo quedara a su gusto y en responder a todas sus preguntas sobre el cuidado del mueble.',
    img: cliente2,
  },
  {
    id: 3,
    texto: 'La entrega y armado del armario de gran tamaño fueron impecables. El equipo de logística cuidó cada detalle para que el transporte fuera seguro y llegara sin contratiempos al hogar del cliente. En el lugar, nuestros expertos ensamblaron el armario con precisión, asegurando que cada pieza quedara firmemente colocada. Además, brindaron sugerencias al cliente sobre cómo organizar sus pertenencias para aprovechar al máximo el espacio disponible. La experiencia fue altamente satisfactoria, y el cliente expresó su gratitud por el excelente servicio y la atención al detalle del equipo.',
    img: cliente3,
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
        {/* Franja negra con el título "Clientes" */}
        <div style={{
          backgroundColor: '#595656',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          marginTop: '-20px', // Sube la franja para evitar que la imagen de fondo se vea por encima
        }}>
          <h1>Clientes</h1>
        </div>

        {experiencias.map((experiencia, index) => (
          <div
            key={experiencia.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Alterna la dirección
            }}
          >
            {/* Imagen del cliente */}
            <div style={{ flex: '0 0 300px', padding: '10px' }}> {/* Tamaño de imagen aumentado */}
              <img
                src={experiencia.img}
                alt={`Cliente ${experiencia.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '300px', // Imagen más grande
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
                }}
              />
            </div>

            {/* Texto de la experiencia */}
            <div style={{ flex: 1, padding: '10px 20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0', textAlign: 'justify', color: 'white' }}>{experiencia.texto}</p> {/* Color de texto en blanco */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;





