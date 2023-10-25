import express from "express";
import {getPatente, postPatente} from '../controllers/patente.controller.js'
import { getPatenteId } from "../controllers/patentes.controller.js";
import authorizationMiddleware from "../middlewares/authorization.middleware.js";
import authenticationMiddleware from '../middlewares/authentication.middleware.js';

const router = express.Router();

router.use(authenticationMiddleware);

router.get('/', authorizationMiddleware.isAdmin, getPatente);
router.post('/:postulacionId',authorizationMiddleware.isAdmin, postPatente);
router.get('/:numPatente', authorizationMiddleware.isPostulante, getPatenteId);

export default router;