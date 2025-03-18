import React, { useState } from "react";

/**
 * Componente de formulario para agregar nuevos colaboradores
 * 
 * @param {Array} colaboradores - Lista actual de colaboradores
 * @param {function} setColaboradores - Función para actualizar la lista de colaboradores
 * @returns {JSX.Element} Formulario para agregar colaboradores
 */
const Formulario = ({ colaboradores, setColaboradores }) => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  
  // Estado para mensajes de error de validación
  const [error, setError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  
  // Estado para mensaje de éxito
  const [exito, setExito] = useState(false);

  /**
   * Valida los datos del formulario y muestra errores si los hay
   * @returns {boolean} Verdadero si la validación es exitosa, falso en caso contrario
   */
  const validarDatos = () => {
    // Reiniciar mensaje de error
    setError(false);
    setErrorMensaje("");

    // Validación de campos vacíos
    if (
      nombre === "" ||
      correo === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setError(true);
      setErrorMensaje("Todos los campos son obligatorios");
      return false;
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setError(true);
      setErrorMensaje("El correo no es válido");
      return false;
    }

    // Validación de edad (debe ser un número entre 18 y 120)
    const edadNum = Number(edad);
    if (isNaN(edadNum) || edadNum < 18 || edadNum > 120) {
      setError(true);
      setErrorMensaje("La edad debe ser un número entre 18 y 120");
      return false;
    }

    // Validación de teléfono (debe ser un número de al menos 8 dígitos)
    const telefonoRegex = /^\d{8,15}$/;
    if (!telefonoRegex.test(telefono)) {
      setError(true);
      setErrorMensaje("El teléfono debe tener entre 8 y 15 dígitos");
      return false;
    }

    return true;
  };

  /**
   * Maneja el envío del formulario
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar datos del formulario
    if (!validarDatos()) return;

    // Crear nuevo colaborador
    const nuevoColaborador = {
      id: Date.now().toString(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    // Actualizar estado de colaboradores con el nuevo registro
    setColaboradores([...colaboradores, nuevoColaborador]);

    // Resetear formulario y mostrar mensaje de éxito
    resetForm();
    setExito(true);
    
    // Quitar mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setExito(false);
    }, 3000);
  };

  /**
   * Limpia todos los campos del formulario
   */
  const resetForm = () => {
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <form className="needs-validation" onSubmit={handleSubmit}>
      {/* Mensaje de error si existe */}
      {error && (
        <div className="alert alert-danger mb-3" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {errorMensaje}
        </div>
      )}
      
      {/* Mensaje de éxito al agregar colaborador */}
      {exito && (
        <div className="alert alert-success mb-3" role="alert">
          <i className="bi bi-check-circle-fill me-2"></i>
          Personal agregado exitosamente
        </div>
      )}

      {/* Campo de nombre */}
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control text-center"
          id="nombre"
          placeholder="Ingrese el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      {/* Campo de correo */}
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control text-center"
          id="correo"
          placeholder="Ingrese el correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>

      {/* Campo de edad */}
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">
          Edad
        </label>
        <input
          type="number"
          className="form-control text-center"
          id="edad"
          placeholder="Ingrese la edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      {/* Campo de cargo */}
      <div className="mb-3">
        <label htmlFor="cargo" className="form-label">
          Cargo
        </label>
        <input
          type="text"
          className="form-control text-center"
          id="cargo"
          placeholder="Ingrese el cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </div>

      {/* Campo de teléfono */}
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          className="form-control text-center"
          id="telefono"
          placeholder="Ingrese el teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      {/* Botón para agregar */}
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-person-plus-fill me-2"></i>
          Agregar Personal
        </button>
      </div>
    </form>
  );
};

export default Formulario;







