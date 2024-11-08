// src/components/MyNavbar.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/modular_black.jpeg';
import 'font-awesome/css/font-awesome.min.css';

const MyNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la expansión del menú

  const handleNavLinkClick = () => {
    setIsExpanded(false); // Colapsa el menú al hacer clic en cualquier enlace
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={{ backgroundColor: '#595656', boxShadow: 'none' }} // Sin sombra
      expanded={isExpanded} // Controla si el menú está expandido
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Modular Outlet Logo"
            style={{ 
              height: '80px', 
              width: '80px', 
              marginRight: '10px',
              borderRadius: '50%', // Hace que la imagen sea redonda
              objectFit: 'cover',
            }} 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setIsExpanded(!isExpanded)} // Alterna entre expandido y colapsado al hacer clic en el toggle
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center w-100">
            <Nav.Link href="#banner" style={{ color: 'white', marginRight: '20px' }} onClick={handleNavLinkClick}>Inicio</Nav.Link>
            <Nav.Link href="#products" style={{ color: 'white', marginRight: '20px' }} onClick={handleNavLinkClick}>Productos</Nav.Link>
            <Nav.Link href="#clients" style={{ color: 'white', marginRight: '20px' }} onClick={handleNavLinkClick}>Nuestros Clientes</Nav.Link>
            <Nav.Link href="#Us" style={{ color: 'white', marginRight: '20px' }} onClick={handleNavLinkClick}>Nosotros</Nav.Link>
            <Nav.Link href="#faq" style={{ color: 'white', marginRight: '20px' }} onClick={handleNavLinkClick}>Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white', marginRight: '20px' }} onClick={handleNavLinkClick}>Contáctanos</Nav.Link>

            {/* Enlace de Tienda Virtual con icono */}
            <Nav.Link 
              href="https://tu-tienda-virtual.com" 
              target="_blank" 
              style={{ color: 'white', display: 'flex', alignItems: 'center', marginRight: '20px' }}
              onClick={handleNavLinkClick}
            >
              Tienda Virtual
              <i className="fa fa-shopping-bag" style={{ marginLeft: '10px' }}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

















