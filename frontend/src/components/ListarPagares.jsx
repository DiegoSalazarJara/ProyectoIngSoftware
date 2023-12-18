import 'tailwindcss/tailwind.css';
import { listPagares } from '../services/pagare.service';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';



export default function ListarPagares() {
  const [pagare, setPagares] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await listPagares();
      setPagares(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const copyToClipboard = (text, index) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setCopiedIndex(index);

    // Limpiar el mensaje después de unos segundos
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <>
    <header className="bg-white shadow">
            <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Pagarés Emitidos</h1>
            </div>
        </header>
      <div className="grid grid-cols-3 gap-4 p-4">
        {Array.isArray(pagare) &&
          pagare.map((pagareItem, index) => (
            <div key={index} className="border rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Información Pagare</h2>
              </div>

              <div>
                <p className="text-sm">
                  ID del Pagare: {pagareItem._id}
                  <button
                    className="ml-2 p-1 bg-blue-500 text-white rounded"
                    onClick={() => copyToClipboard(pagareItem._id)}
                  >
                    Copiar
                  </button>
                </p>
              <p className="text-sm">RUT Postulante: {pagareItem.rutpostulante}</p>
              <p className="text-sm">ID Evaluador: {pagareItem.evaluadorAsignado}</p>
                <p className="text-sm">Estado de Pago: {pagareItem.estadoPago}</p>
                <p className="text-sm">Tipo de Patente: {pagareItem.tipoPatente}</p>
                <p className="text-sm">Monto: {pagareItem.patente.valor}</p>
                <p className="text-sm">Fecha de Creación: {format(new Date(pagareItem.fechaCreacion), 'dd/MM/yyyy')}</p>
                
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
