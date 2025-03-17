import React, { useState } from "react";

const Buscador = ({ colaboradores, setFiltroColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);
    
    const filtroColaboradores = colaboradores.filter((colaborador) => {
      const searchTerm = valorBusqueda.toLowerCase();
      return (
        colaborador.nombre.toLowerCase().includes(searchTerm) ||
        colaborador.correo.toLowerCase().includes(searchTerm) ||
        colaborador.cargo.toLowerCase().includes(searchTerm) ||
        colaborador.telefono.includes(searchTerm) ||
        colaborador.edad.toString().includes(searchTerm)
      );
    });
    
    setFiltroColaboradores(filtroColaboradores);
  };

  return (
    <div className="search-container">
      <div className="input-group">
        <span className="input-group-text">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar colaborador..."
          value={busqueda}
          onChange={handleBusqueda}
          aria-label="Buscar colaborador"
        />
      </div>
    </div>
  );
};

export default Buscador;





