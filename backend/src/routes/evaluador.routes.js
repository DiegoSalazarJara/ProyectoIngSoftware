import express from "express";
import { listEvaluadores, getEvaluadorById, createEvaluador, updateEvaluador, deleteEvaluador } from "../controllers/evaluador.controller.js";
import authenticationMiddleware from '../middlewares/authentication.middleware.js';
import authorizationMiddleware from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.use(authenticationMiddleware);


router.post('/', authorizationMiddleware.isAdmin, createEvaluador);

// Obtener todos los pagarés
router.get('/', authorizationMiddleware.isAdmin, listEvaluadores);

// Obtener un pagaré por su ID
router.get('/:id', authorizationMiddleware.isAdmin, getEvaluadorById);

router.put('/:id', authorizationMiddleware.isAdmin, updateEvaluador);

// Eliminar un pagaré por su ID
router.delete('/:id', authorizationMiddleware.isAdmin, deleteEvaluador);

export default router;