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

export const showExportForm = async () => {
  await Toast.fire({
    icon: "success",
    title: "Se ha exportado un pagaré exitosamente!"
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

export const showCreateForm = async () => {
  await Toast.fire({
    icon: "success",
    title: "Pagaré creado correctamente"
  });
}
export const showCreateFormE = async () => {
  await Toast.fire({
    icon: "success",
    title: "Evaluador creado correctamente"
  });
}

export const DeleteQuestion = async () => {
  const result = await Swal.fire({
    title: "¿Estás seguro de eliminar la postulación?",
    text: "Estos cambios son irreversibles.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No, cancelar",
    reverseButtons: true,
    customClass: {
      confirmButton: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
      cancelButton: "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    },
    buttonsStyling: false,
  });

  if (result.isConfirmed) {
    await Swal.fire({
      title: "Eliminado Correctamente!",
      text: "Tu postulación ha sido eliminada",
      icon: "success"
    });
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    await Swal.fire({
      title: "Cancelado",
      text: "Tu postulación está segura :)",
      icon: "success"
    });
  }

  return result.isConfirmed; // Devuelve true si se confirma, false si se cancela
};