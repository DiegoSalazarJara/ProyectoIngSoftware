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

/*
export const { value: fruit } = await Swal.fire({
  title: "Select field validation",
  input: "select",
  inputOptions: {
    Fruits: {
      apples: "Apples",
      bananas: "Bananas",
      grapes: "Grapes",
      oranges: "Oranges"
    },
    Vegetables: {
      potato: "Potato",
      broccoli: "Broccoli",
      carrot: "Carrot"
    },
    icecream: "Ice cream"
  },
  inputPlaceholder: "Select a fruit",
  showCancelButton: true,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === "oranges") {
        resolve();
      } else {
        resolve("You need to select oranges :)");
      }
    });
  }
});
if (fruit) {
  Swal.fire(`You selected: ${fruit}`);
}
*/
