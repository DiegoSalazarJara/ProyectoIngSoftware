import Respuesta from '../models/respuesta.model.js';
import Evaluador from '../models/evaluador.model.js';
import Postulacion from '../models/postulacion.model.js';
import sgMail from "@sendgrid/mail";
import { API_KEY } from '../config/env.config.js';


export const clasificarPostulacion = async (req, res) => {
  try {
    const { evaluadorId, postulacionId, evaluar } = req.body;

    const postulacion = await Postulacion.findById(postulacionId);

    if (postulacion.evaluador) {
      console.log('Esta postulación ya fue asignada a un evaluador');
      return res.status(400).json({ message: 'Esta postulación ya fue asignada a un evaluador' });
    }

    const evaluador = await Evaluador.findById(evaluadorId);

    const evaluadorAsignado = await Respuesta.findOne({ postulacion: postulacionId });
    if (evaluadorAsignado) {
      console.log('Esta postulación ya fue evaluada por otro evaluador');
      return res.status(400).json({ message: 'Esta postulación ya fue evaluada por otro evaluador' });
    }

    if (evaluar !== 'aprobado' && evaluar !== 'rechazado') {
      console.log('El parámetro "evaluar" debe ser "aprobado" o "rechazado"');
      return res.status(400).json({ message: 'El parámetro evaluar debe ser aprobado o rechazado' });
    }

    const respuesta = new Respuesta({
      postulacion: postulacionId,
      evaluador: evaluadorId,
      evaluar: evaluar,
    });


    if (evaluar === 'aprobado') {
sgMail.setApiKey(API_KEY);
const msg = {
  to: postulacion.email,
  from: "enviocorreomunicipalidad@gmail.com",
  subject: "Respuesta de postulación",
  text: "Comunicado", 
  html: "<strong>Hola, su postulacion ha sido aprobada. </strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log('Correo enviado');
  })
  .catch((error) => {
    console.error('Error al enviar el correo:', error);
  });
    }else{
sgMail.setApiKey(API_KEY);
const msg = {
  to: postulacion.email,
  from: "enviocorreomunicipalidad@gmail.com",
  subject: "Respuesta de postulación",
  text: "Comunicado", 
  html: "<strong>Hola, su postulacion ha sido rechazada debido a que no cumple con todos los requisitos. </strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log('Correo enviado');
  })
  .catch((error) => {
    console.error('Error al enviar el correo:', error);
  });
    }

    const respuestaSave = await respuesta.save();
    res.status(201).json(respuestaSave);

    postulacion.evaluador = evaluadorId;
    await postulacion.save();
    await evaluador.save();

    console.log('La postulación ha sido evaluada y clasificada exitosamente');
  } catch (error) {
    console.error('Error al clasificar la postulación:', error);
    res.status(500).json({ message: 'Error al clasificar la postulación, verifique que la id introducida es la correcta' });
  }
};


export const getRespuestas = async (req, res) => {
  try {
    const respuestas = await Respuesta.find();
    res.status(200).json(respuestas);
  } catch (error) {
    console.error('Error al obtener las respuestas:', error);
    res.status(500).json({ message: 'Error al obtener las respuestas' });
  }
};


export const deleteRespuesta = async (req, res) => {
  try {
    const respuestaId = req.params.id;
    const respuesta = await Respuesta.findById(respuestaId);
    if (!respuesta) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }
    await Respuesta.findByIdAndDelete(respuestaId);

    res.status(200).json({ message: "Respuesta eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getRespuesta = async (req, res) => {
  try {
    const respuestaId = req.params.id;
    const respuesta = await Respuesta.findById(respuestaId);
    if (!respuesta) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
