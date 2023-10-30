import express from "express";
import {getPatente, postPatente, deletePatente} from '../controllers/patente.controller.js'
import { getPatenteId, patenteCancelar, patenteRenovar } from "../controllers/patenteUser.controller.js";
import authorizationMiddleware from "../middlewares/authorization.middleware.js";
import authenticationMiddleware from '../middlewares/authentication.middleware.js';

const router = express.Router();

router.use(authenticationMiddleware);


router.get('/', authorizationMiddleware.isAdmin, getPatente);
router.post('/:postulacionId',authorizationMiddleware.isAdmin, postPatente);
router.delete('/:patenteId', authorizationMiddleware.isAdmin, deletePatente);

router.get('/:numPatente', authorizationMiddleware.isPostulante, getPatenteId);
router.post('/cancelar/:numPatente', authorizationMiddleware.isPostulante, patenteCancelar)
router.post('/renovar/:numPatente', authorizationMiddleware.isPostulante, patenteRenovar)

export default router;