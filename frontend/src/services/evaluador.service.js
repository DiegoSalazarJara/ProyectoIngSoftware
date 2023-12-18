import axios from './root.service.js';

export const createEvaluador = async (FormEvaluador) => {
  try {
    const response = await axios.post('/evaluador', FormEvaluador);
console.log(response)
    return response;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return { status: 500, data: [], error: error.message };
  }
};

export async function listEvaluadores() {
  try {
    const res = await axios.get('evaluador/');
    console.log(res)
    return res
  } catch (error) {
    console.error('Error fetching Evaluador:', error);
  }
}

export const deleteEvaluador = async (evaluadorId) => {
  try {
    const response = await axios.delete(`/evaluador/${evaluadorId}`);
    return response;
  } catch (error) {
    console.error('Error al eliminar el evaluador:', error);
    return { status: 500, error: error.message };
  }
};