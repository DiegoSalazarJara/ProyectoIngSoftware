import {Schema , model} from 'mongoose';

const apelacionSchema = new Schema({

        nombre: {
            type: String,
            required: true,
        },

        rutpostulante: {
            type: String,
            required: true,
            unique: true,
        },
    
        rutempresa: {
            type: String,
            required: true,
            unique: true,
        },

        nombreEmpresa: {
            type: String,
            required: true,
            unique: true,
        },
    
        direccion: {
            type: String,
            required: true,
        },
    
        apelacion: {
            type: String,
            required: true,
        },
        
},
{
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => new Date(Date.now() - 14400000)
  }
});

export default model('apelacion', apelacionSchema);
