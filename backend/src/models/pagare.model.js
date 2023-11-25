import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const pagareSchema = new Schema({
  tipoPatente: {
    type: String,
    required: true,
  },
  rutpostulante: {
    type: String,
    ref: 'Postulacion',
    required: true,
  },
  patente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patenteUser',
    required: true,
  },
  evaluadorAsignado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Evaluador',
  },
  fechaVencimiento: {
    type: Date,
  },
  estadoPago: {
    type: String,
    enum: ['pendiente', 'pagado'],
    default: 'pendiente',
  },
}, {
  timestamps: {
    createdAt: 'fechaCreacion',
  },
});
pagareSchema.virtual('monto').get(function () {
  return this.patente ? this.patente.valor : 0;
});

const Pagare = model('Pagare', pagareSchema);

export default Pagare;
