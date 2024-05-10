import React from "react";

const Listado = ({ colaboradores }) => {
  console.log("Colaboradores:", colaboradores);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Edad</th>
          <th scope="col">Cargo</th>
          <th scope="col">Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Listado;



