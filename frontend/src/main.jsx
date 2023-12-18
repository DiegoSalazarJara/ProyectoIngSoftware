import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import Formulario from './routes/formPostulacion.jsx';
import Patente from './routes/Patente.jsx';
import EmitirPagare from './routes/EmitirPagare.jsx';
import CrearEvaluador from './routes/CrearEvaluador.jsx';
import ListPagar from './routes/listpagare.jsx';
import FormularioPostulante from './routes/Postulacion.jsx';
import CrearPatente from './routes/CrearPatente.jsx';
import Patentes from './routes/Patentes.jsx';
import UpdateFormpostulante from './routes/updateForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/postulacion',
        element: <Formulario/>,
      },
      {
        path: '/patente',
        element: <Patente/>,
      },
      {
        path: '/pagare',
        element: <EmitirPagare/>,
      },
      {
        path: '/CrearEvaluador',
        element: <CrearEvaluador/>,
      },
      {
        path: '/listPagare',
        element: <ListPagar/>,
      },
      {
        path: '/mipostulacion',
        element: <FormularioPostulante/>,
      },
      {
        path: '/crearpatente',
        element: <CrearPatente/>,
      },
      {
        path: '/patentes',
        element: <Patentes/>,
      },
      {
        path: '/updateForm',
        element: <UpdateFormpostulante/>,
      },
    ],
  },
  {
    path: '/auth',
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


