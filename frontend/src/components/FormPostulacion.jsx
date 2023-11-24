import 'tailwindcss/tailwind.css';
import { PhotoIcon} from '@heroicons/react/24/solid'
export default function FormPostulante() {
  return (
    <div className="mt-10">
    <form className="mx-auto max-w-sm">
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
                  name="nombre completo"
                  id="nombre completo"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="rut" className="block text-sm font-medium leading-6 text-gray-900">
                Rut
              </label>
              <div className="mt-2">
                <input
                  id="rut"
                  name="rut"
                  type="rut"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="nombre empresa" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre de empresa
              </label>
              <div className="mt-2">
                <input
                  id="nombre empresa"
                  name="nombre empresa"
                  type="nombre empresa"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="rut empresa" className="block text-sm font-medium leading-6 text-gray-900">
                Rut de empresa
              </label>
              <div className="mt-2">
                <input
                  id="rut empresa"
                  name="rut empresa"
                  type="rut empresa"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="direccion" className="block text-sm font-medium leading-6 text-gray-900">
                Dirección de empresa
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-8">
          <div>
          <label htmlFor="patente" className="block text-sm font-medium leading-6 text-gray-900">
                Tipo de patente
              </label>
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Alcohol
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Comercial
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>  
      <div className="border-b border-gray-900/10 pb-8">
      <div className="border-b border-gray-900/10 pb-8">
      <div className="mt-3">
            <label htmlFor="certificado residencia" className="block text-sm font-medium leading-6 text-gray-900">
            Certificado de residencia
            </label>
            <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input id="file-upload" name="file-upload" type="file" className="opacity-0 absolute left-[-9999px]" /> {/* Cambio de estilos */}
            </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PDF</p>
            </div>
            </div>
            </div>
        </div>  
        <div className="border-b border-gray-900/10 pb-8">
        <div className="mt-3">
            <label htmlFor="certificado constitucion" className="block text-sm font-medium leading-6 text-gray-900">
            Certificado de constitucion
            </label>
            <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input id="file-upload" name="file-upload" type="file" className="opacity-0 absolute left-[-9999px]" /> {/* Cambio de estilos */}
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
            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input id="file-upload" name="file-upload" type="file" className="opacity-0 absolute left-[-9999px]" /> {/* Cambio de estilos */}
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
            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
            <span>Subir archivo</span>
            <input id="file-upload" name="file-upload" type="file" className="opacity-0 absolute left-[-9999px]" /> {/* Cambio de estilos */}
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