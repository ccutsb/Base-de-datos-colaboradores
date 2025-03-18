import React, { useState } from "react";

/**
 * Componente de búsqueda para filtrar colaboradores por nombre, correo, cargo, etc.
 * 
 * @param {Array} colaboradores - Lista completa de colaboradores 
 * @param {function} setFiltroColaboradores - Función para actualizar la lista filtrada
 * @returns {JSX.Element} Campo de búsqueda con funcionalidad de filtrado
 */
const Buscador = ({ colaboradores, setFiltroColaboradores }) => {
  // Estado para el término de búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  /**
   * Filtra los colaboradores en función del término de búsqueda
   * @param {Event} e - Evento de cambio del input
   */
  const handleChange = (e) => {
    const valorBusqueda = e.target.value.toLowerCase();
    setTerminoBusqueda(valorBusqueda);
    
    // Si el término está vacío, mostrar todos los colaboradores
    if (!valorBusqueda.trim()) {
      setFiltroColaboradores(colaboradores);
      return;
    }

    // Filtrar colaboradores que coincidan con el término en cualquier campo
    const resultadosFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(valorBusqueda) ||
        colaborador.correo.toLowerCase().includes(valorBusqueda) ||
        colaborador.cargo.toLowerCase().includes(valorBusqueda) ||
        colaborador.telefono.includes(valorBusqueda) ||
        colaborador.edad.toString().includes(valorBusqueda)
      );
    });

    // Actualizar la lista filtrada
    setFiltroColaboradores(resultadosFiltrados);
  };

  return (
    <div className="search-container">
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar colaboradores..."
          value={terminoBusqueda}
          onChange={handleChange}
          aria-label="Buscar colaboradores"
        />
      </div>
    </div>
  );
};

export default Buscador;





