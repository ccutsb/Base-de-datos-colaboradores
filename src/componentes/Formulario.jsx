import React, { useState } from "react";

const Formulario = ({ colaboradores, setColaboradores }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setError(true);
      setSuccessMessage("");
      return;
    }

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(nuevoColaborador.correo)) {
      setError("El formato del correo electrónico es inválido");
      setSuccessMessage("");
      return;
    }

    // Crear nuevo colaborador
    const newColaborador = {
      id: Date.now().toString(),
      ...nuevoColaborador,
    };

    // Actualizar el estado
    setColaboradores([...colaboradores, newColaborador]);

    // Limpiar el formulario
    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    setError(false);
    setSuccessMessage("¡Colaborador agregado exitosamente!");

    // Limpiar mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation text-center">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control text-center"
          id="nombre"
          name="nombre"
          value={nuevoColaborador.nombre}
          onChange={handleChange}
          placeholder="Ingrese el nombre"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control text-center"
          id="correo"
          name="correo"
          value={nuevoColaborador.correo}
          onChange={handleChange}
          placeholder="Ingrese el correo"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">
          Edad
        </label>
        <input
          type="number"
          className="form-control text-center"
          id="edad"
          name="edad"
          value={nuevoColaborador.edad}
          onChange={handleChange}
          placeholder="Ingrese la edad"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cargo" className="form-label">
          Cargo
        </label>
        <input
          type="text"
          className="form-control text-center"
          id="cargo"
          name="cargo"
          value={nuevoColaborador.cargo}
          onChange={handleChange}
          placeholder="Ingrese el cargo"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          className="form-control text-center"
          id="telefono"
          name="telefono"
          value={nuevoColaborador.telefono}
          onChange={handleChange}
          placeholder="Ingrese el teléfono"
        />
      </div>
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {typeof error === "string" ? error : "Todos los campos son obligatorios"}
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success text-center" role="alert">
          {successMessage}
        </div>
      )}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </div>
    </form>
  );
};

export default Formulario;







