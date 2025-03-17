import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario.jsx"
import Listado from "./componentes/Listado.jsx"
import Navbar from "./componentes/Navbar.jsx"
import { BaseColaboradores } from "./assets/BaseColaboradores.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./componentes/Buscador.jsx";
import "./App.css";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtroColaboradores, setFiltroColaboradores] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setFiltroColaboradores(colaboradores);
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [colaboradores, darkMode]);

  const handleFiltrarColaboradores = (colaboradoresFiltrados) => {
    setFiltroColaboradores(colaboradoresFiltrados);
  };

  const handleEliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <div className="content-section">
        <div className="container-fluid px-4">
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="card-title h4 mb-4 text-center">Agregar colaborador</h2>
                  <Formulario
                    colaboradores={colaboradores}
                    setColaboradores={setColaboradores}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                    <h2 className="card-title h4 mb-0">
                      Listado de colaboradores
                      <span className="badge bg-primary ms-2">
                        {colaboradores.length}
                      </span>
                    </h2>
                    <div className="w-100 w-md-50">
                      <Buscador
                        colaboradores={colaboradores}
                        setFiltroColaboradores={handleFiltrarColaboradores}
                      />
                    </div>
                  </div>
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


