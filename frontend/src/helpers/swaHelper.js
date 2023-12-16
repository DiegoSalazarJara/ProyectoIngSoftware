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


