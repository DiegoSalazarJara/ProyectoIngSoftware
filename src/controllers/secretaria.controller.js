import Secretaria from '../models/secretaria.model.js';
import Postulacion from '../models/postulacion.model.js';

// Crear secretaria
export const createSecretaria = async (req, res) => {
  const { nombre, apellido, correoElectronico, telefono } = req.body;

  // Validaciones de entrada de datos
  if (!nombre || !apellido || !correoElectronico || !telefono) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(correoElectronico)) {
    return res.status(400).json({ message: 'Formato de correo electrónico no válido' });
  }

  const secretaria = new Secretaria({ nombre, apellido, correoElectronico, telefono });

  try {
    const nuevoSecretaria = await secretaria.save();
    res.status(201).json(nuevoSecretaria);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear Secretaria', error });
  }
};

//obtener secretaria por id
export const getSecretariaById = async (req, res) => {
    const { id } = req.params;
    try {
      const secretaria = await Secretaria.findById(id);
      if (!secretaria) {
        return res.status(404).json({ message: 'Secretaria no encontrado' });
      }
      res.json(secretaria);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener secretaria', error });
    }
  };

// Actualizar Secretaria
export const updateSecretaria = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correoElectronico, telefono } = req.body;

  // Validación de ID
  if (!id) {
    return res.status(400).json({ message: 'ID de Secretaria no proporcionado' });
  }

  // Validaciones de entrada de datos
  if (!nombre || !apellido || !correoElectronico || !telefono) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Validación de formato de correo electrónico
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(correoElectronico)) {
    return res.status(400).json({ message: 'Formato de correo electrónico no válido' });
  }

  try {
    const secretaria = await Secretaria.findById(id);
    if (!secretaria) {
      return res.status(404).json({ message: 'Secretaria no encontrada' });
    }

    secretaria.nombre = nombre;
    secretaria.apellido = apellido;
    secretaria.correoElectronico = correoElectronico;
    secretaria.telefono = telefono;

    const secretariaActualizado = await secretaria.save();
    res.json(secretariaActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar secretaria', error });
  }
};

// Eliminar secretaria
export const deleteSecretaria = async (req, res) => {
  try {
    const secretaria = await Secretaria.findById(req.params.id);
    if (!secretaria) {
      return res.status(404).json({ message: 'Secretaria no encontrado' });
    }
    await secretaria.deleteOne();
    res.json({ message: 'Secretaria eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar secretaria', error });
  }
};