"use strict";
import Joi from "joi";

/**
 * Esquema de validación para el cuerpo de la solicitud de usuario.
 * @constant {Object}
 */
export const formBodySchema = Joi.object({
  nombre: Joi.string().label('nombre').required().min(3).max(30).pattern(new RegExp("^[A-Za-z]+(?:\\s[A-Za-z]+)+$"))
  .messages({
    "string.empty": "El nombre no puede estar vacío.",
    "any.required": "El nombre es obligatorio.",
    "string.base": "El nombre debe ser de tipo string.",
    "string.min": "El nombre del postulante debe tener como mínimo 3 caracteres.",
    "string.max": "El nombre del postulante debe tener como máximo 30 caracteres.",
    "string.pattern.base": "El nombre solo puede contener letras del alfabeto y debe ser un nombre completo.",
  }),
  rutpostulante: Joi.string().label('rutpostulante').required().min(9).max(10).pattern(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/)
  .messages({
    "string.empty": "El rut del postulante no puede estar vacío.",
    "any.required": "El rut del postulante es obligatorio.",
    "string.base": "El rut del postulante debe ser de tipo string.",
    "string.min": "El rut del postulante debe tener al menos 9 caracteres.",
    "string.max": "El rut del postulante debe tener al menos 10 caracteres.",
    "string.pattern.base": "El rut del postulante tiene el formato XXXXXXXX-X, ejemplo: 12345678-9.",
  }),
  email: Joi.string().label('email').required().email().pattern(new RegExp("^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]+$"))
    .messages({
      "string.empty": "El email no puede estar vacío.",
      "any.required": "El email es obligatorio.",
      "string.base": "El email debe ser de tipo string.",
      "string.pattern.base": "El email debe tener un formato válido, ejemplo: example123@gmail.com.",
    }),
  nombreEmpresa: Joi.string().label('nombreEmpresa').required().pattern(new RegExp("^[A-Za-z ]+$"))
  .messages({
    "string.empty": "El nombre de la empresa no puede estar vacío.",
    "any.required": "El nombre de la empresa es obligatorio.",
    "string.base": "El nombre de la empresa debe ser de tipo string.",
    "string.pattern.base": "El nombre de la empresa solo puede contener letras del alfabeto.",
  }),
  rutempresa: Joi.string().label('rutempresa').required().min(10).pattern(/^([3-9][0-9]{6,7})-[0-9kK]{1}$/)
  .messages({
    "string.empty": "El rut de la empresa no puede estar vacío.",
    "any.required": "El rut de la empresa es obligatorio.",
    "string.base": "El rut de la empresa debe ser de tipo string.",
    "string.min": "El rut de la empresa debe tener al menos 10 caracteres.",
    "string.pattern.base": "El rut de la empresa tiene el formato XXXXXXXX-X, ejemplo: 32345678-9.",
  }),
  direccionEmpresa: Joi.string().label('direccionEmpresa').min(10).max(50).required().pattern(new RegExp("^[a-zA-Z0-9\\s.,#-]{10,50}$"))
    .messages({
      "string.empty": "La direccion de la empresa no puede estar vacía.",
      "string.base": "La direccion de la empresa debe ser de tipo string.",
      "string.min": "La direccion de la empresa debe tener como mínimo 10 caracteres.",
      "string.max": "La direccion de la empresa debe tener como máximo 50 caracteres.",
      "any.required": "La direccion de la empresa es obligatoria.",
      "string.pattern.base": "La direccion de la empresa debe seguir un formato específico, ejemplo: '987 Los corales, Concepcion'.",
    }),
  tipoPatente: Joi.string().label('tipoPatente').required().pattern(new RegExp("^[A-Za-z]+$"))
    .messages({
      'string.empty': 'El campo tipoPatente no puede estar vacío.',
      'string.base': 'El campo tipoPatente debe ser de tipo string.',
      'any.only': 'El valor del campo tipoPatente no es válido.',
      "string.pattern.base": "El tipoPatente solo puede contener letras del alfabeto.",
    }),
    certificadoResidencia: Joi.string().label('certificadoResidencia')
    .required()
    .messages({
      'string.empty': 'El campo certificadoResidencia no puede estar vacío.',
      'string.base': 'El campo certificadoResidencia debe ser de tipo string.',
      'any.only': 'El archivo del certificadoResidencia adjunto debe tener formato PDF.'
    }), 
    certificadoConstitucion: Joi.string().label('certificadoConstitucion')
    .required()
    .messages({
      'string.empty': 'El campo certificadoConstitucion no puede estar vacío.',
      'string.base': 'El campo certificadoConstitucion debe ser de tipo string.',
      'any.only': 'El archivo del certificadoConstitucion adjunto debe tener formato PDF.'
    }),
    fotocopiaCarnet: Joi.string().label('fotocopiaCarnet')
    .required()
    .messages({
      'string.empty': 'El campo fotocopiaCarnet no puede estar vacío.',
      'string.base': 'El campo fotocopiaCarnet debe ser de tipo string.',
      'any.only': 'El archivo fotocopiaCarnet adjunto debe tener formato .img o .png.'
    }),
    certificadoArriendo: Joi.string().label('certificadoArriendo')
    .required()
    .messages({
      'string.empty': 'El campo certificadoArriendo no puede estar vacío.',
      'string.base': 'El campo certificadoArriendo debe ser de tipo string.',
      'any.only': 'El archivo certificadoArriendo adjunto debe tener formato PDF.'
    })
})

