import { Router } from "express";
import { clasificarPostulacion , deleteRespuesta , getRespuestas , getRespuesta} from '../controllers/respuesta.controller.js';

const router = Router();

router.post('/', clasificarPostulacion);
router.get('/', getRespuestas);
router.delete('/:id', deleteRespuesta);
router.get('/:id', getRespuesta);

export default router;
