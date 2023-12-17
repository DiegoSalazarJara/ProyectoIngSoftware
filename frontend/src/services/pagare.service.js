import axios from './root.service.js';

export const createPagare = async (formPagare) => {
  try {
    const response = await axios.post('/pagare', formPagare);

    return response;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return { status: 500, data: [], error: error.message };
  }
};

export const listPagare = async (searchValue) => {
  try {
    const res = await axios.get('pagare/'+searchValue);
    const data = res.data;
      console.log(data)
      return [data];
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return { status: 500, data: [], error: error.message };
  }
};

/*
export const getPagares = async () => {
  try {
    
    const response = await axios.get('pagare');
    
    
    if (!response.ok) {
      throw new Error('Error al obtener pagares: ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener pagares: ' + error.message);
  }
};*/

export const deletePagare = async (pagareId) => {
  try {
    const response = await axios.delete(`/pagare/${pagareId}`);
    return response;
  } catch (error) {
    console.error('Error al eliminar el pagaré:', error);
    return { status: 500, error: error.message };
  }
};