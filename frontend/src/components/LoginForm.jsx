import 'tailwindcss/tailwind.css';
import { login } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

 function LoginForm() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then(() => {
      navigate('/');
    });
  };

  return (
    <>
    
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-xl p-9 w-full sm:max-w-md">
       
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Inicio sesión
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    name="email"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-negro">
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "La contraseña es requerida",
                      }
                      })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
                  
                </div>
              </div>

              <div>
                <button
                  id='form-button'
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-azul py-2 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
                >
                  Ingresar
                </button>
              </div>
            </form>
            </div>
            </div>
        </div>
      
    </>
  )
}

export default LoginForm;


