//importa el modulo 'mongoose' para crear el modelo
import {Schema, model} from 'mongoose';

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
    email: {
        type: String,
        required: true,
        unique: true
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
        enum: ['alcohol', 'comercial'],
        set: (value) => value.toLowerCase(),
        validate: {
          validator: function (value) {
            if (value === 'alcohol') {
              return value.length === 7;
              
            } else if (value === 'comercial') {
              return value.length === 9;
            }
            return false;
          },
          message: 'La longitud del campo tipoPatente no es válida.'
        }
      },
    certificadoResidencia: {
        type: String,
        required: true,
        validate: {
          validator: function (value) {
            return value.endsWith('.pdf');
          },
          message: 'El certificado de constitucion debe ser un archivo PDF'
      }
    },
    certificadoConstitucion: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
              return value.endsWith('.pdf');
            },
            message: 'El certificado de constitucion debe ser un archivo PDF'
        }
    },
    fotocopiaCarnet: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
              return value.endsWith('.png');
            },
            message: 'La imagen debe ser un archivo .png'
        }
    },
    certificadoArriendo: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
              return value.endsWith('.pdf');
            },
            message: 'El certificado de arriendo debe ser un archivo PDF'
        }
    },
    deleted: {
      type: Boolean,
      default: false
    }
},
    {
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => new Date(Date.now() - 14400000) // GMT/UTC -4
  }
});

export default model('Postulacion', postulacionSchema);
