"use strict";

//importa el modulo de express
import express from 'express';
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';
import postulacionRoutes from './postulacion.routes.js';
import patenteRoutes from './patente.routes.js'
import authenticationMiddleware from '../middlewares/authentication.middleware.js';

//Instancia del enrutador
const router = express();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);

// Define las rutas para la autenticacion /api/auth
router.use("/auth", authRoutes);

//Define la ruta para la postulacion /api/postulacion
router.use('/postulacion', postulacionRoutes);

//Define la ruta para la patente /api/patente
router.use('/patente', patenteRoutes);

export default router;