import 'tailwindcss/tailwind.css';
import { getsPatente } from '../services/patente.service';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { deletePatente } from '../services/patente.service';
import {showDeleteForm} from '../helpers/swaHelper.js'
export default function ListarPatentes() {
  const [patentes, setPatentes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getsPatente();
      setPatentes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  function TrashIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }

  const handleDeleted = async (patenteToDelete) => {
    const response = await deletePatente(patenteToDelete);
    if (response.status === 200) {
      await showDeleteForm();
      fetchData(); 
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        {Array.isArray(patentes.data) &&
          patentes.data.map((patenteItem, index) => (
            <div key={index} className="border rounded p-4">
            <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Información Patente</h2>
                <div className='flex'>
                  <button 
                  className="w-8 h-8 bg-rojo hover:bg-rojo text-white rounded-full flex items-center justify-center"
                  onClick={() => handleDeleted(patenteItem._id)}
                  >
                  <TrashIcon className="w-4 h-4" />
                    
                  </button>
                </div>
                
              </div>
             
              <div>
                <p className="text-sm">Nombre de Empresa: {patenteItem.nombreEmpresa}</p>
                <p className="text-sm">Número de la Patente: {patenteItem.numeroPatente}</p>
                <p className="text-sm">Tipo de Patente: {patenteItem.tipoPatente}</p>
                <p className="text-sm">Fecha de Emisión: {format(new Date(patenteItem.fechaEmision), 'dd/MM/yyyy')}</p>
                <p className="text-sm">Fecha de Vencimiento: {format(new Date(patenteItem.fechaVencimiento), 'dd/MM/yyyy')}</p>
                <p className="text-sm">Valor: {patenteItem.valor}</p>
                <p className="text-sm">Estado de la Patente: {patenteItem.estado}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}