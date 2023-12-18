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
import FormRespuesta from './routes/formRespuesta.jsx';
import FormResApelacion from './routes/formResApelacion.jsx';
import VerRespuestas from './routes/verRepuestas.jsx';
import VerResApelaciones from './routes/verResApelaciones.jsx';
import FormApelacion from './routes/formApelacion.jsx';
import VerApelacion from './routes/verApelacion.jsx';
import VerRespuesta from './routes/verRespuesta.jsx';
import VerResApelacion from './routes/verResApelacion.jsx';
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
      {
        path: '/respuesta',
        element: <FormRespuesta/>,
      },
      {
        path: '/respuestas',
        element: <VerRespuestas/>,
      },
      {
        path: '/verrespuesta',
        element: <VerRespuesta/>,
      },
      {
        path: '/resapelaciones',
        element: <VerResApelaciones/>, 
      },
      {
        path: '/verresapelacion',  
        element: <VerResApelacion/>,
      },
      {
        path: '/resapelacion',
        element: <FormResApelacion/>,
      },
      {
        path: '/apelacion',
        element: <FormApelacion/>,
      },
      {
        path: '/apelaciones',
        element: <VerApelacion/>,
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


