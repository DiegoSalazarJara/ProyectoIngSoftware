import 'tailwindcss/tailwind.css';
import { listEvaluadores, deleteEvaluador } from '../services/evaluador.service';
import { useState, useEffect } from 'react';



function ListarEvaluadores() {
  const [evaluadores, setEvaluadores] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await listEvaluadores();
      setEvaluadores(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const showDeleteForm = () => {
    console.log('Mostrar formulario de eliminación');
  };

  const handleDelete = async (evaluadorId) => {
    try {
      await deleteEvaluador(evaluadorId);
      console.log('Eliminación exitosa - Status 200');
          showDeleteForm();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
    } catch (error) {
      console.error("Error deleting pagare:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        {Array.isArray(evaluadores) &&
          evaluadores.map((evaluadorItem, index) => (
            <div key={index} className="border rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Información Evaluador</h2>
              </div>

              <div>
                <p className="text-sm">Nombre: {evaluadorItem.nombre}</p>
                <p className="text-sm">ID del Evaluador: {evaluadorItem._id}</p>
                <p className="text-sm">Correo Electrónico: {evaluadorItem.correoElectronico}</p>
                
                {/* Agrega el botón de eliminar y asocia la función handleDelete */}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(evaluadorItem._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ListarEvaluadores;