export const formUpdateBodySchema = Joi.object({
  nombre: Joi.string().label('nombre').required().min(3).max(30).pattern(new RegExp("^[A-Za-z]+(?:\\s[A-Za-z]+)+$"))
  .messages({
    "string.empty": "El nombre no puede estar vacío.",
    "any.required": "El nombre es obligatorio.",
    "string.base": "El nombre debe ser de tipo string.",
    "string.min": "El nombre del postulante debe tener como mínimo 3 caracteres.",
    "string.max": "El nombre del postulante debe tener como máximo 30 caracteres.",
    "string.pattern.base": "El nombre solo puede contener letras del alfabeto y debe ser un nombre completo.",
  }),
  rutpostulante: Joi.string().label('rutpostulante').required().min(9).max(10).pattern(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/)
  .messages({
    "string.empty": "El rut del postulante no puede estar vacío.",
    "any.required": "El rut del postulante es obligatorio.",
    "string.base": "El rut del postulante debe ser de tipo string.",
    "string.min": "El rut del postulante debe tener al menos 9 caracteres.",
    "string.max": "El rut del postulante debe tener al menos 10 caracteres.",
    "string.pattern.base": "El rut del postulante tiene el formato XXXXXXXX-X, ejemplo: 12345678-9.",
  }),
  email: Joi.string().label('email').required().email().pattern(new RegExp("^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]+$"))
    .messages({
      "string.empty": "El email no puede estar vacío.",
      "any.required": "El email es obligatorio.",
      "string.base": "El email debe ser de tipo string.",
      "string.pattern.base": "El email debe tener un formato válido, ejemplo: example123@gmail.com.",
    }),
  nombreEmpresa: Joi.string().label('nombreEmpresa').required().pattern(new RegExp("^[A-Za-z ]+$"))
  .messages({
    "string.empty": "El nombre de la empresa no puede estar vacío.",
    "any.required": "El nombre de la empresa es obligatorio.",
    "string.base": "El nombre de la empresa debe ser de tipo string.",
    "string.pattern.base": "El nombre de la empresa solo puede contener letras del alfabeto.",
  }),
  rutempresa: Joi.string().label('rutempresa').required().min(10).pattern(/^([3-9][0-9]{6,7})-[0-9kK]{1}$/)
  .messages({
    "string.empty": "El rut de la empresa no puede estar vacío.",
    "any.required": "El rut de la empresa es obligatorio.",
    "string.base": "El rut de la empresa debe ser de tipo string.",
    "string.min": "El rut de la empresa debe tener al menos 10 caracteres.",
    "string.pattern.base": "El rut de la empresa tiene el formato XXXXXXXX-X, ejemplo: 32345678-9.",
  }),
  direccionEmpresa: Joi.string().label('direccionEmpresa').min(10).max(50).required().pattern(new RegExp("^[a-zA-Z0-9\\s.,#-]{10,50}$"))
    .messages({
      "string.empty": "La direccion de la empresa no puede estar vacía.",
      "string.base": "La direccion de la empresa debe ser de tipo string.",
      "string.min": "La direccion de la empresa debe tener como mínimo 10 caracteres.",
      "string.max": "La direccion de la empresa debe tener como máximo 50 caracteres.",
      "any.required": "La direccion de la empresa es obligatoria.",
      "string.pattern.base": "La direccion de la empresa debe seguir un formato específico, ejemplo: '987 Los corales, Concepcion'.",
    }),
  tipoPatente: Joi.string().label('tipoPatente').required().pattern(new RegExp("^[A-Za-z]+$"))
    .messages({
      'string.empty': 'El campo tipoPatente no puede estar vacío.',
      'string.base': 'El campo tipoPatente debe ser de tipo string.',
      'any.only': 'El valor del campo tipoPatente no es válido.',
      "string.pattern.base": "El tipoPatente solo puede contener letras del alfabeto.",
    })
})

export const rutParamsSchema = Joi.object({
  rutpostulante: Joi.string().label('rutpostulante').required().min(10).pattern(/^[0-9]+-[0-9kK]{1}$/)
  .messages({
    "string.empty": "El rut del postulante no puede estar vacío.",
    "any.required": "El rut del postulante es obligatorio.",
    "string.base": "El rut del postulante debe ser de tipo string.",
    "string.min": "El rut del postulante debe tener al menos 10 caracteres.",
    "string.pattern.base": "El rut del postulante tiene el formato XXXXXXXX-X, ejemplo: 12345678-9.",
  }),
})

export const fileParamsSchema = Joi.object({
  filename: Joi.string()
    .label('filename')
    .required()
    .pattern(/^[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/)
    .messages({
      "string.empty": "El nombre de archivo no puede estar vacío.",
      "any.required": "El nombre de archivo es obligatorio.",
      "string.base": "El nombre de archivo debe ser de tipo string.",
      "string.pattern.base": "El nombre de archivo debe seguir un formato específico, por ejemplo: archivo.pdf o archivo.png",
    }),
});

export const idParamsSchema = Joi.object({
  id: Joi.string()
    .label('id')
    .required()
    .alphanum()
    .lowercase()
    .length(24) 
    .messages({
      "string.empty": "El ID no puede estar vacío.",
      "any.required": "El ID es obligatorio.",
      "string.base": "El ID debe ser de tipo string.",
      "string.alphanum": "El ID debe contener solo letras y números.",
      "string.lowercase": "El ID debe estar en minúsculas.",
      "string.length": "El ID debe tener una longitud limite de 24 caracteres.",
    }),
});

  
export default { formBodySchema, formUpdateBodySchema, rutParamsSchema, fileParamsSchema, idParamsSchema };