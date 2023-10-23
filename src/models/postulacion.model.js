//importa el modulo 'mongoose' para crear el modelo
import {mongoose, Schema, model} from 'mongoose';

//crea el esquema de la coleccion
const postulacionSchema = new Schema({
    
    nombre: {
        type: String,
        required: true,
    },
    rutpostulante: {
        type: String,
        required: true,
        unique: true,
    },
    nombreEmpresa: {
        type: String,
        required: true,
        unique: true,
    },
    rutempresa: {
        type: String,
        required: true,
        unique: true,
    },

    direccionEmpresa: {
        type: String,
        required: true,
    },

    tipoPatente: {
        type: String,
        required: true,
    },
    certificadoResidencia: {
        type: String,
        required: true
    },

    certificadoConstitucion: {
        type: String,
        required: true
    },

    fotocopiaCarnet: {
        type: String,
        required: true
    },

    certificadoArriendo: {
        type: String,
        required: true
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "postulante",
        },
      ],
},
    {
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => new Date(Date.now() - 14400000) // GMT/UTC -4
  }
});

export default model('Postulacion', postulacionSchema);
