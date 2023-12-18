import axios from './root.service.js';

export const formRespuesta = async (data) => {
    try {
      const response = await axios.post('/respuesta', data)
  
      return response.status === 200 ? response.data : { success: false, data: [] };
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return { success: false, error: error.message, data: [] };
    }
  };

  export const getRespuesta = async (searchValue) => {
    try {
      const res = await axios.get(`/respuesta/${searchValue}`);
      const data = res.data;
      return [data];
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return { status: 500, data: [], error: error.message };
    }
  };

  export const deleteRespuesta = async (respuestaId)  => {
    try {
      const response = await axios.delete(`/respuesta/${respuestaId}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar la evaluación:', error);
      return { status: 500, error: error.message };
    }
  };