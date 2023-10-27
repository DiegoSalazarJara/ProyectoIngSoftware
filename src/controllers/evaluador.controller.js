import Evaluador from '../models/evaluador.model.js';
import evaluadorSchema from '../schema/evaluador.schema.js';

// Listar todos los evaluadores
export const listEvaluadores = async (req, res) => {
  try {
    const evaluadores = await Evaluador.find();
    res.json(evaluadores);

    const requestBody = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      especialidad: req.body.especialidad,
      correoElectronico: req.body.correoElectronico,
      telefono: req.body.telefono,
      postulacionAsignada: req.body.postulacionAsignada,
      pagaresEmitidos: req.body.pagaresEmitidos,
    };

    const { error, value } = EvaluadorBodySchema.validate(requestBody);

  } catch (error) {
    res.status(500).json({ message: 'Error al listar los evaluadores', error });
  }
};

// Obtener un evaluador por ID
export const getEvaluadorById = async (req, res) => {
  const { id } = req.params;

 // Validación de ID
 if (!id) {
  return res.status(400).json({ message: 'ID de Evaluador no proporcionado' });
}


  try {
    const evaluador = await Evaluador.findById(id);
    if (!evaluador) {
      return res.status(404).json({ message: 'Evaluador no encontrado' });
    }
    res.json(evaluador);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el evaluador', error });
  }
};

export const getFormsAll = async (req, res) => {
  try {
      const postulacion = await Postulacion.find();
      res.status(200).json(postulacion);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
}

// Crear un nuevo evaluador
export const createEvaluador = async (req, res) => {
  const { nombre, apellido, especialidad, correoElectronico, telefono } = req.body;

// Validaciones de entrada de datos
if (!nombre || !apellido || !especialidad || !correoElectronico || !telefono) {
  return res.status(400).json({ message: 'Todos los campos son obligatorios' });
}

// Validación de formato del correo electrónico
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailRegex.test(correoElectronico)) {
  return res.status(400).json({ message: 'Formato de correo electrónico no válido' });
}

  const evaluador = new Evaluador({ nombre, apellido, especialidad, correoElectronico, telefono });

  try {
    const nuevoEvaluador = await evaluador.save();
    res.status(201).json(nuevoEvaluador);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el evaluador', error });
  }
};

// Actualizar un evaluador por ID
export const updateEvaluador = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, especialidad, correoElectronico, telefono } = req.body;

 // Validación de ID
 if (!id) {
  return res.status(400).json({ message: 'ID de Evaluador no proporcionado' });
}

// Validaciones de entrada de datos
if (!nombre || !apellido || !especialidad || !correoElectronico || !telefono) {
  return res.status(400).json({ message: 'Todos los campos son obligatorios' });
}

// Validación de formato del correo electrónico
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailRegex.test(correoElectronico)) {
  return res.status(400).json({ message: 'Formato de correo electrónico no válido' });
}

  try {
    const evaluador = await Evaluador.findById(id);
    if (!evaluador) {
      return res.status(404).json({ message: 'Evaluador no encontrado' });
    }

    evaluador.nombre = nombre;
    evaluador.apellido = apellido;
    evaluador.especialidad = especialidad;
    evaluador.correoElectronico = correoElectronico;
    evaluador.telefono = telefono;

    const evaluadorActualizado = await evaluador.save();
    res.json(evaluadorActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el evaluador', error });
  }
};

// Eliminar un evaluador por ID
export const deleteEvaluador = async (req, res) => {
  try {
    const evaluador = await Evaluador.findById(req.params.id);
    if (!evaluador) {
      return res.status(404).json({ message: 'Evaluador no encontrado' });
    }
    await evaluador.deleteOne();
    res.json({ message: 'Evaluador eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el evaluador', error });
  }
};