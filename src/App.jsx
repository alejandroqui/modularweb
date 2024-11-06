// src/App.jsx
import React from 'react';
import MyNavbar from './components/navbar';
import Banner from './components/banner';
import Products from './components/products';
import Clients from './components/clients';
import Us from './components/us';
import FAQ from './components/faq';
import ContactUs from './components/contactUs';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid className="p-0">
      <MyNavbar />
      <div style={{ marginTop: '100px' }}> {/* Ajuste de margen superior para móviles */}
        <Banner />
        <Products />
        <Clients />
        <Us />
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </Container>
  );
};

export default App;

