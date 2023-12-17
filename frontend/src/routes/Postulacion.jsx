import MiPostulacion from '../components/MiPostulacion.jsx'
export default function FormularioPostulante() {
  
  return (
    <>
     <div>
    <header className="bg-white shadow">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mi postulación</h1>
          </div>
      </header>
    </div>
    <MiPostulacion/>
    </>
  );
}