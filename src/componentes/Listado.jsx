import React, { useState, useEffect } from "react";

/**
 * Componente que muestra una tabla de colaboradores con funcionalidades de ordenamiento
 * y opciones para eliminar o enviar correo a cada colaborador
 * 
 * @param {Array} colaboradores - Lista de colaboradores a mostrar
 * @param {function} onEliminar - Función para eliminar un colaborador
 * @returns {JSX.Element} Tabla de colaboradores con funcionalidad de ordenamiento
 */
const Listado = ({ colaboradores, onEliminar }) => {
  // Estado para controlar el ordenamiento de la tabla
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  // Estado para controlar la visibilidad de la información de contacto en móviles
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  /**
   * Efecto para detectar cambios en el ancho de la pantalla y actualizar el estado
   */
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    // Verificar el tamaño inicial
    handleResize();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', handleResize);
    
    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * Actualiza la configuración de ordenamiento cuando se hace clic en una columna
   * @param {string} key - Nombre de la propiedad por la que ordenar
   */
  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  /**
   * Obtiene la lista de colaboradores ordenada según la configuración actual
   * @returns {Array} Lista ordenada de colaboradores
   */
  const getSortedColaboradores = () => {
    if (!sortConfig.key) return colaboradores;

    return [...colaboradores].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  /**
   * Devuelve el ícono adecuado para la columna según el estado de ordenamiento
   * @param {string} key - Nombre de la propiedad
   * @returns {JSX.Element} Ícono para mostrar el estado de ordenamiento
   */
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <i className="bi bi-arrow-down-up text-muted ms-1"></i>;
    return sortConfig.direction === 'asc' 
      ? <i className="bi bi-sort-up ms-1"></i>
      : <i className="bi bi-sort-down ms-1"></i>;
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            {/* Encabezados de columna con ordenamiento */}
            <th 
              scope="col" 
              onClick={() => sortData('nombre')} 
              className="sortable" 
              style={{ minWidth: '120px' }}
              data-columna="nombre"
            >
              <span className="d-flex align-items-center">
                Nombre {getSortIcon('nombre')}
              </span>
            </th>
            <th 
              scope="col" 
              onClick={() => sortData('correo')} 
              className="sortable columna-oculta-movil" 
              style={{ minWidth: '180px' }}
              data-columna="correo"
            >
              <span className="d-flex align-items-center">
                Correo {getSortIcon('correo')}
              </span>
            </th>
            <th 
              scope="col" 
              onClick={() => sortData('edad')} 
              className="sortable columna-oculta-movil" 
              style={{ width: '70px' }}
              data-columna="edad"
            >
              <span className="d-flex align-items-center">
                Edad {getSortIcon('edad')}
              </span>
            </th>
            <th 
              scope="col" 
              onClick={() => sortData('cargo')} 
              className="sortable" 
              style={{ minWidth: '150px' }}
              data-columna="cargo"
            >
              <span className="d-flex align-items-center">
                Cargo {getSortIcon('cargo')}
              </span>
            </th>
            <th 
              scope="col" 
              onClick={() => sortData('telefono')} 
              className="sortable" 
              style={{ width: '120px' }}
              data-columna="telefono"
            >
              <span className="d-flex align-items-center">
                Teléfono {getSortIcon('telefono')}
              </span>
            </th>
            <th scope="col" className="text-center acciones-column" style={{ width: '110px' }}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeo de colaboradores ordenados para generar filas de la tabla */}
          {getSortedColaboradores().map((colaborador) => (
            <tr key={colaborador.id}>
              <td className="nombre-cell">{colaborador.nombre}</td>
              <td className="columna-oculta-movil">
                <a href={`mailto:${colaborador.correo}`} className="text-decoration-none">
                  {colaborador.correo}
                </a>
              </td>
              <td className="edad-cell columna-oculta-movil">{colaborador.edad}</td>
              <td className="cargo-cell">
                <span className="badge bg-info text-dark">
                  {colaborador.cargo}
                </span>
              </td>
              <td className="telefono-cell">
                <a href={`tel:${colaborador.telefono}`} className="text-decoration-none">
                  {colaborador.telefono}
                </a>
              </td>
              <td className="text-center">
                {/* Botones de acción para cada colaborador */}
                <div className="d-flex gap-2 justify-content-center">
                  {/* Botón para eliminar colaborador con confirmación */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de que deseas eliminar este colaborador?')) {
                        onEliminar(colaborador.id);
                      }
                    }}
                    title="Eliminar"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                  {/* Botón para enviar correo al colaborador */}
                  <button
                    className="btn btn-info btn-sm text-white"
                    onClick={() => window.location.href = `mailto:${colaborador.correo}`}
                    title="Enviar correo"
                  >
                    <i className="bi bi-envelope-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Indicador para dispositivos móviles cuando hay columnas ocultas */}
      {isSmallScreen && (
        <div className="mt-2 text-muted small">
          <i className="bi bi-info-circle me-1"></i>
          Gira tu dispositivo horizontalmente o amplía la pantalla para ver más columnas.
        </div>
      )}
    </div>
  );
};

export default Listado;



