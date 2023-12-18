import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import { listPagare, deletePagare, getPagareById } from '../services/pagare.service.js';
import { format } from 'date-fns';
import { showDeleteForm, showExportForm } from '../helpers/swaHelper.js'; 
import jsPDF from 'jspdf';


export default function Pagare() {
  const [pagare, setPagare] = useState([]);
  const [searchValue, setSearchValue] = useState(""); 
  const [error, setError] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.q.value;
  
    if (!value.trim()) {
      setError("Se requiere el ID del pagaré");
    } else {
      setSearchValue(value);
      setError("");
    }
  };
  

  useEffect(() => {
    if (searchValue) {
        listPagare(searchValue)
            .then((data) => setPagare(data))
            .catch((error) => console.error("Error fetching data:", error));
    }
  }, [searchValue]);

  const handleDelete = async (id) => {
    try {
      await deletePagare(id);
      console.log('Eliminación exitosa - Status 200');
          showDeleteForm();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
    } catch (error) {
      console.error("Error deleting pagare:", error);
    }
  };

  const handleExportPDF = async (pagares) => { 
    try {
      console.log(pagares);
      const pagareDetails = await getPagareById(pagares);
      console.log('Eliminación exitosa - Status 200');
          showExportForm();
      console.log(pagareDetails);
      
      const doc = new jsPDF();
       
   
  
   doc.setTextColor(0, 0, 255);
   doc.setFontSize(18);
   const title = 'DOCUMENTO PAGARÉ';
   const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
   const titleX = (doc.internal.pageSize.width - titleWidth) / 2;
   doc.text(title, titleX, 20);


   doc.setTextColor(0, 0, 0);
   doc.setFontSize(14);
   const subtitle = 'Datos del Pagaré';
   const subtitleWidth = doc.getStringUnitWidth(subtitle) * doc.internal.getFontSize() / doc.internal.scaleFactor;
   const subtitleX = (doc.internal.pageSize.width - subtitleWidth) / 2;
   doc.text(subtitle, subtitleX, 30);

  
   const rectWidth = 180;
   const rectHeight = 100;
   const rectX = (doc.internal.pageSize.width - rectWidth) / 2;
   const rectY = 40;
   doc.setDrawColor(0);
   doc.setLineWidth(0.5);
   doc.rect(rectX, rectY, rectWidth, rectHeight);

  
   doc.setTextColor(0, 0, 0);
   doc.setFontSize(12);

   const textOptions = { align: 'center' };
   doc.text('Rut del Postulante: ' + pagareDetails.rutpostulante, rectX + rectWidth / 2, rectY + 30, textOptions);
   doc.text('Id Evaluador Asignado: ' + pagareDetails.evaluadorAsignado, rectX + rectWidth / 2, rectY + 40, textOptions);
   doc.text('Tipo Patente: ' + pagareDetails.tipoPatente, rectX + rectWidth / 2, rectY + 50, textOptions);
   doc.text('Monto: ' + pagareDetails.patente.valor, rectX + rectWidth / 2, rectY + 60, textOptions);
   doc.text('Estado de Pago: ' + pagareDetails.estadoPago, rectX + rectWidth / 2, rectY + 70, textOptions);

   const formattedFechaCreacion = format(new Date(pagareDetails.fechaCreacion), 'dd/MM/yyyy');
    doc.text('Fecha de Emisión: ' + formattedFechaCreacion, rectX + rectWidth / 2, rectY + 80, textOptions);

    
      doc.save('pagare.pdf');

    
    } catch (error) {
      console.error('Error al exportar PDF:', error);
    }
  };

  return (
    <>
        {/* Search */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSearch}>
            <input
              id="q"
              name="q"
              className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="Id del pagaré"
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
          {error && (
            <div className="text-red-500 mt-2">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
      
        {Array.isArray(pagare) && pagare.map((pagares, index) => (
                 <div key={index} className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg mx-auto my-8">
                <div className="px-4 py-4 mx-auto text-center">
  <h2 className="text-xl font-bold">Pagare</h2>
</div>

                <div className="px-6 py-4 space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="paymentStatus">
                    Rut del Postulante
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    id="paymentStatus"
                    placeholder={pagares.rutpostulante}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="applicantId">
                    Id Evaluador Asignado
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    id="applicantId"
                    placeholder={pagares.evaluadorAsignado}
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
                    placeholder={pagares.tipoPatente}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="patentType">
                    Monto
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    disabled
                    id="patentType"
                    placeholder={pagares.monto || (pagares.patente && pagares.patente.valor)}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="amount">
                    Estado del Pago
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    id="amount"
                    disabled
                    placeholder={pagares.estadoPago}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="issuanceDate">
                    Fecha de Emisión
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    id="issuanceDate"
                    disabled
                    placeholder={format(new Date(pagares.fechaCreacion), 'dd/MM/yyyy')}
                    />
                </div>
                </div>
                <div className="px-6 py-4 flex justify-center">
                <button
              className="mr-5 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={ () => handleExportPDF (pagares._id) }
            >
              Exportar PDF
            </button>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-blue-600"
              onClick={() => handleDelete(pagares._id)} 
            >
              Eliminar Pagaré
            </button>
          </div>
        </div>
      ))}
    </>
  );
}