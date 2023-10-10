import Postulacion from '../models/postulacion.model.js';

export const createForms = async (req, res) => {
    const {nombre, rutpostulante, rutempresa, direccion, patente} = req.body;

    try{
        const newPostulacion = new Postulacion({
            nombre,
            rutpostulante,
            rutempresa,
            direccion,
            patente
        });

        const PostulacionSaved = await newPostulacion.save();
        res.status(201).json(PostulacionSaved);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}