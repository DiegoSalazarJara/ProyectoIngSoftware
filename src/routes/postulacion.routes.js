import {Router} from "express";
import {createForms} from '../controllers/postulacion.controller.js'

const router = Router();

//crear la ruta
router.post('/postulacion', createForms)

export default router;