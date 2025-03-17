import React, { useState } from "react";

const Listado = ({ colaboradores, onEliminar }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

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

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <i className="fas fa-sort text-muted ms-1"></i>;
    return sortConfig.direction === 'asc' 
      ? <i className="fas fa-sort-up ms-1"></i>
      : <i className="fas fa-sort-down ms-1"></i>;
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col" onClick={() => sortData('nombre')} className="sortable" style={{ minWidth: '120px' }}>
              <span className="d-flex align-items-center">
                Nombre {getSortIcon('nombre')}
              </span>
            </th>
            <th scope="col" onClick={() => sortData('correo')} className="sortable" style={{ minWidth: '180px' }}>
              <span className="d-flex align-items-center">
                Correo {getSortIcon('correo')}
              </span>
            </th>
            <th scope="col" onClick={() => sortData('edad')} className="sortable" style={{ width: '70px' }}>
              <span className="d-flex align-items-center">
                Edad {getSortIcon('edad')}
              </span>
            </th>
            <th scope="col" onClick={() => sortData('cargo')} className="sortable" style={{ minWidth: '150px' }}>
              <span className="d-flex align-items-center">
                Cargo {getSortIcon('cargo')}
              </span>
            </th>
            <th scope="col" onClick={() => sortData('telefono')} className="sortable" style={{ width: '120px' }}>
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
          {getSortedColaboradores().map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>
                <a href={`mailto:${colaborador.correo}`} className="text-decoration-none">
                  {colaborador.correo}
                </a>
              </td>
              <td>{colaborador.edad}</td>
              <td>
                <span className="badge bg-info text-dark">
                  {colaborador.cargo}
                </span>
              </td>
              <td>
                <a href={`tel:${colaborador.telefono}`} className="text-decoration-none">
                  {colaborador.telefono}
                </a>
              </td>
              <td className="text-center">
                <div className="d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de que deseas eliminar este colaborador?')) {
                        onEliminar(colaborador.id);
                      }
                    }}
                    title="Eliminar"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    className="btn btn-info btn-sm text-white"
                    onClick={() => window.location.href = `mailto:${colaborador.correo}`}
                    title="Enviar correo"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;



