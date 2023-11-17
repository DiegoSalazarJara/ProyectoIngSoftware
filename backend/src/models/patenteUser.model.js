import {Schema, model} from 'mongoose';

const patenteUserSchema = new Schema({
    nombreEmpresa: {
        type: String,
        required:true,
        unique: true
    },
    numPatente: {
        type: String,
        required:true,
        unique: true
    },
    tipoPatente: {
        type: String,
        required:true
    },
    fechaEmision:{
        type: Date,
        required:true
    },
    fechaVencimiento: {
        type: Date,
        required:true
    },
    valor: {
        type: Number,
        required: true
    },
    direccionEmpresa: {
        type: String
    },
    estado: {
        type: String,
        enum: ['vencida', 'no vencida', 'patente cancelada'],
        set: (value) => value.toLowerCase(),
      },
});

export default model('patenteUser', patenteUserSchema);