import mongoose from 'mongoose';
import { model, Schema } from "mongoose";

const secretariaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
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
}, {
  timestamps: true,
});

export default model('Secretaria', secretariaSchema);
