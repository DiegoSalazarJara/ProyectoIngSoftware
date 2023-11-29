"use strict";
import Joi from 'joi';



const evaluadorSchema = Joi.object({
  nombre: Joi.string().label('nombre').min(3).max(20).regex(/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/).required().messages({
    "string.empty": "El nombre no puede estar vacío.",
    "any.required": "El nombre es obligatorio.",
    "string.base": "El nombre debe ser de tipo string.",
    "string.min": "El nombre debe tener al menos {3} caracteres.",
    "string.max": "El nombre no debe tener más de {20} caracteres.",
    "string.pattern.base": "El nombre debe contener solo letras y guión (-).",
  }),
  apellido: Joi.string().label('apellido').min(3).max(20).regex(/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/).required().messages({
      "string.empty": "El apellido no puede estar vacío.",
      "any.required": "El apellido es obligatorio.",
      "string.base": "El apellido debe ser de tipo string.",
      "string.min": "El apellido debe tener al menos {3} caracteres.",
      "string.max": "El apellido no debe tener más de {20} caracteres.",
      "string.pattern.base": "El apellido puede contener solo letras y guión (-).",
    }),
    especialidad: Joi.string().label('especialidad').min(3).max(30).regex(/^[a-zA-Z\s]+$/).required().messages({
      "string.empty": "La especialidad no puede estar vacía.",
      "any.required": "La especialidad es obligatoria.",
      "string.base": "La especialidad debe ser de tipo string.",
      "string.min": "La especialidad debe tener al menos {3} caracteres.",
      "string.max": "La especialidad no debe tener más de {30} caracteres.",
      "string.pattern.base": "La especialidad solo puede contener letras del alfabeto y espacios.",
  }),
  email: Joi.string().label('email').required().email().pattern(new RegExp("^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]+$"))
  .messages({
    "string.empty": "El email no puede estar vacío.",
    "any.required": "El email es obligatorio.",
    "string.base": "El email debe ser de tipo string.",
    "string.pattern.base": "El email debe tener un formato válido, ejemplo: example123@gmail.com.",
  }),
  telefono: Joi.string().label('telefono').length(9).regex(/^[0-9]+$/).required().messages({
    "string.empty": "El teléfono no puede estar vacío.",
    "any.required": "El teléfono es obligatorio.",
    "string.base": "El teléfono debe ser de tipo string.",
    "string.length": "El teléfono debe tener exactamente {9} dígitos.",
    "string.pattern.base": "El teléfono debe contener solo números.",
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
