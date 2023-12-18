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

export async function listPagares() {
  try {
    const res = await axios.get('pagare/');
    console.log(res)
    return res
  } catch (error) {
    console.error('Error fetching Pagare:', error);
  }
}

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

export const getPagareById = async (pagareId) => {
  try {
    const response = await axios.get('pagare/' + pagareId);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el pagaré por ID:', error);
    return { status: 500, data: [], error: error.message };
  }
};

export const deletePagare = async (pagareId) => {
  try {
    const response = await axios.delete(`/pagare/${pagareId}`);
    return response;
  } catch (error) {
    console.error('Error al eliminar el pagaré:', error);
    return { status: 500, error: error.message };
  }
};