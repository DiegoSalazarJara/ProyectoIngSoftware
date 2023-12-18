import axios from './root.service.js';

export const FormResApelacion = async (data) => {
    try {
      const response = await axios.post('/resApelacion', data)
  
      return response.status === 200 ? response.data : { success: false, data: [] };
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return { success: false, error: error.message, data: [] };
    }
  };

  export const getApelacion = async (rutpostulante) => {
    try {
      const res = await axios.get(`/apelacion/${rutpostulante}`);
      const data = res.data;
      return [data];
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return { status: 500, data: [], error: error.message };
    }
  };

  export const deleteApelacion = async (resapelacionId)  => {
    try {
      const response = await axios.delete(`/apelacion/${resapelacionId}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar la respuesta de la apelación:', error);
      return { status: 500, error: error.message };
    }
  };

  export const updateApelacion = async (rutpostulante, data) => {
    try {
      const response = await axios.patch(`/apelacion/`+rutpostulante, data);
      return response;
    } catch (error) {
      console.error('Error al actualizar la respuesta de la apelación:', error);
      return { status: 500, error: error.message };
    }
  }