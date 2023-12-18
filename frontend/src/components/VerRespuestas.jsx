import React, { useEffect, useState } from 'react';
import axios from '../services/root.service.js';

const MostrarRespuestas = () => {
  const [respuestas, setRespuestas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`/respuesta?id=${searchQuery}`)
      .then((response) => {
        setRespuestas(response.data); 
      })
      .catch((error) => {
        console.error('Error al obtener las respuestas filtradas:', error);
      });
  };

  useEffect(() => {
    axios.get('/respuesta')
      .then((response) => {
        setRespuestas(response.data); 
      })
      .catch((error) => {
        console.error('Error al obtener las respuestas:', error);
      });
  }, []);

  return (
    <div>
      

      <div className="max-w-4xl mx-auto p-4">
        {respuestas.map((respuesta, index) => (
          <div key={index} className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white p-8 rounded-lg shadow-md">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Postulación</h2>
                <p>ID Respuesta: {respuesta._id}</p>
                <p>ID Postulación: {respuesta.postulacion}</p>
                <p>ID Evaluador: {respuesta.evaluador}</p>
                <p>Evaluación: {respuesta.evaluar}</p>
                <p>Mensaje: {respuesta.mensaje}</p>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default MostrarRespuestas;