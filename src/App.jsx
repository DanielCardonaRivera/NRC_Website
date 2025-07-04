import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';
import RegistroLogin from './pages/Registro-Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<RegistroLogin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
