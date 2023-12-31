import { Router } from "express";
import { crearApelacion , getApelacion , deleteApelacion , updateApelacion, getApelaciones} from "../controllers/apelacion.controller.js";
import authenticationMiddleware from '../middlewares/authentication.middleware.js';
import authorizationMiddleware from "../middlewares/authorization.middleware.js";

const router = Router();
router.use(authenticationMiddleware);

router.post("/", authorizationMiddleware.isPostulante, crearApelacion);
router.get("/:rutpostulante", authorizationMiddleware.isPostulante,getApelacion);
router.delete("/:id", authorizationMiddleware.isPostulante, deleteApelacion);
router.put("/:rutpostulante", authorizationMiddleware.isPostulante, updateApelacion);
router.get("/", authorizationMiddleware.isEvaluador, getApelaciones);

export default router;