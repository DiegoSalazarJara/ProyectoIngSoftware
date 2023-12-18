import 'tailwindcss/tailwind.css';
import { useForm } from "react-hook-form";
import axios from '../services/root.service.js';

export default function FormApelacion() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('apelacion', data)
            .then((response) => {
                console.log(response.data);
                reset(); 
            })
            .catch((error) => {
                console.error('Error al enviar los datos:', error);
            });
    };

    return (
        <div>
            <div className="mt-10">
            <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
                 <div className="col-span-full">
                        <label htmlFor="respuestaId" className="block text-sm font-medium leading-6 text-gray-900">
                            ID Respuesta
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                {...register("respuestaId", {
                                    pattern: {
                                        value: /^[0-9a-fA-F]{24}$/,
                                        required: "Este campo es requerido",
                                        message: "ID inválida, verifique si la ID introducida es correcta."
                                    }
                                })}
                                id="respuestaId"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.postulacionId && (
                                <span className="text-red-500">{errors.postulacionId.message}</span>
                            )}
                        </div>
                    </div>
                <div className="col-span-full">
                    <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre</label>
                        <div className="mt-2">
                    <input
                        type="text"
                        {...register("nombre", {
                            required: "Este campo es requerido"
                        })}
                        id="nombre"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="rutpostulante" className="block text-sm font-medium leading-6 text-gray-900">
                        RUT Postulante</label>
                        <div className="mt-2">
                    <input
                        type="text"
                        {...register("rutpostulante", {
                            required: "Este campo es requerido"
                        })}
                        id="rutpostulante"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Ingrese rut sin puntos y con guión"
                    />
                    {errors.rutpostulante && <span className="text-red-500">{errors.rutpostulante.message}</span>}
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email</label>
                        <div className="mt-2">
                    <input
                        type="email"
                        {...register("email", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Dirección de correo electrónico inválida"
                            }
                        })}
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Ejemplo: usuario1@gmail.com"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="rutempresa" className="block text-sm font-medium leading-6 text-gray-900">
                        RUT Empresa</label>
                        <div className="mt-2">
                    <input
                        type="text"
                        {...register("rutempresa", {
                            required: "Este campo es requerido"
                        })}
                        id="rutempresa"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Ingrese rut sin puntos y con guión"
                    />
                    {errors.rutempresa && <span className="text-red-500">{errors.rutempresa.message}</span>}
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="nombreEmpresa" className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre Empresa</label>
                        <div className="mt-2">
                    <input
                        type="text"
                        {...register("nombreEmpresa", {
                            required: "Este campo es requerido"
                        })}
                        id="nombreEmpresa"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.nombreEmpresa && <span className="text-red-500">{errors.nombreEmpresa.message}</span>}
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="direccion" className="block text-sm font-medium leading-6 text-gray-900">
                        Dirección</label>
                        <div className="mt-2">
                    <input
                        type="text"
                        {...register("direccion", {
                            required: "Este campo es requerido"
                        })}
                        id="direccion"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.direccion && <span className="text-red-500">{errors.direccion.message}</span>}
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="apelacion" className="block text-sm font-medium leading-6 text-gray-900">
                        Apelación</label>
                        <div className="mt-2">
                    <textarea
                        {...register("apelacion", {
                            required: "Este campo es requerido"
                        })}
                        id="apelacion"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.apelacion && <span className="text-red-500">{errors.apelacion.message}</span>}
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