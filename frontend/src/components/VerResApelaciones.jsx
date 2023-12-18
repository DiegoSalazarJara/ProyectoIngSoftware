import React, { useEffect, useState } from 'react';
import axios from '../services/root.service.js';

const MostrarResApelacion = () => {
  const [resapelacion, setRespuestas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Lógica de búsqueda
    axios.get(`/resApelacion?id=${searchQuery}`)
      .then((response) => {
        setRespuestas(response.data); // Establecer las respuestas filtradas en el estado
      })
      .catch((error) => {
        console.error('Error al obtener las respuestas filtradas:', error);
      });
  };

  useEffect(() => {
    // Lógica para obtener todas las respuestas desde el backend al cargar inicialmente
    axios.get('/resApelacion')
      .then((response) => {
        setRespuestas(response.data); // Establecer todas las respuestas en el estado
      })
      .catch((error) => {
        console.error('Error al obtener las respuestas:', error);
      });
  }, []);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4">
        {resapelacion.map((resapelacion, index) => (
          <div key={index} className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white p-8 rounded-lg shadow-md">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Apelación</h2>
                <p>ID Respuesta Apelación: {resapelacion._id}</p>
                <p>ID Apelacion: {resapelacion.apelacion}</p>
                <p>ID Evaluador: {resapelacion.evaluador}</p>
                <p>Estado: {resapelacion.evaluar}</p>
                <p>Mensaje: {resapelacion.mensaje}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostrarResApelacion;