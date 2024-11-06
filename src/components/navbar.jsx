// src/components/MyNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/modular_black.jpeg';

const MyNavbar = () => {
  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={{ backgroundColor: '#595656', boxShadow: 'none' }} // Sin sombra
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Modular Outlet Logo"
            style={{ 
              height: '100px', 
              width: '100px', 
              marginRight: '10px',
              borderRadius: '50%', // Hace que la imagen sea redonda
              objectFit: 'cover',
            }} 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center text-lg-left">
            <Nav.Link href="#banner" style={{ color: 'white' }}>Inicio</Nav.Link>
            <Nav.Link href="#products" style={{ color: 'white' }}>Productos</Nav.Link>
            <Nav.Link href="#clients" style={{ color: 'white' }}>Nuestros Clientes</Nav.Link>
            <Nav.Link href="#Us" style={{ color: 'white' }}>Nosotros</Nav.Link>
            <Nav.Link href="#faq" style={{ color: 'white' }}>Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white' }}>Contáctanos!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;







