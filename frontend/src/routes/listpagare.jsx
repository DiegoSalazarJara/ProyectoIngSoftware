import Pagare from "../components/listPagare.jsx";

function ListPagar() {
  return (
    <>
    <header className="bg-white shadow">
          <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mostrar Pagaré</h1>
          </div>
      </header>
    <div>
    <Pagare/>
    </div>
    </>
  );
}

export default ListPagar;