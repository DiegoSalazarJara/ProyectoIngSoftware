import patenteUser from '../models/patenteUser.model.js'


export const getPatenteId = async (req, res) => {
    try {
        const dateActual = new Date();
        const patente = await patenteUser.findOne({numPatente: req.params.numPatente});
        if(!patente){
            return res.status(404).json({message: 'Patente no encontrada'})
        }

        if(patente.fechaVencimiento >= dateActual){ // fechaVencimiento = 2023-10-24 dateActual = 2023-10-25
                patente.estado = "no vencida"
                const Patente = new patenteUser(patente);
                const patenteSaved = await Patente.save();
                res.status(200).json(patenteSaved);
        }
        if(dateActual > patente.fechaVencimiento){ // fechaVencimiento = 2023-10-24 dateActual = 2023-10-25
                patente.estado = "vencida"
                const Patente = new patenteUser(patente);
                const patenteSaved = await Patente.save();
                res.status(200).json(patenteSaved);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const patenteCancelar = async (req, res) => {
    try {
        const numPatente = req.params.numPatente;
        const patente = await patenteUser.findOne({ numPatente });

        if (!patente) {
            return res.status(404).json({ message: 'Postulacion no encontrada' });
        }

        if (patente.estado === 'vencida') {
            return res.json("Usted debe pagar la patente");
        }

        if (patente.estado === 'no vencida' && req.body.cancelar === 'cancelar') {
            patente.estado = 'patente cancelada';
            await patente.save();
        }

        // Enviar la respuesta después de todas las comprobaciones
        return res.status(200).json(patente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



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
            return res.json("Usted debe pagar la patente")
        }else{
             res.status(400)
        }

        if(patente.estado === 'patente cancelada' && req.body.renovar === 'renovar'){
                patente.estado = 'no vencida';
                patente.fechaEmision = newDateEmision;
                patente.fechaVencimiento = newDateVencimiento;
                await patente.save();
                return res.status(200).json(patente);
        }else{
            return res.status(400);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}