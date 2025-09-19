import React from 'react';

const Servicios = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Vestidos de Novia */}
        <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">Vestidos de Novia</h2>
          <p className="text-gray-700">
            Diseños exclusivos para el día más especial de tu vida, hechos a tu medida y con detalles únicos que resaltan tu estilo.
          </p>
        </div>

        {/* Vestidos de Gala */}
        <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Vestidos de Gala</h2>
          <p className="text-gray-700">
            Elegancia y sofisticación para todo tipo de eventos sociales, con telas de alta calidad y confección impecable.
          </p>
        </div>

        {/* Vestidos de Gala Infantil */}
        <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Vestidos de Gala Infantil</h2>
          <p className="text-gray-700">
            Diseños delicados y encantadores para las más pequeñas, combinando comodidad y elegancia en cada detalle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
