import axios from './root.service';

export async function getPatente(searchValue) {
    try {
      const res = await axios.get('patente/'+ searchValue);
      const data = res.data;
      return [data];
    } catch (error) {
      console.error('Error fetching patente:', error);
    }
  }

  export async function getCancelar(numPatente) {
    try {
      const res = await axios.post('patente/cancelar/'+numPatente, { cancelar: 'cancelar' });
      const data = res.data;
      console.log(data)
      return [data];
    } catch (error) {
      console.error('Error fetching patente:', error);
    }
  }
  

  export async function getRenovar(searchValue) {
    try {
      const res = await axios.post('patente/renovar/'+ searchValue);
      const data = res.data;
      return [data];
    } catch (error) {
      console.error('Error fetching patente:', error);
    }
  }

  export const createPatente = async (id) => {
    try {  
      const response = await axios.post('patente/'+id);
      return response;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return { status: 500, data: [], error: error.message };
    }
  };

  export async function deletePatente(searchValue) {
    try {
      const res = await axios.delete('patente/'+ searchValue);
      return res
    } catch (error) {
      console.error('Error fetching postulacion:', error);
    }
  }

  export async function getsPatente() {
    try {
      const res = await axios.get('patente/');
      console.log(res)
      return res
    } catch (error) {
      console.error('Error fetching postulacion:', error);
    }
  }