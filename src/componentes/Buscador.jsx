import React, { useState } from "react";

const Buscador = ({ colaboradores, setFiltroColaboradores }) => {
const [busqueda, setBusqueda] = useState("");

const handleBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);
    const filtroColaboradores = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(valorBusqueda.toLowerCase())
    );
    setFiltroColaboradores(filtroColaboradores);
};

return (
    <div>
    <input
        type="text"
        placeholder="Busca un colaborador"
        value={busqueda}
        onChange={handleBusqueda}
    />
    </div>
);
};

export default Buscador;





