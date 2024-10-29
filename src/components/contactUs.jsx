import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';

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
    <div id="contact">
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
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="mensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
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
  );
};

export default Contactanos;
;
