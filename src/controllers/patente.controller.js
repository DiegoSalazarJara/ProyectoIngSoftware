import Patente from '../models/patente.model.js';
import Postulacion from '../models/postulacion.model.js';

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
  
      const newPatente = new Patente({
        valor: 2500000,
        nombreEmpresa: postulacion.nombreEmpresa,
        fechaEmision: fechaEmision,
        fechaVencimiento: fechaVencimiento,
        tipoPatente: typePatente,
        numPatente: numAlcohol,
        direccionEmpresa: postulacion.direccionEmpresa
      })
      const patenteSaved = await newPatente.save();
      res.status(200).json(patenteSaved);
    }
      if (typePatente == 'comercial') {
        const fechaEmision = new Date().toISOString().split('T')[0];
        const fechaVencimiento = new Date();
        fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1);
    
        const newPatente = new Patente({
          valor: 1000000,
          nombreEmpresa: postulacion.nombreEmpresa,
          fechaEmision: fechaEmision,
          fechaVencimiento: fechaVencimiento,
          tipoPatente: typePatente,
          numPatente: numComercial,
          direccionEmpresa: postulacion.direccionEmpresa
        })
        const patenteSaved = await newPatente.save();
        res.status(200).json(patenteSaved);
      } else {
        res.json("El tipo de patente es invalido")
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    }  
  
export const getPatente = async (req, res) => {
    try {
        const patente = await Patente.find();
        res.status(200).json(patente)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const alcoholRandom = () => {
    const num = '0123456789';
    let randomNum = 'A-';
    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * num.length);
      randomNum += num[randomIndex];
    }
    return randomNum;
  };

  const comercialRandom = () => {
    const num = '0123456789';
    let randomNum = 'C-';
    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * num.length);
      randomNum += num[randomIndex];
    }
    return randomNum;
  };
