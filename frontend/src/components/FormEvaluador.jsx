import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useForm } from 'react-hook-form';
import { createEvaluador } from '../services/evaluador.service';
import {  showCreateFormE } from '../helpers/swaHelper.js';

export default function FormEvaluador() {
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Datos antes de la solicitud POST:', data);

      const formData = new FormData();
      formData.append('nombre', data.nombre);
      formData.append('apellido', data.apellido);
      formData.append('especialidad', data.especialidad);
      formData.append('correoElectronico', data.correoElectronico);
      formData.append('telefono', data.telefono);

      const res = await createEvaluador(formData);
      console.log('Creación de evaluador exitosa - Estado 200');
      showCreateFormE();
     
      setTimeout(() => {
        window.location.reload();
      }, 3000);

     
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="mt-10">
        <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <h1 className="text-base font-semibold leading-9 text-gray-900 text-center">Formulario Evaluador</h1>
            </div>

            <div className="border-b border-gray-900/10 pb-8">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      {...register("nombre", { required: 'Campo requerido' })}
                      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        errors.nombre ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-500">{errors.nombre.message}</p>
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="apellido" className="block text-sm font-medium leading-6 text-gray-900">
                    Apellido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="apellido"
                      id="apellido"
                      {...register("apellido", { required: 'Campo requerido' })}
                      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        errors.apellido ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.apellido && (
                      <p className="mt-1 text-sm text-red-500">{errors.apellido.message}</p>
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="especialidad" className="block text-sm font-medium leading-6 text-gray-900">
                    Especialidad
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      list="especialidades"
                      name="especialidad"
                      id="especialidad"
                      {...register("especialidad", { required: 'Campo requerido' })}
                      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        errors.especialidad ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.especialidad && (
                      <p className="mt-1 text-sm text-red-500">{errors.especialidad.message}</p>
                    )}
                    <datalist id="especialidades">
                      <option value="Patentes Alcohólicas"></option>
                      <option value="Patentes Comerciales"></option>
                    </datalist>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="correoElectronico" className="block text-sm font-medium leading-6 text-gray-900">
                    Correo Electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="correoElectronico"
                      id="correoElectronico"
                      {...register("correoElectronico", { required: 'Campo requerido' })}
                      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        errors.correoElectronico ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.correoElectronico && (
                      <p className="mt-1 text-sm text-red-500">{errors.correoElectronico.message}</p>
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                    Teléfono
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="telefono"
                      id="telefono"
                      {...register("telefono", { required: 'Campo requerido' })}
                      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        errors.telefono ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-red-500">{errors.telefono.message}</p>
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
    </div>
  );
}
