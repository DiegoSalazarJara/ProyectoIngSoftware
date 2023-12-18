import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import { getPatente, getCancelar, getRenovar } from '../services/patente.service';
import { format } from 'date-fns';
import { showCancelar, showRenovar } from '../helpers/swaHelper';
export default function TablePatente() {
  const [patente, setPatente] = useState([]);
  const [searchValue, setSearchValue] = useState(""); 

  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.q.value;
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue) {
        getPatente(searchValue)
            .then((data) => setPatente(data))
            .catch((error) => console.error("Error fetching data:", error));
    }
}, [searchValue]);

const handleRenovar = async (estadoPatente) => {
  const response = await getRenovar(estadoPatente)
    await showRenovar(response)
};

//areglar error de que no me trae lo actualizado de la bd
const handleCancelar = async (estadoPatente) => {
  const numPatente = estadoPatente.numPatente
  const response = await getCancelar(numPatente)
    await showCancelar(response)
};
  return (
    <>
        {/*Search*/}
        <div className="flex flex-1 items-center justify-center p-6">
              <div className="w-full max-w-lg">
                <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSearch}>
                  <input
                    id="q"
                    name="q"
                    className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Número de la patente"
                    type="search"
                    autoFocus=""
                    defaultValue=""
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
      
        {Array.isArray(patente) && patente.map((patentes, index) => (
                 <div key={index} className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg mx-auto my-8">
                <div className="px-6 py-4">
                <h2 className="text-center text-lg font-semibold">Información de la Patente</h2>
                </div>
                <div className="px-6 py-4 space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="paymentStatus">
                    Nombre de la Empresa
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    id="paymentStatus"
                    placeholder={patentes.nombreEmpresa}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="applicantId">
                    Número de la Patente
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    id="applicantId"
                    placeholder={patentes.numPatente}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="evaluator">
                    Tipo de Patente
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    id="evaluator"
                    disabled
                    placeholder={patentes.tipoPatente}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="patentType">
                    Fecha de Emisión
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    id="patentType"
                    placeholder={format(new Date(patentes.fechaEmision), 'dd/MM/yyyy')}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="amount">
                    Fecha de Vencimiento
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    id="amount"
                    disabled
                    placeholder={format(new Date(patentes.fechaVencimiento), 'dd/MM/yyyy')}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="issuanceDate">
                    Valor de la Patente
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    id="issuanceDate"
                    disabled
                    placeholder={patentes.valor}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="issuanceDate">
                    Estado de la Patente
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    id="issuanceDate"
                    disabled
                    placeholder={patentes.estado}
                    />
                </div>
                </div>
                <div className="flex justify-center py-4">
                {patentes.estado === 'vencida' ? (
                  <button 
                  className="px-4 py-2 mr-2 text-white bg-rojo rounded-md hover:bg-blue-600"
                  onClick={() => handleRenovar(patentes.numPatente)}
                  >
                  Renovar
                  </button>
                ) : (
                  <button 
                  className="px-4 py-2 ml-2 text-white bg-rojo rounded-md hover:bg-blue-600"
                  onClick={() => handleCancelar(patentes)}
                  >
                  Cancelar
                  </button>
                )}
              </div>
            </div>
          ))}
      
    </>
  );
}