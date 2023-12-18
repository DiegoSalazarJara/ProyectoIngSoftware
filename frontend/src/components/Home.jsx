import 'tailwindcss/tailwind.css';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
  export default function HomePage() {

    const { user } = useAuth();
    const [navigation, setNavigation] = useState(null);
    
    useEffect(() => {
      if(user&&user.roles && user.roles.length > 0){
        switch(user?.roles[0].name){
          case 'admin': 
          setNavigation(calloutsAdmin);
          break;
  
          case'evaluador': 
          setNavigation(calloutsEvaluador);
          break;
  
          case'postulante': 
          setNavigation(calloutsPostulante);
          break;
          default:
            setNavigation(null);
        }
      }else{
        setNavigation(null);
      }
    }, [user, user?.roles]);

    const calloutsPostulante = [
        {
          id: 'image-postular',
          name: 'Postular',
          description: 'Inicia el proceso de postulación a una patente a través de nuestro formulario oficial.',
          imageSrc: '../../images/Postular.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'postulacion',
        },
        {
          id: 'image-postulaciones',
          name: 'Mis postulaciones',
          description: 'Accede para revisar en detalle tus postulaciones anteriores y su estado actual.',
          imageSrc: '../../images/Mis formularios.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: 'mipostulacion',
        },
        {
          id: 'image-patentes',
          name: 'Mis patentes',
          description: 'Explora la información detallada de tus patentes registradas y sus estados actuales.',
          imageSrc: '../../assets/patente.svg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: 'patente',
        },
      ]
    
    const calloutsEvaluador = [
        {
          id: 'image-pagare',
          name: 'Emitir pagare',
          description: 'Apartado que te permite emitir un pagare',
          imageSrc: '../../images/pagare.png',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'pagare',
        },
        {
          id: 'image-pagares',
          name: 'Mostrar pagares',
          description: 'Apartado que te permite mostrar los pagares',
          imageSrc: '../../images/pagares.png',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'listarpagares',
        },
        {
          id: 'image-postular',
          name: 'Mostrar postulaciones evaluadas',
          description: 'Apartado que te permite mostrar las postulaciones evaluadas',
          imageSrc: '../../images/Postular.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'respuestas',
        },
      ]
    
      const calloutsAdmin = [
        {
          id: 'image-create-evaluador',
          name: 'Crear evaluador',
          description: 'Apartado que te permite crear un evaluador mediante un formulario.',
          imageSrc: '../../images/evaluador.png',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'CrearEvaluador',
        },
        {
          id: 'image-list-evaluadores',
          name: 'Mostrar evaluadores',
          description: 'Apartado que te permite ver a los evaluadores',
          imageSrc: '../../images/evaluadores.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'VerEvaluadores',
        },
        {
          id: 'image-postular',
          name: 'Crear Patente',
          description: 'Apartado que te permite crear una patente',
          imageSrc: '../../images/Postular.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'crearpatente',
        },
      ]



    return (
      <div >
        <header className="bg-white shadow">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Pagina principal</h1>
          </div>
      </header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {navigation && navigation.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-80 w-full object-cover object-center"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a 
                    id={callout.id}
                    href={callout.href}
                    >
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    )
  }