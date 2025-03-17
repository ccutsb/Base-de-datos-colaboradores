import React from 'react';

const Navbar = ({ darkMode, onToggleDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
      <div className="container">
        <span className="navbar-brand d-flex align-items-center">
          <i className="fas fa-users me-2 text-primary"></i>
          <span className="d-none d-sm-inline">Gestión de Colaboradores</span>
          <span className="d-sm-none">Colaboradores</span>
        </span>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-primary d-none d-sm-flex align-items-center">
            <i className="fas fa-building me-1"></i>
            <span className="d-none d-md-inline">Empresa XYZ</span>
            <span className="d-md-none">XYZ</span>
          </span>
          <button 
            className="btn btn-outline-primary btn-sm"
            onClick={onToggleDarkMode}
          >
            <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 