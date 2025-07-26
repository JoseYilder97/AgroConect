import React from 'react'

import '../../styles/stylesdshboard.css'
const CustomerTable = () => {
  return (
    <div className="table-container">
      <h3>Administración de Clientes</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>

          <tr >
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button >Editar</button>
              <button >Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;