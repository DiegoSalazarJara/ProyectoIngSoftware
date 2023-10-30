import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import { createForms, deleteForm, getForms, getArchives, updateForm } from '../controllers/postulacion.controller.js';
import authenticationMiddleware from '../middlewares/authentication.middleware.js';
import authorizationMiddleware from "../middlewares/authorization.middleware.js";

const router = express.Router();
const jsonParser = bodyParser.json({ limit: '50mb' });

// Configuración del almacenamiento de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/upload/'); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.use(authenticationMiddleware);

router.post(
    '/',jsonParser,upload.fields([
      { name: 'certificadoResidencia', maxCount: 1 },
      { name: 'certificadoConstitucion', maxCount: 1 },
      { name: 'fotocopiaCarnet', maxCount: 1 },
      { name: 'certificadoArriendo', maxCount: 1 }
    ]), authorizationMiddleware.isPostulante, createForms);

router.put(
    '/:id',jsonParser,upload.fields([
      { name: 'certificadoResidencia', maxCount: 1 },
      { name: 'certificadoConstitucion', maxCount: 1 },
      { name: 'fotocopiaCarnet', maxCount: 1 },
      { name: 'certificadoArriendo', maxCount: 1 }
    ]), authorizationMiddleware.isPostulante, updateForm);
    
router.get('/:rutpostulante', authorizationMiddleware.isPostulante, getForms);
router.get('/src/upload/:filename', authorizationMiddleware.isPostulante, getArchives)
router.delete('/:id', authorizationMiddleware.isPostulante, deleteForm);


export default router;