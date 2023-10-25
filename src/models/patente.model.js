import {Schema, model} from 'mongoose';

const patenteSchema = new Schema({
    valor: {
        type: Number
    },
    nombreEmpresa: {
        type: String,
        unique: true
    },
    fechaEmision:{
        type: Date
    },
    fechaVencimiento: {
        type: Date
    },
    tipoPatente: {
        type: String
    },
    numPatente: {
        type: String,
        unique: true
    },
    direccionEmpresa: {
        type: String
    }
});

export default model('Patente', patenteSchema);