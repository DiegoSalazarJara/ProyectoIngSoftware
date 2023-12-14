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