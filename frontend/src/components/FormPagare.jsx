import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useForm } from "react-hook-form";
import {createPagare} from '../services/pagare.service.js'
import { showCreateForm } from '../helpers/swaHelper.js'; 

  export default function FormPagare() {
    const [successMessage, setSuccessMessage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Datos antes de la solicitud POST:', data);

      const formPagare = new FormData();
      formPagare.append("postulanteId", data.postulanteId);
      formPagare.append("evaluadorId", data.evaluadorId);

      await createPagare(formPagare);
      console.log('Creacion de pagare exitosa - Status 200');
      showCreateForm();
      setTimeout(() => {
        window.location.reload();
      }, 3000);

      
    } catch (err) {
      console.log(err);
    } 
    
  };


  return (
    <div>
    <div className="mt-10">
    <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
        <h1 className="text-base font-semibold leading-9 text-gray-900 text-center">Formulario Emisión Pagare</h1>
        </div>

        <div className="border-b border-gray-900/10 pb-8">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="postulanteId" className="block text-sm font-medium leading-6 text-gray-900">
                Id Postulante
              </label>
              <div className="mt-2">
              <input
              type="text"
              name="postulanteId"
              id="postulanteId"
              placeholder='Id del Postulante'
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("postulanteId", {
                required: {
                  value: true,
                  message: "El id del postulante es requerido",
                }
              })}
            />
            {errors.postulanteId && (
                <span className="text-red-500 text-sm">{errors.postulanteId.message}</span>
              )}  
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="evaluadorId" className="block text-sm font-medium leading-6 text-gray-900">
                id Evaluador
              </label>
              <div className="mt-2">
              <input
              type="text" 
              name="evaluadorId"
              placeholder='Id del Evaluador'
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("evaluadorId", {
                required: {
                  value: true,
                  message: "El id del postulante es requerido",
                }
              })}
            />
            {errors.evaluadorId && (
                <span className="text-red-500 text-sm">{errors.evaluadorId.message}</span>
              )}
              </div>
            </div>
          </div>
        </div>

      </div>  
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-azul px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>
    </form>
    </div>
    {successMessage && (
        <div className="mt-4 text-green-500">{successMessage}</div>
      )}
    </div>
  )
}
