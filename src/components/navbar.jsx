// src/components/MyNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../assets/modular_white.jpeg';

const navbar = () => {
  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      fixed="top" 
      style={{ backgroundColor: 'white', boxShadow: 'none' }} // Sin sombra
    >
        <Navbar.Brand href="#home" style={{ backgroundColor: 'white'}}> {/* Fondo transparente para el logo */}
          <img
            src={logo} // Ruta de la imagen
            alt="Modular Outlet Logo"
            style={{ height: '100px', marginRight: '10px' }} // Ajusta el tamaño y el margen según sea necesario
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#banner">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#clients">Nuestros Clientes</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Us">Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#faq">Preguntas Frecuentes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">Contáctanos!</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;


