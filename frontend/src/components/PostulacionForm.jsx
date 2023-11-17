import { useForm } from "react-hook-form";

export default function formPostulante() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      rutpostulante: "",
      email: "",
      nombreEmpresa: "",
      rutempresa: "",
      direccionEmpresa: "",
      tipoPatente: "",
      certificadoResidencia: "",
      certificadoConstitucion: "",
      fotocopiaCarnet: "",
      certificadoArriendo: ""
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
      </div>

      <div>
        <label>Rut Postulante:</label>
        <input
          type="text"
          name="rutpostulante"
          {...register("rutpostulante", {
            required: {
              value: true,
              message: "El rut del postulante es requerido",
            },
            pattern: {
              value: /^[0-9]+-[0-9kK]{1}$/,
              message: "Rut no válido",
            },
          })}
        />
        {errors.rutpostulante && <span>{errors.rutpostulante.message}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "El email es requerido",
            },
            pattern: {
                value: "^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]+$",
                message: "Email no válido",
              },
            })}
        />
        {errors.email && (
          <span>{errors.email.message}</span>
        )}
      </div>

      <div>
        <label>Nombre empresa:</label>
        <input
          type="text"
          name="nombreEmpresa"
          {...register("nombreEmpresa", {
            required: {
              value: true,
              message: "Nombre de la empresa es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombreEmpresa?.type === "required" && <span>Nombre de empresa requerido</span>}
        {errors.nombreEmpresa?.type === "maxLength" && (
          <span>Nombre de empresa no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre de empresa debe ser mayor a 2 caracteres</span>
        )}
      </div>

      <div>
        <label>Rut Empresa:</label>
        <input
          type="text"
          name="rutempresa"
          {...register("rutempresa", {
            required: {
              value: true,
              message: "El rut de la empresa es requerido",
            },
            pattern: {
              value: /^3[0-9]+-[0-9kK]{1}$/,
              message: "Rut empresa no válido",
            },
          })}
        />
        {errors.rutempresa && <span>{errors.rutempresa.message}</span>}
      </div>

      <div>
        <label>Dirección Empresa:</label>
        <input
          type="text"
          name="direccionEmpresa"
          {...register("direccionEmpresa", {
            required: {
              value: true,
              message: "La dirección es requerida",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.direccionEmpresa?.type === "required" && <span>Dirección de la empresa es requerido</span>}
        {errors.direccionEmpresa?.type === "maxLength" && (
          <span>La dirección no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>La dirección debe ser mayor a 2 caracteres</span>
        )}
      </div>

      <div>
      <label>Tipo de patente:</label>
        <input
          type="checkbox"
          name="Alcohol"
          {...register("Alcohol", {
            required: {
              value: true,
              message: "Patente de alcohol",
            },
          })}
        />
        <input
          type="checkbox"
          name="Comercial"
          {...register("Comercial", {
            required: {
              value: true,
              message: "Patente de Comercial",
            },
          })}
        />
        {errors.tipoPatente && <span>{errors.tipoPatente.message}</span>}
      </div>
      

      <div>
        <label htmlFor="archivo">subida archivos:</label>
        <input
          type="file"
          onChange={(e) => {
            setValue("certificado Residencia", e.target.files[0].name);
          }}
        />
        {errors.certificadoResidencia && <span>{errors.certificadoResidencia.message}</span>}
      </div>

     
      <button type="submit">Enviar</button>

      <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre> 
           
      <h3>Hello {watch("nombre")}</h3>
    </form>
  );
}
