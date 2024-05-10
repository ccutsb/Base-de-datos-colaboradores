import React, { useState } from "react";

const Formulario = ({ colaboradores, setColaboradores }) => {
const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [edad, setEdad] = useState("");
const [cargo, setCargo] = useState("");
const [telefono, setTelefono] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [successMessage, setSuccessMessage] = useState("");

const guardar = (e) => {
    e.preventDefault();

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const edadValida = !isNaN(edad) && edad !== "" && edad >= 18 && edad <= 60;
    const telefonoValido = /^\d{8}$/.test(telefono) && telefono !== "";


    if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === "") {
    setErrorMessage("Completa todos los campos!");
    return;
    }

    if (!correoRegex.test(correo)) {
        setErrorMessage("Ingrese un correo electrónico válido");
        return;
    }

    if (!edadValida) {
        setErrorMessage("Edad inválida. Debe estar entre 18 y 60 años.");
        return;
    }
    
    if (!telefonoValido) {
        setErrorMessage("El teléfono debe contener 8 dígitos");
        return;
    }

    const nuevoUsuario = { id: colaboradores.length + 1, nombre, correo, edad, cargo, telefono };
    setColaboradores([...colaboradores, nuevoUsuario]);

    setSuccessMessage("Colaborador agregado!");
    limpiarCampos();
};

const limpiarCampos = () => {
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
    setErrorMessage("");
};

return (
    <>
    <form onSubmit={guardar}>
        <input type="text" placeholder="Nombre del colaborador" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Email del colaborador" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <input type="text" placeholder="Edad del Colaborador" value={edad} onChange={(e) => setEdad(e.target.value)} />
        <input type="text" placeholder="Cargo del colaborador" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        <input type="text" placeholder="Teléfono del colaborador" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <button type="submit" className="btn btn-primary">Agregar colaborador</button>
        {errorMessage && <p style={{ color: "red", backgroundColor: "rgba(255, 0, 0, 0.1)", padding: "5px", borderRadius: "5px", marginTop: "15px"}}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green", backgroundColor: "rgba(0, 255, 0, 0.1)", padding: "5px", borderRadius: "5px", marginTop: "15px"}}>{successMessage}</p>}
    </form>

    
    </>
);
};

export default Formulario;







