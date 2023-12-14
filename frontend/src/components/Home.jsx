import 'tailwindcss/tailwind.css';
  
  export default function HomePage() {


    const callouts = [
        {
          id: 'image-postular',
          name: 'Postular',
          description: 'texto para Postular',
          imageSrc: './src/images/Postular.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'postulacion',
        },
        {
          id: 'image-postulaciones',
          name: 'Mis postulaciones',
          description: 'texto para mis postulaciones',
          imageSrc: './src/images/Mis formularios.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          id: 'image-patentes',
          name: 'Mis patentes',
          description: 'texto para mis patentes',
          imageSrc: './src/assets/patente.svg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: 'patente',
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
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
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