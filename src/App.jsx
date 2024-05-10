import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario.jsx"
import Listado from "./componentes/Listado.jsx"
import { BaseColaboradores } from "./assets/BaseColaboradores.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./componentes/Buscador.jsx";


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtroColaboradores, setFiltroColaboradores] = useState([]);

  useEffect(() => {
    setFiltroColaboradores(colaboradores);
  }, [colaboradores]);

  const handleFiltrarColaboradores = (colaboradoresFiltrados) => {
    setFiltroColaboradores(colaboradoresFiltrados);
  };

  return (
    <>
      <div className="container">
        <h1>Agregar colaboradores</h1>
        <div className="formulario">
          <Formulario
            colaboradores={colaboradores}
            setColaboradores={setColaboradores}
          />
        </div>
        <h3>Listado de colaboradores</h3>
        <div className="buscador">
          <Buscador
            colaboradores={colaboradores}
            setFiltroColaboradores={handleFiltrarColaboradores}
          />
        </div>
        
        <div className="listado">
          <Listado colaboradores={filtroColaboradores} />
        </div>
      </div>
    </>
  );
}
export default App;


