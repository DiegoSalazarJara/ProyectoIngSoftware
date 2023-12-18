import VerResApelaciones from '../components/VerResApelaciones.jsx'
export default function VerLasRespuestas() {
  return (
    <>
    <div>
    <header className="bg-white shadow">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Lista de apelaciones evaluadas</h1>
          </div>
      </header>
    </div>
    <VerResApelaciones/>
    </>
  );
}