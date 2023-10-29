import express from "express";
import {getPatente, postPatente, deletePatente} from '../controllers/patente.controller.js'
import { getPatenteId, patenteCancelar, patenteRenovar } from "../controllers/patenteUser.controller.js";
import authorizationMiddleware from "../middlewares/authorization.middleware.js";
import authenticationMiddleware from '../middlewares/authentication.middleware.js';

const router = express.Router();

router.use(authenticationMiddleware);

//patente admin
router.get('/', authorizationMiddleware.isAdmin, getPatente);
router.post('/:postulacionId',authorizationMiddleware.isAdmin, postPatente);
router.delete('/:patenteId', authorizationMiddleware.isAdmin, deletePatente);

//patente postulante
router.get('/:numPatente', authorizationMiddleware.isPostulante, getPatenteId);
router.get('/cancelar/:numPatente', patenteCancelar)
router.get('/renovar/:numPatente', patenteRenovar)

export default router;