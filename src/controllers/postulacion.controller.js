import Postulacion from '../models/postulacion.model.js';
import { formBodySchema } from '../schema/postulacion.schema.js';

export const createForms = async (req, res) => {
    try {
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
        certificadoResidencia: certificadoResidencia,
        certificadoConstitucion: certificadoConstitucion,
        fotocopiaCarnet: fotocopiaCarnet,
        certificadoArriendo: certificadoArriendo,
        
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
        const postulacion = await Postulacion.findOne({rutpostulante});
        if(!postulacion){
            return res.status(404).json({message: 'Postulacion no encontrada'})
        }
        res.status(200).json(postulacion);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//Revisar si tengo que borrar esto 
export const getFormsAll = async (req, res) => {
    try {
        const postulacion = await Postulacion.find();
        res.status(200).json(postulacion);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Modificar tema de req.file.path para los archivos
export const updateForm = async (req, res) => {
    try {
      const certificadoResidencia = req.files['certificadoResidencia'][0].filename;
      const certificadoConstitucion = req.files['certificadoConstitucion'][0].filename;
      const fotocopiaCarnet = req.files['fotocopiaCarnet'][0].filename;
      const certificadoArriendo = req.files['certificadoArriendo'][0].filename;
  
      const updatedPostulacion = await Postulacion.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            nombre: req.body.nombre,
            rutpostulante: req.body.rutpostulante,
            nombreEmpresa: req.body.nombreEmpresa,
            rutempresa: req.body.rutempresa,
            direccionEmpresa: req.body.direccionEmpresa,
            tipoPatente: req.body.tipoPatente,
            certificadoResidencia: certificadoResidencia,
            certificadoConstitucion: certificadoConstitucion,
            fotocopiaCarnet: fotocopiaCarnet,
            certificadoArriendo: certificadoArriendo,
          },
        },
        { new: true }
      );
  
      if (!updatedPostulacion) {
        return res.status(404).json({ message: 'Postulacion no encontrada' });
      }
  
      res.status(200).json(updatedPostulacion);
    } catch (error) {
      res.status(400).json({ message: 'Error al actualizar la postulacion' });
    }
  };

export const deleteForm = async (req, res) => {
    try {
        const postulacion = await Postulacion.findById(req.params.id);
        if(!postulacion){
            return res.status(404).json({message: 'Postulacion no encontrada'});
        }
        await postulacion.deleteOne();
        res.status(200).json({message: 'Postulacion eliminada'})
    } catch (error) {
        res.status(500).json({message: "Error al eliminar la postulacion"})
    }
}