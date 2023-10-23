//Importa el archivo env-config para cargar las variables de entorno
import {PORT, HOST} from './config/env.config.js';
//Importa el modulo 'cors' para agregar los cors
import cors from 'cors';
//Importa el modulo 'cookie-parser' para manejar las cookies
import cookieParser from 'cookie-parser'
//Enrutador principal
import indexRoutes from './routes/index.routes.js';
// Importa el módulo 'express' para crear la aplicacion web
import express from 'express';
// Importa el archivo 'configDB.js' para crear la conexión a la base de datos
import { setupDB } from './config/db.config.js';
// Importamos morgan para ver las peticiones que se hacen al servidor
import morgan from 'morgan'
//importa el handler de errores
import {handleFatalError, handleError} from './utils/errorHandler.js';
import {createRoles, createUsers} from './config/initialSetup.js';

/**
 * Inicia el servidor web
 */

async function setupServer() {
  try {
    /** Instancia de la aplicacion */
    const app = express();
    // Agrega el middleware para el manejo de datos en formato JSON
    app.use(express.json());
    // Agregamos los cors
    app.use(cors({ origin: "/" }));
    // Agregamos el middleware para el manejo de cookies
    app.use(cookieParser());
    // Agregamos morgan para ver las peticiones que se hacen al servidor
    app.use(morgan("dev"));
    // Agrega el middleware para el manejo de datos en formato URL
    app.use(express.urlencoded({ extended: true }));
    // Agrega el enrutador principal al servidor
    app.use("/api", indexRoutes);

    // Inicia el servidor en el puerto especificado
    app.listen(PORT, () => {
      console.log(`=> Servidor corriendo en ${HOST}:${PORT}/api`);
    });
  } catch (err) {
    handleError(err, "/index.js -> setupServer");
  }
}

/**
 * Inicia la API
 */
async function setupAPI() {
  try {
    // Inicia la conexión a la base de datos
    await setupDB();
    // Inicia el servidor web
    await setupServer();
    // Inicia la creación de los roles
    await createRoles();
    // Inicia la creación del usuario admin y user
    await createUsers();
  } catch (err) {
    handleFatalError(err, "/index.js -> setupAPI");
  }
}

// Inicia la API
setupAPI()
  .then(() => console.log("=> API Iniciada exitosamente"))
  .catch((err) => handleFatalError(err, "/index.js -> setupAPI"));


