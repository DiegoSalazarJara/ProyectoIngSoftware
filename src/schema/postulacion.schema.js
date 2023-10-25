"use strict";
import Joi from "joi";

/**
 * Esquema de validación para el cuerpo de la solicitud de usuario.
 * @constant {Object}
 */
export const formBodySchema = Joi.object({
  nombre: Joi.string().label('nombre').required().messages({
    "string.empty": "El nombre no puede estar vacío.",
    "any.required": "El nombre es obligatorio.",
    "string.base": "El nombre debe ser de tipo string.",
  }),
  rutpostulante: Joi.string().label('rutpostulante').required().min(10).pattern(/^[0-9]+-[0-9kK]{1}$/).message({
    "string.empty": "El rut del postulante no puede estar vacío.",
    "any.required": "El rut del postulante es obligatorio.",
    "string.base": "El rut del postulante debe ser de tipo string.",
    "string.min": "El rut del postulante debe tener al menos 10 caracteres."
  }),
  email: Joi.string().label('email').email().required().messages({
    "string.empty": "El email no puede estar vacío.",
    "any.required": "El email es obligatorio.",
    "string.base": "El email debe ser de tipo string.",
    "string.email": "El email debe tener un formato válido.",
  }),
  nombreEmpresa: Joi.string().label('nombreEmpresa').required().messages({
    "string.empty": "El nombre de la empresa no puede estar vacío.",
    "any.required": "El nombre de la empresa es obligatorio.",
    "string.base": "El nombre de la empresa debe ser de tipo string.",
  }),
 rutempresa: Joi.string().label('rutempresa').required().min(10).pattern(/^[0-9]+-[0-9kK]{1}$/).message({
    "string.empty": "El rut de la empresa no puede estar vacío.",
    "any.required": "El rut de la empresa es obligatorio.",
    "string.base": "El rut de la empresa debe ser de tipo string.",
    "string.min": "El rut de la empresa debe tener al menos 10 caracteres."
  }),
  direccionEmpresa: Joi.string().label('direccionEmpresa').required().messages({
    "string.empty": "La direccion de la empresa no puede estar vacía.",
    "string.base": "La direccion de la empresa debe ser de tipo string.",
    "any.required": "La direccion de la empresa es obligatorio.",
  }),
  tipoPatente: Joi.string().label('tipoPatente')
    .required()
    .messages({
      'string.empty': 'El campo tipoPatente no puede estar vacío.',
      'string.base': 'El campo tipoPatente debe ser de tipo string.',
      'any.only': 'El valor del campo tipoPatente no es válido.'
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

  
export default { formBodySchema };