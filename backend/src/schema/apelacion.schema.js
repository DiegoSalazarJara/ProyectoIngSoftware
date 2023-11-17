"use strict";
import Joi from "joi";

/**
 * Esquema de validación para el cuerpo de la solicitud de usuario.
 * @constant {Object}
 */
export const apelacionBodySchema = Joi.object({
    respuestaId: Joi.string().label('respuestaId').required().alphanum().messages({
        "string.empty": "El id de la respuesta no puede estar vacío.",
        "any.required": "El id de la respuesta es obligatorio.",
        "string.base": "El id de la respuesta debe ser de tipo string.",
        "string.alphanum": "El id de la respuesta solo puede contener letras y números."
      }),
      nombre: Joi.string().label('nombre').required().regex(/^[A-Za-z\s]+$/).messages({
        "string.empty": "El nombre no puede estar vacío.",
        "any.required": "El nombre es obligatorio.",
        "string.base": "El nombre debe ser de tipo string.",
        "string.pattern.base": "El nombre solo puede contener letras y espacios."
      }),
      rutpostulante: Joi.string().label('rutpostulante').required().pattern(/^(\d{8}-[0-9kK])$/).messages({
        "string.empty": "El rut del postulante no puede estar vacío.",
        "any.required": "El rut del postulante es obligatorio.",
        "string.base": "El rut del postulante debe ser de tipo string.",
        "string.pattern.base": "El rut del postulante debe tener un formato válido (ejemplo: 12345678-9), sin puntos y con guion."
      }),
      rutempresa: Joi.string().label('rutempresa').required().pattern(/^([3-9]\d{7}-[0-9kK])$/).messages({
        "string.empty": "El rut de la empresa no puede estar vacío.",
        "any.required": "El rut de la empresa es obligatorio.",
        "string.base": "El rut de la empresa debe ser de tipo string.",
        "string.pattern.base": "El rut de la empresa debe tener un formato válido (ejemplo: 12345678-9) y el primer dígito debe ser mayor o igual a 3 y debe estar escrito sin puntos."
      }),
  nombreEmpresa: Joi.string().label('nombreEmpresa').required().regex(/^[A-Za-z\s]+$/).max(100).messages({
    "string.empty": "El nombre de la empresa no puede estar vacío.",
    "any.required": "El nombre de la empresa es obligatorio.",
    "string.base": "El nombre de la empresa debe ser de tipo string.",
    "string.pattern.base": "El nombre de la empresa solo puede contener letras y espacios.",
    "string.max": "El nombre de la empresa no puede exceder los 100 caracteres."
  }),
  direccion: Joi.string().label('direccionEmpresa').required().regex(/^[A-Za-z0-9#\s]+$/).max(100).messages({
    "string.empty": "La dirección de la empresa no puede estar vacía.",
    "string.base": "La dirección de la empresa debe ser de tipo string.",
    "any.required": "La dirección de la empresa es obligatoria.",
    "string.pattern.base": "La dirección de la empresa solo puede contener letras, números, espacios y el símbolo #.",
    "string.max": "La dirección de la empresa no puede exceder los 100 caracteres."
  }),
  apelacion: Joi.string().label('apelacion').required().custom((value, helpers) => {
    const wordCount = value.trim().split(/\s+/).length;
    if (wordCount <= 500) {
      return value;
    } else {
      return helpers.message("La apelacion no puede exceder las 500 palabras.");
    }
  }).messages({
    "string.empty": "La apelacion no puede estar vacía.",
    "string.base": "La apelacion debe ser de tipo string.",
    "any.required": "La apelacion es obligatoria.",
  }),
})

  
export default { apelacionBodySchema };