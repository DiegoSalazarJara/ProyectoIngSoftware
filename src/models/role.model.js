"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
import mongoose from 'mongoose';
import ROLES from '../constants/roles.constants.js';

// Crea el esquema de la coleccion 'roles'
const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ROLES,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

// Crea el modelo de datos 'Role' a partir del esquema 'roleSchema'
const Role = mongoose.model("Role", roleSchema);

export default Role;