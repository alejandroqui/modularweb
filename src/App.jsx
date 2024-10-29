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

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Banner />
      <Products />
      <Clients />
      <Us />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
