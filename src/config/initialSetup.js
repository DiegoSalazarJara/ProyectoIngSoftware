"use strict";
// Importa el modelo de datos 'Role'
import Role from '../models/role.model.js';
import User from '../models/user.model.js';

/**
 * Crea los roles por defecto en la base de datos.
 * @async
 * @function createRoles
 * @returns {Promise<void>}
 */
export async function createRoles() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Role.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "postulante" }).save(),
      new Role({ name: "evaluador" }).save(),
      new Role({ name: "secretaria" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**lo 
 * Crea los usuarios por defecto en la base de datos.
 * @async
 * @function createUsers
 * @returns {Promise<void>}
 */
export async function createUsers() {
  try {
    const count = await User.estimatedDocumentCount();
    if (count > 0) return;

    const admin = await Role.findOne({ name: "admin" });
    const postulante = await Role.findOne({ name: "postulante" });
    const secretaria = await Role.findOne({ name: "secretaria" });
    const evaluador = await Role.findOne({ name: "evaluador" });

    await Promise.all([
      new User({
        username: "admin",
        email: "admin@email.com",
        password: await User.encryptPassword("admin123"),
        roles: admin._id,
      }).save(),
      new User({
        username: "Postulante",
        email: "postulantemunicipalidad@gmail.com",
        password: await User.encryptPassword("postulante123"),
        roles: postulante._id,
      }).save(),
      new User({
        username: "secretaria",
        email: "secretariamunicipalidad@gmail.com",
        password: await User.encryptPassword("secretaria123"),
        roles: secretaria._id,
      }).save(),
      new User({
        username: "Evaluador",
        email: "evaluadormunicipalidad@gmail.com",
        password: await User.encryptPassword("evaluador123"),
        roles: evaluador._id,
      }).save(),
    ]);
    console.log("* => Users creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}
