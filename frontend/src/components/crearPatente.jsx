import 'tailwindcss/tailwind.css';
import { useForm } from "react-hook-form";
import { createPatente } from '../services/patente.service.js';
import { useState } from 'react';
import { showConfirmPatente, showErrorPatente } from '../helpers/swaHelper.js';

export default function FormPostulante() {

  const [isLoading, setIsLoading] = useState(false);
  

  const {register,formState: { errors },handleSubmit,reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log('Datos antes de la solicitud POST:', data.idpostulacion);

      const formData = new FormData();
      formData.append("idpostulacion", data.idpostulacion);

      const response = await createPatente(data.idpostulacion);
      console.log(response)
      
      if (response.status === 201) {
        await showConfirmPatente();
        reset();
      } else if (response.status === 500) {
        await showErrorPatente();
      }

    } catch (err) {
      console.log(err);
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
       <header className="bg-white shadow">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Creación Patente</h1>
          </div>
      </header>
    <div className="mt-10">
    <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
        <h1 className="text-base font-semibold leading-9 text-gray-900 text-center">Formulario para crear una patente</h1>
        </div>

        <div className="border-b border-gray-900/10 pb-8">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="idpostulacion" className="block text-sm font-medium leading-6 text-gray-900">
                Id de la postulacion
              </label>
              <div className="mt-2">
              <input
              type="text"
              placeholder='Ej: Diego Alexis Salazar Jara'
              name="idpostulacion"
              id="idpostulacion"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("idpostulacion", {
                required: {
                  value: true,
                  message: "Id de la postulación es requerido",
                }
              })}
              
            />
              {errors.idpostulacion && (
                <span className="text-red-500 text-sm">{errors.idpostulacion.message}</span>
              )}
              </div>
            </div>
          </div>
        </div>

      </div>  
      <div className="mt-2 py-4 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-azul px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
      </form>
    </div>
    </div>
  )
}