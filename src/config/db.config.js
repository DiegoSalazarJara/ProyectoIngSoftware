// Importa el modulo 'mongoose' para crear la conexion a la base de datos
import mongoose from 'mongoose';

// Agregamos la configuracion de las variables de entorno
import { DB_URL } from './env.config.js';
import {handleError} from '../utils/errorHandler.js';

// Opciones de configuracion para la conexion a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/**
 * @name setupDB
 * @description Funcion que crea la conexion a la base de datos
 * @returns {Promise<void>}
 * @throws {Error}
 */
export async function setupDB() {
  try {
    await mongoose.connect(DB_URL, options);
    console.log('=> Conectado a la base de datos');
  } catch (err) {
    handleError('/db.config.js -> setupDB');
  }
}
