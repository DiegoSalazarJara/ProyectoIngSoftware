import { Router } from "express";
import { clasificarApelacion , getResApelaciones , getResApelacion , deleteResApelacion } from '../controllers/resApelacion.controller.js';
import authenticationMiddleware from '../middlewares/authentication.middleware.js';
import authorizationMiddleware from "../middlewares/authorization.middleware.js";

const router = Router();
router.use(authenticationMiddleware);

router.post('/', authorizationMiddleware.isEvaluador, clasificarApelacion);
router.get('/', authorizationMiddleware.isEvaluador, getResApelaciones);
router.delete('/:id', authorizationMiddleware.isEvaluador, deleteResApelacion);
router.get('/:id', authorizationMiddleware.isEvaluador, getResApelacion);

export default router;