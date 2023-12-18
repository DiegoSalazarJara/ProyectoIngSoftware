import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import { getPostulacion, deletePostulacion} from '../services/postulacion.service.js';
import { getArchive } from '../services/Archive.service.js';
import { showDeleteForm } from '../helpers/swaHelper.js';
import { useNavigate } from 'react-router-dom';
export default function MiPostulacion() {
  const [postulacion, setPostulacion] = useState([]);
  const [searchValue, setSearchValue] = useState(""); 
  const navigate = useNavigate();
  const handleSearch = async (event) => {
      event.preventDefault();
    const value = event.target.q.value;
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue) {
      getPostulacion(`${searchValue}?_=${new Date().getTime()}`)
        .then((data) => setPostulacion(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [searchValue]);
  

  const handlePDF = async (url) => {
    try {
      const prot = 'http://';
      const uniqueTimestamp = new Date().getTime();
      const Url =  `${prot}${url}?timestamp=${uniqueTimestamp}`;
  
      const fileContent = await getArchive(Url);
  
      const blob = new Blob([fileContent], { type: 'application/pdf' });
  
      const fileUrl = URL.createObjectURL(blob);
  
      window.open(fileUrl, '_blank');
    } catch (error) {
      console.error('Error al hacer la solicitud:', error.message);
    }
  };

  const handlePNG = async (url, fileName) => {
    try {
      const prot = 'http://';
      const uniqueTimestamp = new Date().getTime();
      const Url = `${prot}${url}?timestamp=${uniqueTimestamp}`;
  
      const fileContent = await getArchive(Url);
  
      const blob = new Blob([fileContent], { type: 'image/png' });
  
      const fileUrl = URL.createObjectURL(blob);
  
      const downloadLink = document.createElement('a');
      downloadLink.href = fileUrl;
      downloadLink.download = fileName || 'imagen.png';
      document.body.appendChild(downloadLink);
  
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error al hacer la solicitud:', error.message);
    }
  };


  

  const handleDeleted = async (postulacionToDelete) => {
    const response = await deletePostulacion(postulacionToDelete)
    if(response.status === 200){
      await showDeleteForm()
    }
  };

  function PencilIcon(props) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }
  
  
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
                    placeholder="Rut del postulante"
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

        {/* Card data Form*/}
        {postulacion && postulacion.map((postulacion, index) => (
        <div key={index} className="relative bg-white shadow-lg rounded-lg max-w-3xl mx-auto mb-20">
      <header className="p-4">
        <div className="flex justify-end px-2 py-2 space-x-2">
          <button 
          className="w-8 h-8 bg-blue-500 hover:bg-blue-700 text-white rounded-full flex items-center justify-center mb-2"
          onClick={() => navigate('/updateForm')}
          >
            <PencilIcon className="w-4 h-4" />
          </button>
          <button 
          className="w-8 h-8 bg-red-500 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
          onClick={() => handleDeleted(postulacion._id)}
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
        <h1 className="text-xl font-semibold">Información de la Postulación</h1>
        
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="space-y-3">
            <div className="flex flex-col space-y-1.5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="nombre">
                Nombre Completo
              </label>
              <input
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                disabled
                id="nombre"
                placeholder={postulacion.nombre}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="rut">
                Rut Postulante
              </label>
              <input
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                disabled
                id="rut"
                placeholder={postulacion.rutpostulante}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                disabled
                id="email"
                placeholder={postulacion.email}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="nombreEmpresa">
                Nombre Empresa
              </label>
              <input
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                disabled
                id="nombreEmpresa"
                placeholder={postulacion.nombreEmpresa}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="rutEmpresa">
                RUT Empresa
              </label>
              <input
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                disabled
                id="rutEmpresa"
                placeholder={postulacion.rutempresa}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="tipoPatente">
                Tipo Patente
              </label>
              <input
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                disabled
                id="tipoPatente"
                placeholder={postulacion.tipoPatente}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 py-6 px-2">
            <button 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePDF(postulacion.certificadoResidencia)}
            >
              Certificado Residencia
            </button>
            <button 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePDF(postulacion.certificadoConstitucion)}
            >
              Certificado Constitución
            </button>
            <button 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePNG(postulacion.fotocopiaCarnet)}
            >
              Fotocopia Carnet
            </button>
            <button 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePDF(postulacion.certificadoArriendo)}
            >
              Certificado Arriendo
            </button>
          </div>
        </div>
          </div>
          ))}

    </>
  );
}