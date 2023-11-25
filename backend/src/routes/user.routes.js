"use strict";
// Importa el modulo 'express' para crear las rutas
import express from 'express'

/** Controlador de usuarios */
import usuarioController from '../controllers/user.controller.js'

/** Middlewares de autorización */
import authorizationMiddleware from '../middlewares/authorization.middleware.js';

/** Middleware de autenticación */
import authenticationMiddleware from '../middlewares/authentication.middleware.js'

/** Instancia del enrutador */
const router = express.Router();

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Define las rutas para los usuarios
router.get("/", usuarioController.getUsers);
router.post("/", authorizationMiddleware.isAdmin, usuarioController.createUser);
router.get("/:id", usuarioController.getUserById);
router.put(
  "/:id",
  authorizationMiddleware.isAdmin,
  usuarioController.updateUser,
);
router.delete(
  "/:id",
  authorizationMiddleware.isAdmin,
  usuarioController.deleteUser,
);

// Exporta el enrutador
export default router;