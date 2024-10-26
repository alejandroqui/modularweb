// src/App.jsx
import React from 'react';
import MyNavbar from './components/navbar';
import Banner from './components/banner';
import Products from './components/products';
import Clients from './components/clients';
import Us from './components/us';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Banner />
      <Products />
      <Clients />
      <Us />
    </div>
  );
};

export default App;
