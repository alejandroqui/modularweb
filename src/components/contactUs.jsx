import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import fondo from '../assets/banner1.jpeg';

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos son obligatorios
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.mensaje) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    emailjs
      .send(
        'service_0x8piqp', // Reemplaza con tu Service ID
        'tamplate_modular', // Reemplaza con tu Template ID
        formData,
        'm-Iue2hNH0SNnZdmt' // Reemplaza con tu User ID
      )
      .then(
        (result) => {
          alert('Formulario enviado con éxito');
          setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
        },
        (error) => {
          console.error('Error:', error);
          alert('Error al enviar el formulario');
        }
      );
  };

  return (
    <div
      id="contact"
      style={{
        position: 'relative',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa de fondo con opacidad */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Ajusta el nivel de opacidad
        zIndex: 1,
      }} />

      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#595656',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
        }}>
          <h1>Contactanos</h1>
        </div>

        {/* Formulario de Contacto */}
        <br />
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label style={{ color: 'white' }}>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#595656', color: 'white' }} // Estilo del campo
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label style={{ color: 'white' }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#595656', color: 'white' }} // Estilo del campo
              />
            </Form.Group>

            <Form.Group controlId="telefono">
              <Form.Label style={{ color: 'white' }}>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#595656', color: 'white' }} // Estilo del campo
              />
            </Form.Group>

            <Form.Group controlId="mensaje">
              <Form.Label style={{ color: 'white' }}>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#595656', color: 'white' }} // Estilo del campo
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Enviar
            </Button>
          </Form>
        </Container>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contactanos;


