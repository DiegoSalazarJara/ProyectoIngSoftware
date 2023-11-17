"use strict";
//Importa el modulo 'path' para obtener la ruta absoluta del archivo .env
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtiene la ruta del archivo .env
const envFilePath = path.resolve(__dirname, '.env');

// Carga las variables de entorno desde el archivo .env
dotenv.config({ path: envFilePath });

//Puerto del servidor
export const PORT = process.env.PORT;

//Clave de la API de SendGrid
export const API_KEY = process.env.API_KEY;

//Host del servidor
export const HOST = process.env.HOST;

//URL de la base de datos
export const DB_URL = process.env.DB_URL;

//secreto para el token de acceso
export const ACCESS_JWT_SECRET = process.env.ACCESS_JWT_SECRET;

//secreto para el token de refresco
export const REFRESH_JWT_SECRET = process.env.REFRESH_JWT_SECRET;



