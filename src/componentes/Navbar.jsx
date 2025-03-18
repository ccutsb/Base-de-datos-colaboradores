import React from 'react';

/**
 * Componente de barra de navegación que muestra el título de la aplicación y
 * permite cambiar entre modo claro y oscuro
 * 
 * @param {boolean} darkMode - Estado actual del modo oscuro
 * @param {function} onToggleDarkMode - Función para cambiar entre modos claro/oscuro
 * @returns {JSX.Element} Componente de barra de navegación
 */
const Navbar = ({ darkMode, onToggleDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navy">
      <div className="container-fluid px-4">
        {/* Logo y título de la aplicación */}
        <span className="navbar-brand d-flex align-items-center">
          <i className="bi bi-people-fill me-2 text-white"></i>
          <span className="d-none d-sm-inline fs-4 fw-bold">Administrador de Personal</span>
          <span className="d-sm-none">Personal</span>
        </span>
        
        {/* Sección derecha: información de empresa y botón de modo oscuro */}
        <div className="d-flex align-items-center gap-3 ms-auto">
          {/* Badge con nombre de empresa (responsive) */}
          <span className="badge bg-light text-navy d-none d-sm-flex align-items-center">
            <i className="bi bi-building me-1"></i>
            <span className="d-none d-md-inline">Empresa XYZ</span>
            <span className="d-md-none">XYZ</span>
          </span>
          
          {/* Botón circular para alternar entre modo claro/oscuro */}
          <button 
            className="btn-circle dark-mode-toggle"
            onClick={onToggleDarkMode}
            title={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon-stars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 