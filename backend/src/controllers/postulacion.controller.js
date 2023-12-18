import { HOST, PORT } from '../config/env.config.js';
import Postulacion from '../models/postulacion.model.js';
import { formBodySchema, formUpdateBodySchema, rutParamsSchema, fileParamsSchema, idParamsSchema} from '../schema/postulacion.schema.js';


export const createForms = async (req, res) => {
    try {
      const url = `${HOST}:${PORT}/api/postulacion/src/upload/`;
      
      const certificadoResidencia = req.files['certificadoResidencia'][0].filename;
      const certificadoConstitucion = req.files['certificadoConstitucion'][0].filename;
      const fotocopiaCarnet = req.files['fotocopiaCarnet'][0].filename;
      const certificadoArriendo = req.files['certificadoArriendo'][0].filename;
      const requestBody = {
        nombre: req.body.nombre,
        rutpostulante: req.body.rutpostulante,
        email: req.body.email,
        nombreEmpresa: req.body.nombreEmpresa,
        rutempresa: req.body.rutempresa,
        direccionEmpresa: req.body.direccionEmpresa,
        tipoPatente: req.body.tipoPatente,
        certificadoResidencia: url+certificadoResidencia,
        certificadoConstitucion: url+certificadoConstitucion,
        fotocopiaCarnet: url+fotocopiaCarnet,
        certificadoArriendo: url+certificadoArriendo,
      };
  
      const { error, value } = formBodySchema.validate(requestBody);

      if (error) {
        res.status(400).json({ message: error.message });
        return;
      }
  
      const newPostulacion = new Postulacion(value);
  
      const PostulacionSaved = await newPostulacion.save();
      res.status(201).json(PostulacionSaved);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getForms = async (req, res) => {
    try {
      const rutpostulante = req.params.rutpostulante;
      const { error, value } = rutParamsSchema.validate({ rutpostulante });
  
      if (error) {
        return res.status(400).json({ message: error.message });
      }
      const postulacion = await Postulacion.findOne({
         rutpostulante: value.rutpostulante,
        });
  
      if(postulacion.deleted === true){
        return res.status(404).json({ message: 'Postulacion no encontrada' });
      }
      res.status(200).json(postulacion);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  export const getArchives = async (req, res) => {
    try {
      const { error, value } = fileParamsSchema.validate({ filename: req.params.filename });
  
      if (error) {
        return res.status(400).json({ message: error.message });
      }
  
      const filename = value.filename;
      const file = `src/upload/${filename}`;
  
      res.download(file, (err) => {
        if (err) {
          console.error('Error al descargar el archivo:', err);
          res.status(404).send('Archivo no encontrado');
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  export const updateForm = async (req, res) => {
    try {
      const url = `${HOST}:${PORT}/api/postulacion/src/upload/`;
  
      // Validar parámetro de ruta
      const rutpostulante = req.params.rutpostulante;
      const { error: rutError, value: rutValue } = rutParamsSchema.validate({ rutpostulante });
      
      if (rutError) {
        return res.status(400).json({ message: rutError.message });
      }
  
      // Validar cuerpo de la solicitud
      const { error, value } = formUpdateBodySchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.message });
      }
  
      // Buscar postulación existente
      const existingPostulacion = await Postulacion.findOne({
        rutpostulante: rutValue.rutpostulante,
      });
  
      if (!existingPostulacion || existingPostulacion.deleted === true) {
        return res.status(404).json({ message: 'Postulacion no encontrada' });
      }
  
      // Extraer nombres de archivo
      const certificadoResidencia = req.files['certificadoResidencia'][0].filename;
      const certificadoConstitucion = req.files['certificadoConstitucion'][0].filename;
      const fotocopiaCarnet = req.files['fotocopiaCarnet'][0].filename;
      const certificadoArriendo = req.files['certificadoArriendo'][0].filename;
  
      // Actualizar la entidad Postulacion
      const formUpdated = await Postulacion.findOneAndUpdate(
        { rutpostulante: rutValue.rutpostulante },
        {
          nombre: value.nombre,
          rutpostulante: value.rutpostulante,
          email: value.email,
          nombreEmpresa: value.nombreEmpresa,
          rutempresa: value.rutempresa,
          direccionEmpresa: value.direccionEmpresa,
          tipoPatente: value.tipoPatente,
          certificadoResidencia: url + certificadoResidencia,
          certificadoConstitucion: url + certificadoConstitucion,
          fotocopiaCarnet: url + fotocopiaCarnet,
          certificadoArriendo: url + certificadoArriendo,
        },
        { new: true }
      );
  
      // Devolver la entidad actualizada
      return res.status(200).json(formUpdated);
    } catch (error) {
      // Manejar errores
      return res.status(500).json({ message: "Error al actualizar la postulacion" });
    }
  };
  

export const deleteForm = async (req, res) => {
  try {
    const { error, value } = idParamsSchema.validate({ id: req.params.id });

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const postulacion = await Postulacion.findById(value.id);

    if (!postulacion) {
      return res.status(404).json({ message: 'Postulacion no encontrada' });
    }
    const formDeleted = await Postulacion.findByIdAndUpdate(
      value.id,
      { $set: { deleted: true } },
      { new: true }
    );
    res.status(200).json(formDeleted);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la postulacion" });
  }
};