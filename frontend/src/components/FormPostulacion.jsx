import 'tailwindcss/tailwind.css';
import { PhotoIcon} from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";
import { createForms } from '../services/postulacion.service.js';
import { useState } from 'react';
import { showConfirmForm, showErrorForm } from '../helpers/swaHelper.js';
export default function FormPostulante() {

  const [certificadoResidencia, setCertificadoResidencia] = useState(null);
  const [certificadoConstitucion, setCertificadoConstitucion] = useState(null);
  const [fotocopiaCarnet, setFotocopiaCarnet] = useState(null);
  const [certificadoArriendo, setCertificadoArriendo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {register,formState: { errors },handleSubmit,reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log('Datos antes de la solicitud POST:', data);

      const formData = new FormData();
      formData.append("nombre", data.nombre);
      formData.append("rutpostulante", data.rutpostulante);
      formData.append("email", data.email);
      formData.append("nombreEmpresa", data.nombreEmpresa);
      formData.append("rutempresa", data.rutempresa);
      formData.append("direccionEmpresa", data.direccionEmpresa);
      formData.append("tipoPatente", data.tipoPatente);
      formData.append("certificadoResidencia", certificadoResidencia);
      formData.append("certificadoConstitucion", certificadoConstitucion);
      formData.append("fotocopiaCarnet", fotocopiaCarnet);
      formData.append("certificadoArriendo", certificadoArriendo);

      const response = await createForms(formData);
      
      if (response.status === 201) {
        await showConfirmForm();
        reset();
        setCertificadoResidencia(null)
        setCertificadoConstitucion(null)
        setFotocopiaCarnet(null)
        setCertificadoArriendo(null)
      } else if (response.status === 500) {
        await showErrorForm();
      }

    } catch (error) {
      console.log("Error:",error)
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
       <header className="bg-white shadow">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Postulación para Patentes</h1>
          </div>
      </header>
    <div className="mt-10">
    <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
        <h1 className="text-base font-semibold leading-9 text-gray-900 text-center">Formulario de postulación</h1>
        </div>

        <div className="border-b border-gray-900/10 pb-8">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="nombre completo" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre completo
              </label>
              <div className="mt-2">
              <input
              type="text"
              placeholder='Ej: Diego Alexis Salazar Jara'
              name="nombre"
              id="nombre"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setNombre(e.target.value)}
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Nombre completo es requerido",
                },
                maxLength: {
                  value: 30,
                  message: "Nombre debe tener máximo 30 caracteres",
                },
                minLength: {
                  value: 2,
                  message: "Nombre debe tener mínimo 2 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Nombre solo puede contener letras y espacios",
                },
              })}
              
            />
              {errors.nombre && (
                <span className="text-red-500 text-sm">{errors.nombre.message}</span>
              )}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="rutpostulante" className="block text-sm font-medium leading-6 text-gray-900">
                Rut
              </label>
              <div className="mt-2">
              <input
              type="text" 
              placeholder='Ej: 21308770-3'
              name="rutpostulante"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setRutPostulante(e.target.value)}
              {...register("rutpostulante", {
                required: {
                  value: true,
                  message: "El rut del postulante es requerido",
                },
                pattern: {
                  value: /^[0-9]+-[0-9kK]{1}$/,
                  message: "Rut no válido",
                },
              })}
            />
             {errors.rutpostulante && (<span className="text-red-500 text-sm">{errors.rutpostulante.message}</span>
              )}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  placeholder='Ej: diego2023@gmail.com'
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "El email es requerido",
                    },
                    pattern: {
                        value: "^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]+$",
                        message: "Email no válido",
                      },
                    })}
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="col-span-full">
            <label htmlFor="nombreEmpresa" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre de empresa
            </label>
            <div className="mt-2">
              <input
                id="nombreEmpresa"
                placeholder='Ej: EmpresaDiego'
                name="nombreEmpresa"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNombreEmpresa(e.target.value)}
                {...register("nombreEmpresa", {
                  required: {
                    value: true,
                    message: "Nombre de empresa es requerido",
                  },
                  maxLength: {
                    value: 20,
                    message: "Nombre de empresa debe tener máximo 20 caracteres",
                  },
                  minLength: {
                    value: 2,
                    message: "Nombre de empresa debe tener mínimo 2 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Nombre de empresa solo puede contener letras y espacios",
                  },
                })}
              />
              {errors.nombreEmpresa && (
                <span className="text-red-500 text-sm">{errors.nombreEmpresa.message}</span>
              )}
            </div>
          </div>

            <div className="col-span-full">
              <label htmlFor="rutempresa" className="block text-sm font-medium leading-6 text-gray-900">
                Rut de empresa
              </label>
              <div className="mt-2">
              <input
              id="rutempresa"
              placeholder='Ej: 35448884-2'
              name="rutempresa"
              type="text" 
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setRutEmpresa(e.target.value)}
              {...register("rutempresa", {
                required: {
                  value: true,
                  message: "El rut de empresa es requerido",
                },
                pattern: {
                  value: /^[0-9]+-[0-9kK]{1}$/,
                  message: "Rut no válido",
                },
              })}
            />
              <span className="text-red-500 text-sm">{errors.rutempresa && errors.rutempresa.message}</span>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="direccionEmpresa" className="block text-sm font-medium leading-6 text-gray-900">
                Dirección de empresa
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder='Ej: Los corales'
                  name="direccionEmpresa"
                  id="direccionEmpresa"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setDireccionEmpresa(e.target.value)}
                  {...register("direccionEmpresa", {
                    required: {
                      value: true,
                      message: "Direccion de empresa es requerido",
                    },
                    maxLength: {
                      value: 20,
                      message: "Direccion de empresa debe tener máximo 20 caracteres",
                    },
                    minLength: {
                      value: 5,
                      message: "Direccion de empresa debe tener mínimo 5 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-z ]+$/,
                      message: "Direccion de empresa solo puede contener letras y espacios",
                    },
                  })}
                />
                {errors.nombreEmpresa && (
                  <span className="text-red-500 text-sm">{errors.nombreEmpresa.message}</span>
                )}
              </div>
            </div>

            <div className="col-span-full">
        <label htmlFor="tipoPatente" className="block text-sm font-medium leading-6 text-gray-900">
          Tipo de Patente
        </label>
        <div className="mt-2">
          <select
            id="tipoPatente"
            name="tipoPatente"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setTipoPatente(e.target.value)}
            {...register("tipoPatente", {
              required: "El tipo de patente es requerido",
              validate: (value) => {
                return ['alcohol', 'comercial'].includes(value);
              }
            })}
          >
            <option value="">Seleccionar</option>
            <option value="alcohol">Alcohol</option>
            <option value="comercial">Comercial</option>
          </select>
        </div>
      </div>
          </div>
        </div>

      </div>  
      <div className="border-b border-gray-900/10 pb-8">
      <div className="border-b border-gray-900/10 pb-8">
      <div className="mt-3">
      <label htmlFor="certificadoResidencia" className="block text-sm font-medium leading-6 text-gray-900">
                Certificado de residencia
              </label>
              <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="certificadoResidencia"
                      className="flex flex-col items-center justify-center relative cursor-pointer rounded-md bg-white font-semibold text-azul focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Subir archivo</span>
                      <input
                        id="certificadoResidencia"
                        name="certificadoResidencia"
                        type="file"
                        className="opacity-0 absolute left-[-9999px]"
                        onChange={(e) => setCertificadoResidencia(e.target.files[0])}
                      />
                    </label>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs leading-5 text-gray-600">
                      {certificadoResidencia ? `PDF: ${certificadoResidencia.name}` : 'PDF'}
                    </p>
                  </div>
            </div>
            </div>
            </div>
        </div>  
        <div className="border-b border-gray-900/10 pb-8">
        <div className="mt-3">
            <label htmlFor="certificadoConstitucion" className="block text-sm font-medium leading-6 text-gray-900">
            Certificado de constitucion
            </label>
            <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
            <label htmlFor="certificadoConstitucion" className="relative cursor-pointer rounded-md bg-white font-semibold text-azul focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input 
            id="certificadoConstitucion" 
            name="certificadoConstitucion" 
            type="file" 
            className="opacity-0 absolute left-[-9999px]" 
            onChange={(e) => setCertificadoConstitucion(e.target.files[0])}
            /> 
            </label>
            </div>
            <div className="mt-2">
            <p className="text-xs leading-5 text-gray-600">
              {certificadoConstitucion ? `PDF: ${certificadoConstitucion.name}` : 'PDF'}
            </p>
            </div>
            </div>
            </div>
        </div>  
        </div> 

        <div className="border-b border-gray-900/10 pb-8">
        <div className="mt-3">
            <label htmlFor="fotocopia carnet" className="block text-sm font-medium leading-6 text-gray-900">
            Fotocopia de carnet
            </label>
            <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
            <label htmlFor="fotocopiaCarnet" className="relative cursor-pointer rounded-md bg-white font-semibold text-azul focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input 
            id="fotocopiaCarnet" 
            name="fotocopiaCarnet" 
            type="file" 
            className="opacity-0 absolute left-[-9999px]" 
            onChange={(e) => setFotocopiaCarnet(e.target.files[0])}
            /> 
            </label>
            </div>
            <div className="mt-2">
            <p className="text-xs leading-5 text-gray-600">
              {fotocopiaCarnet ? `PNG: ${fotocopiaCarnet.name}` : 'PNG'}
            </p>
            </div>
            </div>
            </div>
        </div>  
        </div>

        <div className="mt-3">
            <label htmlFor="certificado arriendo" className="block text-sm font-medium leading-6 text-gray-900">
            Certificado de arriendo
            </label>
            <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
            <label htmlFor="certificadoArriendo" className="relative cursor-pointer rounded-md bg-white font-semibold text-azul focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input 
            id="certificadoArriendo" 
            name="certificadoArriendo" 
            type="file" 
            className="opacity-0 absolute left-[-9999px]" 
            onChange={(e) => setCertificadoArriendo(e.target.files[0])}
            />
            </label>
            </div>
            <div className="mt-2">
            <p className="text-xs leading-5 text-gray-600">
              {certificadoArriendo ? `PDF: ${certificadoArriendo.name}` : 'PDF'}
            </p>
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