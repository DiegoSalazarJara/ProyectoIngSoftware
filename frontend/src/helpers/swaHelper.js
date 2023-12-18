import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const showConfirmForm = async () => {
  await Toast.fire({
    icon: "success",
    title: "Postulación enviada exitosamente!"
  });
};

export const showErrorForm = async () => {
    await Toast.fire({
      icon: "error",
      title: "Error al enviar la postulación"
    });
}

export const showConfirmUpdateForm = async () => {
  await Toast.fire({
    icon: "success",
    title: "Postulación actualizada exitosamente!"
  });
};

export const showErrorUpdateForm = async () => {
    await Toast.fire({
      icon: "error",
      title: "Error al actualizar la postulación"
    });
}


export const showNotFoundForm = async () => {
  await Toast.fire({
    icon: "question",
    title: "Postulación no encontrada"
  });
}

export const showDeleteForm = async () => {
  await Toast.fire({
    icon: "success",
    title: "Postulación eliminada correctamente"
  });
}

export const showRenovar = async (response) => {
  await Toast.fire({
    icon: "info",
    title: response
  });
}

export const showCancelar = async () => {
  await Toast.fire({
    icon: "success",
    title: "Patente cancelada correctamente"
  });
}

export const showConfirmPatente = async () => {
  await Toast.fire({
    icon: "success",
    title: "Patente creada exitosamente!"
  });
};

export const showErrorPatente = async () => {
    await Toast.fire({
      icon: "error",
      title: "Error al crear la patente"
    });
}

export const showDeleteApelacion = async () => {
  await Toast.fire({
    icon: "success",
    title: "Apelación eliminada exitosamente"
  });
}

export const showDeleteResApelacion = async () => {
  await Toast.fire({
    icon: "success",
    title: "Evaluación de apelación eliminada exitosamente"
  });
}

export const showDeleteRespuesta = async () => {
  await Toast.fire({
    icon: "success",
    title: "Evaluación de postulación eliminada exitosamente"
  });
}