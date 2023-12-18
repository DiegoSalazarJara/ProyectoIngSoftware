import 'tailwindcss/tailwind.css';
import { useForm } from "react-hook-form";
import axios from '../services/root.service.js';

export default function FormUpdateApelacion() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.put('apelacion/'+data.rutpostulante, data)
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
        <div>
    <header className="bg-white shadow">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Actualizar apelación</h1>
          </div>
      </header>
    </div>
        <div className="mt-10">
        <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold">Formulario para actualizar apelación:</h2>
            <div className="col-span-full">
                <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre</label>
                    <div className="mt-2">
                <input
                    type="text"
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
                            value: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/,
                            message: "El nombre solo puede contener letras y espacios",
                            },
                    })}
                    id="nombre"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ej: Juan Pérez"
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
                    placeholder="Ej: 12345678-9"
                />
                {errors.rutpostulante && <span className="text-red-500">{errors.rutpostulante.message}</span>}
                </div>
            </div>
            <div className="col-span-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Correo electrónico</label>
                    <div className="mt-2">
                <input
                    type="email"
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
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ej: usuario@gmail.com"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
            </div>
            <div className="col-span-full">
                <label htmlFor="rutempresa" className="block text-sm font-medium leading-6 text-gray-900">
                    Rut de empresa</label>
                    <div className="mt-2">
                <input
                    type="text"
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
                    id="rutempresa"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ej: 40114523-7"
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
                    id="nombreEmpresa"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ej: Empresa S.A."
                />
                {errors.nombreEmpresa && <span className="text-red-500">{errors.nombreEmpresa.message}</span>}
                </div>
            </div>
            <div className="col-span-full">
                <label htmlFor="direccion" className="block text-sm font-medium leading-6 text-gray-900">
                    Dirección de empresa</label>
                    <div className="mt-2">
                <input
                    type="text"
                    {...register("direccion", {
                        required: {
                            value: true,
                            message: "Direccion de empresa es requerido",
                          },
                          maxLength: {
                            value: 50,
                            message: "Direccion de empresa debe tener máximo 20 caracteres",
                          },
                          minLength: {
                            value: 5,
                            message: "Direccion de empresa debe tener mínimo 5 caracteres",
                          },
                          pattern: {
                            value: /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ,0-9# ]+$/,
                            message: "Nombre de empresa solo puede contener letras, números, espacios, tildes, ',' y '#'",
                          },
                    })}
                    id="direccion"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ej: Av. Siempreviva 123"
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
                    placeholder="Ej: Mi apelación es..."
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
