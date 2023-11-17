"use strict";
// Importa el modulo 'express' para crear las rutas
import express from 'express';

/** Controlador de autenticación */
import authController from '../controllers/auth.controller.js';

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para la autenticación
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/refresh", authController.refresh);

// Exporta el enrutador
export default router;