import express, {json} from 'express';
import { setupDB } from './config/db.config.js';
import postulacionRoutes from './routes/postulacion.routes.js';

const app = express();
const port = 5000;

//middleware
app.use(json());

//ruta postulacion
app.use("/api", postulacionRoutes);


app.listen(port, () => {
    console.log(`API en la url http://localhost:${port}`);
    setupDB();
  });