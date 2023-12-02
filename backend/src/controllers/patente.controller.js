import patenteUser from '../models/patenteUser.model.js';
import Postulacion from '../models/postulacion.model.js';
import crypto from 'crypto'

const comercialRandom = () => {
  const num = '0123456789';
  let randomNum = 'C-';
  for (let i = 0; i < 9; i++) {
    const randomIndex = crypto.randomInt(0, num.length);
    randomNum += num[randomIndex];
  }
  return randomNum;
};

const alcoholRandom = () => {
  const num = '0123456789';
  let randomNum = 'A-';
  for (let i = 0; i < 9; i++) {
    const randomIndex = crypto.randomInt(0, num.length);
    randomNum += num[randomIndex];
  }
  return randomNum;
};

export const postPatente = async (req, res) => {
  try {
    const numAlcohol = alcoholRandom();
    const numComercial = comercialRandom();
    const postulacion = await Postulacion.findById(req.params.postulacionId);
    if (!postulacion) {
      throw new Error('La postulación no existe');
    }
    const typePatente = postulacion.tipoPatente;
    if(typePatente == 'alcohol'){
    
    const fechaEmision = new Date().toISOString().split('T')[0];
    const fechaVencimiento = new Date();
    fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1);

    const newPatente = new patenteUser({
      valor: 2500000,
      nombreEmpresa: postulacion.nombreEmpresa,
      fechaEmision: fechaEmision,
      fechaVencimiento: fechaVencimiento,
      tipoPatente: typePatente,
      numPatente: numAlcohol,
      direccionEmpresa: postulacion.direccionEmpresa
    })
    const patenteSaved = await newPatente.save();
    res.status(201).json(patenteSaved);
  }
    if (typePatente == 'comercial') {
      
      const fechaEmision = new Date().toISOString().split('T')[0];
      const fechaVencimiento = new Date();
      fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1);
    
      const newPatente = new patenteUser({
        valor: 1000000,
        nombreEmpresa: postulacion.nombreEmpresa,
        fechaEmision: fechaEmision,
        fechaVencimiento: fechaVencimiento,
        tipoPatente: typePatente,
        numPatente: numComercial,
        direccionEmpresa: postulacion.direccionEmpresa
      })
      const patenteSaved = await newPatente.save();
      res.status(201).json(patenteSaved);
    } 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  }  
  
export const getPatente = async (req, res) => {
    try {
        const patente = await patenteUser.find();
        res.status(200).json(patente)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deletePatente = async (req, res) => {
  try {
    const patente = await patenteUser.findById(req.params.patenteId);
      if(!patente){
          return res.status(404).json({message: 'patente no encontrada'});
      }
      await patente.deleteOne();
      res.status(200).json({message: 'patente eliminada'})
  } catch (error) {
      res.status(500).json({message: "Error al eliminar la patente"})
  }
}

