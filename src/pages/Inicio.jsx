import React from 'react';
import img1 from '../assets/img/Inicio1.JPG';
import img2 from '../assets/img/Inicio2.JPG';
import img3 from '../assets/img/Inicio3.JPG';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>NRc</h1>
      <h2>Wedding Dresses</h2>

      <div className="container">
        <img id="1" src={img1} alt="Vestido 1" />
        <img id="2" src={img2} alt="Vestido 2" />
        <img id="3" src={img3} alt="Vestido 3" />
      </div>
    </div>
  );
};

export default Inicio;
