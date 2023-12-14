import 'tailwindcss/tailwind.css';
import { useForm } from "react-hook-form";

export default function FormEvaluador() {

  const {
    register,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      especialidad: "",
      correoElectronico: "",
      telefono: "",
    },
  });

  return (
    <div>
      <div className="mt-10">
        <form className="mx-auto max-w-sm">
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
                      {...register("nombre")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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
                      {...register("apellido")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="especialidad" className="block text-sm font-medium leading-6 text-gray-900">
                    Especialidad
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="especialidad"
                      id="especialidad"
                      {...register("especialidad")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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
                      {...register("correoElectronico")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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
                      {...register("telefono")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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
