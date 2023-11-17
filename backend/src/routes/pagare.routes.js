import  express from 'express';
import { listPagares, getPagareById, emitirPagare, deletePagareById } from '../controllers/pagare.controller.js';
import authenticationMiddleware from '../middlewares/authentication.middleware.js';
import authorizationMiddleware from "../middlewares/authorization.middleware.js";


const router = express.Router();

router.use(authenticationMiddleware);


router.post('/', authorizationMiddleware.isEvaluador, emitirPagare);

// Obtener todos los pagarés
router.get('/', authorizationMiddleware.isEvaluador, listPagares);

// Obtener un pagaré por su ID
router.get('/:id', authorizationMiddleware.isEvaluador, getPagareById);

// Eliminar un pagaré por su ID
router.delete('/:id', authorizationMiddleware.isEvaluador, deletePagareById);

export default router;


