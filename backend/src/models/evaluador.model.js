import mongoose from 'mongoose';
import { Schema, model } from "mongoose";

const evaluadorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rutEvaluador: {
    type: String,
    required: true,
  },
  especialidad: {
    type: String,
    required: true,
  },
  correoElectronico: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
  },
  postulacionAsignada: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Postulacion',
  },
  pagaresEmitidos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pagare', 
    },],
}, {
  timestamps: true,
});

export default model('Evaluador', evaluadorSchema);
