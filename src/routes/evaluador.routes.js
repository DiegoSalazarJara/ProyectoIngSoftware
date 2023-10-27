import { Router } from "express";
import { listEvaluadores, getEvaluadorById, createEvaluador, updateEvaluador, deleteEvaluador } from "../controllers/evaluador.controller.js";

const router = Router();

router.get('/evaluadores', listEvaluadores);
router.get('/evaluador/:id', getEvaluadorById);
router.post('/evaluador', createEvaluador);
router.put('/evaluador/:id', updateEvaluador);
router.delete('/evaluador/:id', deleteEvaluador);
 
export default router;

