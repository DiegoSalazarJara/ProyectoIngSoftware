import { useState , useEffect } from 'react';
import { getResApelacion , deleteResApelacion } from '../services/resapelacion.service.js';
import { showDeleteResApelacion } from '../helpers/swaHelper.js';


export default function ResApelacion() {
    const [resapelacion, setResApelacion] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        const value = event.target.q.value;
        setSearchValue(value);
};

useEffect(() => {
    if (searchValue) {
        getResApelacion(searchValue)
            .then((data) => setResApelacion(data))
            .catch((error) => console.error("Error fetching data: ", error));
        }
    }, [searchValue]);

    const handleDelete = async (id) => {
        try {
            await deleteResApelacion(id);
            await showDeleteResApelacion();
        } catch (error) {
            console.error("Error deleting respuesta:", error);
        }
    };

return (
    <>
        {/*Search*/}
        <div className="flex flex-1 items-center justify-center p-6">
            <div className="w-full max-w-lg">
            <h2 className="text-xl font-bold">Ingrese ID de la respuesta de apelación:</h2>
                <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSearch}>
                    <input
                    id="q"
                    name="q"
                    className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="ID de la respuesta..."
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
            {Array.isArray(resapelacion) && resapelacion.map((resapelacion, index) => (
                <div key={index} className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg mx-auto my-8">
                <div className="px-4 py-4 mx-auto text-center">
                <h2 className="text-xl font-bold">Evaluación de Apelación</h2>
                </div>
                <div className="px-6 py-4 space-y-4">
                <div className="space-y-2">
                <p><strong>ID de Apelación: </strong> {resapelacion.apelacion}</p>
                </div>
                <div className="space-y-2">
                <p><strong>ID de Evaluador: </strong> {resapelacion.evaluador}</p>
                </div>
                <div className="space-y-2">
                <p><strong>Estado de Evaluación: </strong> {resapelacion.evaluar}</p>
                </div>
                <div className="space-y-2">
                <p><strong>Mensaje: </strong> {resapelacion.mensaje}</p>
                </div>
                </div>
                <div className="px-6 py-4 flex justify-center">
                 <button
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-blue-600"
                    onClick={() => handleDelete(resapelacion._id)} 
                     >
                        Eliminar Evaluación
                        </button>
                    </div>
                </div>
            ))}
        
    </>
);
}