import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css';
import { logout } from '../services/auth.service';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const { user } = useAuth();
  const [navigation, setNavigation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(user&&user.roles && user.roles.length > 0){
      switch(user?.roles[0].name){
        case 'admin': 
        setNavigation(navAdmin);
        break;

        case'evaluador': 
        setNavigation(navEvaluador);
        break;

        case'postulante': 
        setNavigation(navPostulante);
        break;
        default:
          setNavigation(null);
      }
    }else{
      setNavigation(null);
    }
  }, [user, user?.roles]);
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const navPostulante = [
    { name: 'Ejemplo postulante 1', href: 'postulacion', current: false },
    { name: 'Ejemplo postulante 2', href: '#', current: false },
    { name: 'Ejemplo postulante 3', href: '#', current: false },
  ]
  
  const navAdmin = [
    { name: 'Ejemplo admin 1', href: '', current: false },
    { name: 'Ejemplo admin 2', href: '#', current: false },
    { name: 'Ejemplo admin 3', href: '#', current: false },
  ]
  
  const navEvaluador = [
    { name: 'Ejemplo evaluador 1', href: '', current: false },
    { name: 'Ejemplo evaluador 2', href: '#', current: false },
    { name: 'Ejemplo evaluador 3', href: '#', current: false },
  ]





  return (
    <Disclosure as="nav" className="bg-azul">
      {({ open }) => (
        <>
          <div className="flex- justify-end me-8">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-blanco hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="flex flex-shrink-0 ">
                  
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-2">
                    {navigation && navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blanco text-black' : ' text-white hover:text-black',
                          'rounded-md px-4 py-2 text-sm font-medium '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="./src/images/foto perfil.webp"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-blanco' : '', 'block px-4 py-2 text-sm text-black')}
                          >
                            Perfil
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-blanco' : '', 'block px-4 py-2 text-sm text-black')}
                            onClick={(handleLogout)}
                          >
                            Cerrar sesión
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation && navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
  )
}