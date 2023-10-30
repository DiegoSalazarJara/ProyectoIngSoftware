import Pagare from '../models/pagare.model.js';
import Respuesta from '../models/respuesta.model.js';
import Postulacion from '../models/postulacion.model.js'


export const listPagares = async (req, res) => {
  try {
    const pagarés = await Pagare.find();
    res.json(pagarés);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar los pagarés', error });
  }
};

export const getPagareById = async (req, res) => {
  try {
    const { id } = req.params;
    const pagare = await Pagare.findById(id);
    if (!pagare) {
      return res.status(404).json({ message: 'Pagaré no encontrado' });
    }
    res.json(pagare);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pagaré', error });
  }
};

export const emitirPagare = async (req, res) => {
  try {
    const postulacion = await Postulacion.findById(req.body.postulanteId);
    const resultadoPostulacion = await Respuesta.findOne({evaluador: req.body.evaluadorId})
    const fechaVencimiento = new Date();
      fechaVencimiento.setMonth(fechaVencimiento.getMonth() + 1);

    if (postulacion.tipoPatente === 'alcohol' && resultadoPostulacion.evaluar === 'aprobado') {
      let monto = 2500000;
      const newPagare = new Pagare({
        rutpostulante: postulacion.rutpostulante,
        evaluadorAsignado: resultadoPostulacion.evaluador,
        tipoPatente: postulacion.tipoPatente,
        monto,
        fechaVencimiento: fechaVencimiento,
       
        
      });
      const pagareSaved = await newPagare.save();
      res.status(200).json(pagareSaved)
    } else if (postulacion.tipoPatente === 'comercial' && resultadoPostulacion.evaluar === 'aprobado') {
      let monto = 1000000;
      const newPagare = new Pagare({
        rutpostulante: postulacion.rutpostulante,
        evaluadorAsignado: resultadoPostulacion.evaluador,
        tipoPatente: postulacion.tipoPatente,
        monto,
        fechaVencimiento: fechaVencimiento,
        
      });
      const pagareSaved = await newPagare.save();
      res.status(200).json(pagareSaved)
    } else {
      return res.status(400).json({ message: 'Tipo de patente no válido' });
    }
    }catch (error) {
      res.status(500).json(error)
    }
}
export const deletePagareById = async (req, res) => {
  const { id } = req.params;

  try {
    const pagare = await Pagare.findByIdAndDelete(id);
    if (!pagare) {
      return res.status(404).json({ message: 'Pagaré no encontrado' });
    }

    return res.status(200).json({ message: 'Pagaré eliminado exitosamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el Pagaré', error });
  }
};

