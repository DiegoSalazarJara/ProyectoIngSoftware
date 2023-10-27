import { Router } from "express";
import { clasificarPostulacion , deleteRespuesta , getRespuestas , getRespuesta} from '../controllers/respuesta.controller.js';
import authenticationMiddleware from '../middlewares/authentication.middleware.js';
import authorizationMiddleware from "../middlewares/authorization.middleware.js";

const router = Router();
router.use(authenticationMiddleware);

router.post('/', authorizationMiddleware.isEvaluador, clasificarPostulacion);
router.get('/', authorizationMiddleware.isEvaluador, getRespuestas);
router.delete('/:id', authorizationMiddleware.isEvaluador, deleteRespuesta);
router.get('/:id', authorizationMiddleware.isEvaluador, getRespuesta);

export default router;
