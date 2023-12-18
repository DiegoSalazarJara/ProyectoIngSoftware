import Evaluador from '../models/evaluador.model.js';
import ResApelacion from '../models/resApelacion.model.js';
import Apelacion from '../models/apelacion.model.js';
import sgMail from "@sendgrid/mail";
import { API_KEY } from '../config/env.config.js';

export const clasificarApelacion = async (req, res) => {
    try {
        const { evaluadorId, apelacionId, evaluar, mensaje } = req.body;

        const apelacion = await Apelacion.findById(apelacionId);

        if (apelacion.evaluador) {
            console.log('Esta apelación ya fue asignada a un evaluador');
            return res.status(400).json({ message: 'Esta apelación ya fue asignada a un evaluador' });
        }

        const evaluador = await Evaluador.findById(evaluadorId);

        const evaluadorAsignado = await ResApelacion.findOne({ apelacion: apelacionId });
        if (evaluadorAsignado && evaluadorAsignado.evaluador !== evaluadorId) {
            console.log('Esta apelación ya fue evaluada por otro evaluador');
            return res.status(400).json({ message: 'Esta apelación ya fue evaluada por otro evaluador' });
        }

        if (evaluar !== 'aprobado' && evaluar !== 'rechazado') {
            console.log('El parámetro "evaluar" debe ser "aprobado" o "rechazado"');
            return res.status(400).json({ message: 'El parámetro evaluar debe ser aprobado o rechazado' });
        }

        const respuesta = new ResApelacion({
            apelacion: apelacionId,
            evaluador: evaluadorId,
            evaluar: evaluar,
            mensaje: mensaje,
        });

        if (evaluar === 'aprobado') {
            sgMail.setApiKey(API_KEY);
            const msg = {
                to: apelacion.email,
                from: "enviocorreomunicipalidad@gmail.com",
                subject: "Respuesta de apelación",
                text: "Comunicado", 
                html: `<strong>${mensaje}</strong>`,
            };

            await sgMail.send(msg)
                .then(() => {
                    console.log('Correo enviado');
                })
                .catch((error) => {
                    console.error('Error al enviar el correo:', error);
                });
        } else {
            sgMail.setApiKey(API_KEY);
            const msg = {
                to: apelacion.email,
                from: "enviocorreomunicipalidad@gmail.com",
                subject: "Respuesta de apelación",
                text: "Comunicado", 
                html: `<strong>${mensaje}</strong>`,
            };

            await sgMail.send(msg)
                .then(() => {
                    console.log('Correo enviado');
                })
                .catch((error) => {
                    console.error('Error al enviar el correo:', error);
                });
        }

        const respuestaSave = await respuesta.save();
        res.status(201).json(respuestaSave);

        apelacion.evaluador = evaluadorId;
        await apelacion.save();
        
        

        console.log('La apelación ha sido evaluada y clasificada exitosamente');
    } catch (error) {
        console.error('Error al clasificar la apelación:', error);
        res.status(404).json({ message: 'Error al clasificar la apelación, verifique si la ID introducida es la correcta' });
    }
};



export const getResApelaciones = async (req, res) => {
    try {
        const resApelaciones = await ResApelacion.find();
        res.status(200).json(resApelaciones);
    } catch (error) {
        console.error('Error al obtener las apelaciones:', error);
        res.status(500).json({ message: 'Error al obtener las apelaciones' });
    }
};

export const deleteResApelacion = async (req, res) => {
    try {
        const apelacionId = req.params.id;
        const apelacion = await ResApelacion.findById(apelacionId);
        if(!apelacion){
            return res.status(404).json({ message: 'No se encontró la apelación' });
        }
        await ResApelacion.findByIdAndDelete(apelacionId);
        res.status(200).json({ message: 'La apelación ha sido eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

export const getResApelacion = async (req, res) => {
    try {
        const apelacionId = req.params.id;
        const apelacion = await ResApelacion.findById(apelacionId);
        if(!apelacion){
            return res.status(404).json({ message: 'No se encontró la apelación' });
        }
        res.status(200).json(apelacion);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};