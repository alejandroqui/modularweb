// src/components/Contactanos.jsx
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

    if (!formData.nombre || !formData.email || !formData.telefono || !formData.mensaje) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    emailjs
      .send(
        'service_0x8piqp',
        'tamplate_modular',
        formData,
        'm-Iue2hNH0SNnZdmt'
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
      }} />

      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#595656',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.8rem',
          textAlign: 'center',
          marginBottom: '20px',
        }}>
          <h1 style={{ margin: 0 }}>Contáctanos</h1>
        </div>

        {/* Formulario de Contacto */}
        <Container style={{ padding: '0 20px', maxWidth: '600px' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre" style={{ marginBottom: '15px' }}>
              <Form.Label style={{ color: 'white' }}>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={{ backgroundColor: 'white', color: '#595656' }}
              />
            </Form.Group>

            <Form.Group controlId="email" style={{ marginBottom: '15px' }}>
              <Form.Label style={{ color: 'white' }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: 'white', color: '#595656' }}
              />
            </Form.Group>

            <Form.Group controlId="telefono" style={{ marginBottom: '15px' }}>
              <Form.Label style={{ color: 'white' }}>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                style={{ backgroundColor: 'white', color: '#595656' }}
              />
            </Form.Group>

            <Form.Group controlId="mensaje" style={{ marginBottom: '15px' }}>
              <Form.Label style={{ color: 'white' }}>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                style={{ backgroundColor: 'white', color: '#595656' }}
              />
            </Form.Group>

            {/* Botón Enviar con estilos responsivos */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: '#595656',
                  border: 'none',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  width: '100%',
                  maxWidth: '200px',
                  height: '50px',
                  borderRadius: '0',
                }}
              >
                Enviar
              </Button>
            </div>
          </Form>
        </Container>
        <br />
      </div>
    </div>
  );
};

export default Contactanos;





