"use strict";
//importa el modulo de express
import express from 'express';
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';
import postulacionRoutes from './postulacion.routes.js';
import patenteRoutes from './patente.routes.js'
import authenticationMiddleware from '../middlewares/authentication.middleware.js';
import apelacionRoutes from './apelacion.routes.js';
import evaluadorRoutes from './evaluador.routes.js';
import respuestaRoutes from './respuesta.routes.js';
import pagareRoutes from './pagare.routes.js';
import resApelacionRoutes from './resApelacion.routes.js';


//Instancia del enrutador
const router = express();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);

// Define las rutas para la autenticacion /api/auth
router.use("/auth", authRoutes);

//Define la ruta para la postulacion /api/postulacion
router.use('/postulacion', authenticationMiddleware, postulacionRoutes);

//Define la ruta para la patente /api/patente
router.use('/patente', authenticationMiddleware, patenteRoutes);

router.use('/pagare', pagareRoutes)

//Define la ruta para la apelacion /api/apelacion
router.use('/apelacion', authenticationMiddleware, apelacionRoutes);

//Define la ruta para la resApleacion /api/resApelacion
router.use('/resApelacion', authenticationMiddleware, resApelacionRoutes);

//Define la ruta para el resultado /api/evaluador
router.use('/evaluador', evaluadorRoutes);

//Define la ruta para el resultado /api/respuesta
router.use('/respuesta', respuestaRoutes);



export default router;