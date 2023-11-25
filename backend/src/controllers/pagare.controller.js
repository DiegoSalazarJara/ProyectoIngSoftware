import Pagare from '../models/pagare.model.js';
import Respuesta from '../models/respuesta.model.js';
import Postulacion from '../models/postulacion.model.js';
import Patente from '../models/patenteUser.model.js';


export const listPagares = async (req, res) => {
  try {
    const pagares = await Pagare.find().populate('patente', 'valor');
    const pagaresCleaned = pagares.map(pagare => ({
      ...pagare.toObject(),
    }));
    res.json(pagaresCleaned);
  } catch (error) {
    console.error('Error al listar los pagares:', error);
    res.status(500).json({ message: 'Error al listar los pagares', error });
  }
};

export const getPagareById = async (req, res) => {
  try {
    const { id } = req.params;
    const pagare = await Pagare.findById(id).populate('patente', 'valor');
    if (!pagare) {
      return res.status(404).json({ message: 'Pagare no encontrado' });
    }
    res.json(pagare);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pagare', error });
  }
};

export const emitirPagare = async (req, res) => {
  try {
    const postulacion = await Postulacion.findById(req.body.postulanteId);
    const resultadoPostulacion = await Respuesta.findOne({ evaluador: req.body.evaluadorId });

    if (!postulacion || !resultadoPostulacion) {
      return res.status(400).json({ message: 'Postulación o resultado de evaluacion no encontrados' });
    }

    const tipoPatente = postulacion.tipoPatente;

    const patente = await Patente.findOne({ tipoPatente });

    if (!patente) {
      return res.status(400).json({ message: 'Patente no encontrada para el tipo de patente' });
    }

    const fechaVencimiento = new Date();
    fechaVencimiento.setMonth(fechaVencimiento.getMonth() + 1);

    const monto = patente.valor;

    const newPagare = new Pagare({
      rutpostulante: postulacion.rutpostulante,
      evaluadorAsignado: resultadoPostulacion.evaluador,
      tipoPatente,
      patente: patente._id, 
      fechaVencimiento,
      monto,
    });

    const pagareSaved = await newPagare.save();

    // Consulta nuevamente la patente para obtener su valor
    const patenteActualizada = await Patente.findById(patente._id);

    res.status(200).json({
      ...pagareSaved.toObject(),
      patente: patenteActualizada,
    });

  } catch (error) {
    res.status(500).json({ message: 'Error al emitir el pagare', error });
  }
};


export const deletePagareById = async (req, res) => {
  const { id } = req.params;

  try {
    const pagare = await Pagare.findByIdAndDelete(id);
    if (!pagare) {
      return res.status(404).json({ message: 'Pagare no encontrado' });
    }

    return res.status(200).json({ message: 'Pagare eliminado exitosamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el Pagare', error });
  }
};

