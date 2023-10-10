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

    rutempresa: {
        type: String,
        required: true,
        unique: true,
    },

    direccion: {
        type: String,
        required: true,
    },

    patente: {
        type: String,
        required: true,
    },
},
    {
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => new Date(Date.now() - 14400000) // GMT/UTC -4
  }
});

export default model('Postulacion', postulacionSchema);
/*
•	Nombre persona (postulante) (String) -> express-validator
•	Rut persona (postulante) (String) ->rutjs
•	Rut persona jurídica (empresa) (String) ->rutjs
•	Dirección empresa  (String) -> express-validator
•	Selección tipo de patente a postular (alcohol o comercial) (preguntar como puedo limitarlo a 2 tipos de patentes)
•	Certificado residencia (subida en archivo pdf) -> mime
•	Certificado de constitución de la empresa (subida en archivo pdf)
•	Fotocopia del carnet (subida en archivo pdf)
•	Certificado de propiedad o arriendo del lugar (subida en archivo pdf)
*/