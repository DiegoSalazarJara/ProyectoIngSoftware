import React, { useEffect, useState } from 'react';
import axios from '../services/root.service.js';

const MostrarApelaciones = () => {
  const [apelaciones, setApelaciones] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`/apelacion?id=${searchQuery}`)
      .then((response) => {
        setApelaciones(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las apelaciones filtradas:', error);
      });
  };

  useEffect(() => {
    axios.get('/apelacion')
      .then((response) => {
        setApelaciones(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las apelaciones:', error);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSearch}>
            <input
              id="q"
              name="q"
              className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="ID de la apelación"
              type="search"
              autoFocus=""
              defaultValue=""
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {apelaciones.map((apelacion, index) => (
          <div key={index} className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white p-8 rounded-lg shadow-md">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Apelación</h2>
                <p>ID: {apelacion._id}</p>
                <p>Nombre: {apelacion.nombre}</p>
                <p>Rut: {apelacion.rutpostulante}</p>
                <p>Rut de empresa: {apelacion.rutempresa}</p>
                <p>Email: {apelacion.email}</p>
                <p>Nombre de empresa: {apelacion.nombreEmpresa}</p>
                <p>Dirección: {apelacion.direccion}</p>
                <p>Apelación: {apelacion.apelacion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostrarApelaciones;