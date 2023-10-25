import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const respuestaSchema = new Schema({
  postulacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Postulacion',
    required: true,
  },
  evaluador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Evaluador',
    required: true,
  },
  evaluar: {
    type: String,
    enum: ['aprobado', 'rechazado'],
    required: true, 
  },
});

export default model('Respuesta', respuestaSchema);
