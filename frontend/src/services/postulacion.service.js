import axios from './root.service';

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
    console.error('Error en la solicitud:', error);
    return { status: 500, data: [], error: error.message };
  }
};




export async function getPostulacion(searchValue) {
    try {
      const res = await axios.get('postulacion/'+ searchValue);
      const data = res.data;
      console.log(data)
      return [data];
    } catch (error) {
      console.error('Error fetching postulacion:', error);
    }
  }

  export async function getArchive() {
    try {
      const res = await axios.get('postulacion/certificadoResidencia.pdf');
      const data = res.data;
      console.log(data)
      return [data];
    } catch (error) {
      console.error('Error fetching postulacion:', error);
    }
  }
  

