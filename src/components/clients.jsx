// src/components/Clientes.jsx
import React from 'react';
import cliente1 from '../assets/clientes/cliente1.jpeg';
import cliente2 from '../assets/clientes/cliente2.jpeg';
import cliente3 from '../assets/clientes/cliente3.jpeg';

const experiencias = [
  {
    id: 1,
    texto: 'La entrega de la mesa de televisión fue excepcional, comenzando con un transporte eficiente que garantizó que el mueble llegara en perfectas condiciones al barrio Centenario, en Cali. Nuestros profesionales no solo se encargaron del transporte, sino que también ofrecieron un servicio de armado que facilitó la experiencia del cliente. Una vez en su hogar, el equipo se aseguró de que cada pieza se ensamblara correctamente, prestando atención a los detalles. El cliente quedó satisfecho tanto con la calidad del mueble como con la rapidez y profesionalismo del servicio. La disposición del equipo para resolver dudas durante el armado hizo que el cliente se sintiera seguro y apoyado en todo momento.',
    img: cliente1,
  },
  {
    id: 2,
    texto: 'La entrega del centro de entretenimiento fue un evento memorable que inició con una planificación cuidadosa para asegurar un proceso sin contratiempos. Nuestro equipo de transporte se encargó de llevar el mueble al barrio Centenario en Cali, garantizando que llegara en perfectas condiciones. Al llegar al hogar del cliente, nuestros expertos en armado montaron el centro de entretenimiento, asegurándose de que cada componente estuviera bien colocado y alineado. El proceso se realizó de manera rápida y eficiente, permitiendo que el cliente disfrutara de su nuevo mueble en poco tiempo. Durante el montaje, nuestro equipo brindó asesoría sobre cómo optimizar el espacio, añadiendo un valor adicional a la experiencia y dejando al cliente completamente satisfecho.',
    img: cliente2,
  },
  {
    id: 3,
    texto: 'La entrega y armado del armario de 2.30 x 2 metros fue un proceso excepcional que comenzó con una logística minuciosa para garantizar un servicio sin inconvenientes. Nuestro equipo de transporte se encargó de llevar el armario al hogar del cliente en el barrio Centenario de Cali, asegurando que llegara en perfectas condiciones. Al llegar, nuestros expertos en armado se pusieron manos a la obra, ensamblando el mueble con precisión y cuidado para garantizar su estabilidad y funcionalidad. La rapidez del proceso permitió que el cliente comenzara a disfrutar de su nuevo armario en poco tiempo. Además, nuestro equipo brindó recomendaciones sobre la organización del espacio, lo que enriqueció aún más la experiencia y dejó al cliente plenamente satisfecho.',
    img: cliente3,
  },
];

const Clientes = () => {
  return (
    <div id="clients" style={{ padding: '20px' }}>
      {/* Franja negra con el título "Clientes" */}
      <div style={{
        backgroundColor: '#595656',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
      }}>
        <h1>Clientes</h1>
      </div>

      {experiencias.map((experiencia, index) => (
        <div
          key={experiencia.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '300px',
            marginBottom: '20px',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Alterna la dirección
          }}
        >
          <div style={{ flex: '0 0 350px', padding: '10px' }}> {/* Mantener tamaño de imagen en 150px */}
            <img
              src={experiencia.img}
              alt={`Cliente ${experiencia.id}`}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // Ajusta la imagen a 150px de ancho
            />
          </div>
          <div style={{ flex: 1, padding: '10px', textAlign: 'center', fontSize: '1.2rem' }}>
            <p>{experiencia.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clientes;

