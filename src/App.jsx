import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario.jsx"
import Listado from "./componentes/Listado.jsx"
import Navbar from "./componentes/Navbar.jsx"
import { BaseColaboradores } from "./assets/BaseColaboradores.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Buscador from "./componentes/Buscador.jsx";
import "./App.css";

function App() {
  // Estado para almacenar la lista completa de colaboradores
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  
  // Estado para almacenar los colaboradores filtrados por la búsqueda
  const [filtroColaboradores, setFiltroColaboradores] = useState([]);
  
  // Estado para controlar el modo oscuro/claro de la aplicación
  const [darkMode, setDarkMode] = useState(false);

  // Efecto para actualizar los colaboradores filtrados y aplicar el modo oscuro
  useEffect(() => {
    setFiltroColaboradores(colaboradores);
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [colaboradores, darkMode]);

  /**
   * Actualiza el estado de colaboradores filtrados según la búsqueda
   * @param {Array} colaboradoresFiltrados - Lista de colaboradores que coinciden con el criterio de búsqueda
   */
  const handleFiltrarColaboradores = (colaboradoresFiltrados) => {
    setFiltroColaboradores(colaboradoresFiltrados);
  };

  /**
   * Elimina un colaborador de la lista por su ID
   * @param {string} id - ID del colaborador a eliminar
   */
  const handleEliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Barra de navegación con control de tema */}
      <Navbar 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <div className="content-section">
        <div className="container-fluid px-4">
          <div className="row g-4">
            {/* Formulario para agregar nuevos colaboradores */}
            <div className="col-12 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="card-title h4 mb-4 text-center">Agregar personal</h2>
                  <Formulario
                    colaboradores={colaboradores}
                    setColaboradores={setColaboradores}
                  />
                </div>
              </div>
            </div>
            {/* Sección de listado de colaboradores y buscador */}
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                    <h2 className="card-title h4 mb-0">
                      Listado del personal
                      <span className="badge bg-primary ms-2">
                        {colaboradores.length}
                      </span>
                    </h2>
                    <div className="w-100 w-md-50">
                      {/* Componente de búsqueda para filtrar colaboradores */}
                      <Buscador
                        colaboradores={colaboradores}
                        setFiltroColaboradores={handleFiltrarColaboradores}
                      />
                    </div>
                  </div>
                  {/* Tabla de colaboradores con función para eliminar */}
                  <Listado 
                    colaboradores={filtroColaboradores}
                    onEliminar={handleEliminarColaborador}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


