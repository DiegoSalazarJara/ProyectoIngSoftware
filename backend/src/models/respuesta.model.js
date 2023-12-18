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
    required: true,
    enum: ['aprobado', 'rechazado'],
    set: (value) => value.toLowerCase(),
    validate: {
      validator: function (value) {
        if (value === 'aprobado'){
          return value.length === 8;
        } else if (value === 'rechazado'){
          return value.length === 9;
        }
        return false;
      },
      message: 'La longitud del parametro evaluar no es válida.'
    }
  },
  mensaje: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2500,
  },
});

export default model('Respuesta', respuestaSchema);
