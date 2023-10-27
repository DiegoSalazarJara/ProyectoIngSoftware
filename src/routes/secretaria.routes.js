import { Router } from "express";
import {  createSecretaria, getSecretariaById, updateSecretaria, deleteSecretaria } from "../controllers/secretaria.controller.js";

const router = Router();





router.post('/secretaria', createSecretaria);
router.get('/secretaria/:id', getSecretariaById);
router.put('/secretaria/:id', updateSecretaria);
router.delete('/secretaria/:id', deleteSecretaria);
 
export default router;