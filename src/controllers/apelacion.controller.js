import apelacion from '../models/apelacion.model.js';
import respuesta from '../models/respuesta.model.js';
import { apelacionBodySchema } from '../schema/apelacion.schema.js';
import { updateApelacionBodySchema } from '../schema/updateapelacion.schema.js';

export const crearApelacion = async (req, res) => {
  try {
    const respuestaId = req.body.respuestaId;

    const respuestaRechazada = await respuesta.findById(respuestaId);
    if (respuestaRechazada.evaluar !== 'rechazado') {
      return res.status(400).json({ error: 'Solo se puede crear una apelación si el estado de evaluar es rechazado' });
    }

    const newApelacion = new apelacion({
      respuesta: respuestaId,
      nombre: req.body.nombre,
      rutpostulante: req.body.rutpostulante,
      rutempresa: req.body.rutempresa,
      nombreEmpresa: req.body.nombreEmpresa,
      direccion: req.body.direccion,
      apelacion: req.body.apelacion,
    });

    const { error } = apelacionBodySchema.validate(req.body);
    if (error){
      res.status(400).json({ error: error.message });
      return;
    }

    await newApelacion.save();

    res.status(201).json({ message: 'Apelación creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la apelación' });
  }
};


export const getApelacion = async (req, res) => {
  try {
    const rutpostulante = req.params.rutpostulante;
    const apelar = await apelacion.findOne({ rutpostulante: rutpostulante });
    if (!apelar) {
      return res.status(404).json({ message: "Apelacion no encontrada" });
    }
    res.status(200).json(apelar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


 export const deleteApelacion = async (req, res) => {
    try {
      const apelacionId = req.params.id;
      const apelar = await apelacion.findById(apelacionId);
      if (!apelar) {
        return res.status(404).json({ message: "Apelacion no encontrada" });
      }
      await apelacion.findOneAndDelete(apelacionId);
  
      res.json({ message: 'Apelación eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


export const updateApelacion = async (req, res) => {
  try {
    const apelacionId = req.params.id;
    const apelar = await apelacion.findOne(apelacionId);
    if (!apelar) {
      return res.status(404).json({ message: "Apelación no encontrada" });
    }

    const { error } = updateApelacionBodySchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    apelar.nombre = req.body.nombre;
    apelar.rutpostulante = req.body.rutpostulante;
    apelar.rutempresa = req.body.rutempresa;
    apelar.nombreEmpresa = req.body.nombreEmpresa;
    apelar.direccion = req.body.direccion;
    apelar.apelacion = req.body.apelacion;

    const apelacionActualizada = await apelar.save();
    res.json(apelacionActualizada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
