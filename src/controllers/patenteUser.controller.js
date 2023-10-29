import Patente from '../models/patente.model.js';
import patenteUser from '../models/patenteUser.model.js'


export const getPatenteId = async (req, res) => {
    try {
        const dateActual = new Date();
        const patente = await Patente.findOne({numPatente: req.params.numPatente});
        if(!patente){
            return res.status(404).json({message: 'Patente no encontrada'})
        }

        if(patente.fechaVencimiento >= dateActual){ // fechaVencimiento = 2023-10-24 dateActual = 2023-10-25
            const newPatente = new patenteUser({
                nombreEmpresa : patente.nombreEmpresa,
                numPatente: patente.numPatente,
                tipoPatente: patente.tipoPatente,
                fechaEmision: patente.fechaEmision,
                fechaVencimiento: patente.fechaVencimiento,
                valor: patente.valor,
                estado: "no vencida"
                }) 
                const patenteSaved = await newPatente.save();
                res.status(200).json(patenteSaved);
        }
        if(dateActual > patente.fechaVencimiento){ // fechaVencimiento = 2023-10-24 dateActual = 2023-10-25
            const newPatente = new patenteUser({
                nombreEmpresa : patente.nombreEmpresa,
                numPatente: patente.numPatente,
                tipoPatente: patente.tipoPatente,
                fechaEmision: patente.fechaEmision,
                fechaVencimiento: patente.fechaVencimiento,
                valor: patente.valor,
                estado: "vencida"
                }) 
                const patenteSaved = await newPatente.save();
                res.status(200).json(patenteSaved);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//verificar si esta vencida o no vencida y ademas si el usuario quiere cancelarla
export const patenteCancelar = async (req, res) => {
    try {
        const numPatente = req.params.numPatente;
        const patente = await patenteUser.findOne({numPatente});
        if(!patente){
            return res.status(404).json({message: 'Postulacion no encontrada'})
        }
        if(patente.estado === 'vencida'){
            res.json("Usted debe pagar la patente")
        }

        if(patente.estado === 'no vencida'){
            if(req.body.cancelar === 'cancelar'){
                patente.estado = 'patente cancelada'
                await patente.save();
            }
        }
        res.status(200).json(patente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//verificar si esta vencida o no vencida y ademas si el usuario quiere renovarla
export const patenteRenovar = async (req, res) => {
    try {
        const newDateEmision = new Date();
        const newDateVencimiento = new Date();
        newDateVencimiento.setFullYear(newDateVencimiento.getFullYear()+ 1)
        const numPatente = req.params.numPatente;
        const patente = await patenteUser.findOne({numPatente});
        if(!patente){
            return res.status(404).json({message: 'Patente no encontrada'})
        }
       
        if(patente.estado === 'vencida'){
            res.json("Usted debe pagar la patente")
        }

        if(patente.estado === 'patente cancelada' && req.body.renovar === 'renovar'){
                patente.estado = 'no vencida';
                patente.fechaEmision = newDateEmision;
                patente.fechaVencimiento = newDateVencimiento;
                await patente.save();
        }
        res.status(200).json(patente)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}