import 'tailwindcss/tailwind.css';
import { useForm } from "react-hook-form";
import axios from '../services/root.service.js';

export default function FormResApelacion() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('resApelacion', data)
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
                        <label htmlFor="apelacionId" className="block text-sm font-medium leading-6 text-gray-900">
                            ID Apelación
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                {...register("apelacionId", {
                                    pattern: {
                                        value: /^[0-9a-fA-F]{24}$/,
                                        message: "ID inválida, verifique si la ID introducida es correcta."
                                    }
                                })}
                                id="postulacionId"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Ej: 60f1b5b3e6b3a3b3e4a3b3e6"
                            />
                            {errors.apelacionId && (
                                <span className="text-red-500">{errors.postulacionId.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="evaluadorId" className="block text-sm font-medium leading-6 text-gray-900">
                            ID Evaluador
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                {...register("evaluadorId", {
                                    pattern: {
                                        value: /^[0-9a-fA-F]{24}$/,
                                        message: "ID inválida, verifique si la ID introducida es correcta"
                                    }
                                })}
                                id="evaluadorId"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Ej: 60f1b5b3e6b3a3b3e4a3b3e6"
                            />
                            {errors.evaluadorId && (
                                <span className="text-red-500">{errors.evaluadorId.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="evaluar" className="block text-sm font-medium leading-6 text-gray-900">
                            Evaluar
                        </label>
                        <div className="mt-2">
                            <select
                                {...register("evaluar", {
                                    required: "Seleccione una opción válida."
                                })}
                                id="evaluar"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value="">Seleccione...</option>
                                <option value="aprobado">Aprobado</option>
                                <option value="rechazado">Rechazado</option>
                            </select>
                            {errors.evaluar && (
                                <span className="text-red-500">{errors.evaluar.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="mensaje" className="block text-sm font-medium leading-6 text-gray-900">
                            Mensaje
                        </label>
                             <div className="mt-2">
                                    <textarea
                                        {...register("mensaje", {
                                        required: "El mensaje es obligatorio.",
                                        minLength: {
                                        value: 1,
                                        message: "El mensaje debe tener al menos una palabra."
                                     },
                                        maxLength: {
                                        value: 2500,
                                        message: "El mensaje no puede exceder 500 palabras."
                                        }
                                        })}
                                        id="mensaje"
                                        rows="3"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Ej: Según el reglamento..."
                                    ></textarea>
                                    {errors.mensaje && (
                                 <span className="text-red-500">{errors.mensaje.message}</span>
                                )}
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