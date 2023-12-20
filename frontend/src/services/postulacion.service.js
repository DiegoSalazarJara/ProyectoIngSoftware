import axios from './root.service';
import { showError } from '../helpers/swaHelper.js';
export const createForms = async (formData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    
    const response = await axios.post('/postulacion', formData, config);

    return response;
  } catch (error) {
    return { status: 500, data: [error], error: error.message };
  }
};

export const UpdateForms = async (formData, rut) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    
    const response = await axios.put('/postulacion/'+rut, formData, config);
    
    return response;
  } catch (error) {
    return { status: 500, data: [], error: error.message };
  }
};

export async function getPostulacion(searchValue) {
    try {
      const res = await axios.get('postulacion/'+ searchValue);
      const data = res.data;
      return [data];
    } catch (error) {
      console.log('Error fetching postulacion:', error);
      throw error;
    }
  }


  export async function deletePostulacion(postulacionToDelete) {
    try {
      const res = await axios.delete('postulacion/'+ postulacionToDelete);
      return res
    } catch (error) {
      console.error('Error fetching postulacion:', error);
    }
  }

  

