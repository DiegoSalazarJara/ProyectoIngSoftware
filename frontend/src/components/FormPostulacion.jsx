import 'tailwindcss/tailwind.css';
import { PhotoIcon} from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";

export default function FormPostulante() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      rutpostulante: "",
      email: "",
      nombreEmpresa: "",
      rutempresa: "",
      direccionEmpresa: "",
      tipoPatente: "",
      certificadoResidencia: "",
      certificadoConstitucion: "",
      fotocopiaCarnet: "",
      certificadoArriendo: ""
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });


  return (
    <div className="mt-10">
    <form className="mx-auto max-w-sm" onSubmit={onSubmit}>
      <div className="space-y-4">
        <div>
        <h2 className="text-base font-semibold leading-9 text-gray-900 text-center">Postulación</h2>
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
              name="nombre"
              id="nombre"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Nombre completo es requerido",
                },
                maxLength: {
                  value: 20,
                  message: "Nombre debe tener máximo 20 caracteres",
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
              name="rutpostulante"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                name="nombreEmpresa"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              name="rutempresa"
              type="text" 
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              <span className="text-red-500 text-sm">{errors.rut && errors.rut.message}</span>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="direccionEmpresa" className="block text-sm font-medium leading-6 text-gray-900">
                Dirección de empresa
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="direccionEmpresa"
                  id="direccionEmpresa"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label htmlFor="certificadoResidencia" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input 
            id="certificadoResidencia" 
            name="certificadoResidencia" 
            type="file" 
            className="opacity-0 absolute left-[-9999px]"
            onChange={(e) => {
              setValue("certificadoResidencia", e.target.files[0].name);
            }}
            />
            </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PDF</p>
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
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label htmlFor="certificadoConstitucion" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input 
            id="certificadoConstitucion" 
            name="certificadoConstitucion" 
            type="file" 
            className="opacity-0 absolute left-[-9999px]" 
            onChange={(e) => {
              setValue("certificadoConstitucion", e.target.files[0].name);
            }}
            
            /> 
            </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PDF</p>
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
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label htmlFor="fotocopiaCarnet" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input 
            id="fotocopiaCarnet" 
            name="fotocopiaCarnet" 
            type="file" 
            className="opacity-0 absolute left-[-9999px]" 
            onChange={(e) => {
              setValue("fotocopiaCarnet", e.target.files[0].name);
            }}
            /> 
            </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG</p>
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
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label htmlFor="certificadoArriendo" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input 
            id="certificadoArriendo" 
            name="certificadoArriendo" 
            type="file" 
            className="opacity-0 absolute left-[-9999px]" 
            onChange={(e) => {
              setValue("certificadoArriendo", e.target.files[0].name);
            }}
            />
            </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PDF</p>
            </div>
            </div>
        </div> 
        </div>  


      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}