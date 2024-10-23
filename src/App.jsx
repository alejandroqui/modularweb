// src/App.jsx
import React from 'react';
import MyNavbar from './components/navbar';
import Banner from './components/banner';
import Products from './components/products';
import Clients from './components/clients';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Banner />
      <Products />
      <Clients />
    </div>
  );
};

export default App;
