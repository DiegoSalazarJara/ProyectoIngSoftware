"use strict";
import Joi from 'joi';



const evaluadorSchema = Joi.object({
  nombre: Joi.string().label('nombre').required().messages({
    "string.empty": "El nombre no puede estar vacío.",
    "any.required": "El nombre es obligatorio.",
    "string.base": "El nombre debe ser de tipo string.",
  }),
  apellido: Joi.string().label('apellido').required().messages({
    "string.empty": "El apellido no puede estar vacío.",
    "any.required": "El apellido es obligatorio.",
    "string.base": "El apellido debe ser de tipo string.",
  }),
  especialidad: Joi.string().label('especialidad').required().messages({
    "string.empty": "La especialidad no puede estar vacía.",
    "any.required": "La especialidad es obligatoria.",
    "string.base": "La especialidad debe ser de tipo string.",
  }),
  correoElectronico: Joi.string().label('correoElectronico').email().required().messages({
    "string.empty": "El correo electrónico no puede estar vacío.",
    "any.required": "El correo electrónico es obligatorio.",
    "string.base": "El correo electrónico debe ser de tipo string.",
    "string.email": "El correo electrónico debe tener un formato válido.",
  }),
  telefono: Joi.string().label('telefono').messages({
    "string.base": "El teléfono debe ser de tipo string.",
  }),
  postulacionAsignada: Joi.string().label('postulacionAsignada').messages({
    "string.base": "La postulación asignada debe ser de tipo string.",
  }),
  pagarésEmitidos: Joi.array().label('pagarésEmitidos').items(Joi.string()).messages({
    "array.base": "Los pagarés emitidos deben ser un array de strings.",
    "any.only": "Cada pagaré emitido debe ser de tipo string.",
  }),
});

export default evaluadorSchema;
