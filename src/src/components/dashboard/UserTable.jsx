import React from 'react'

import '../../stylesdshboard.css'
const UserTable = () => {
  return (
    <div className="table-container">
      <h3>Administración de Usuarios</h3>
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
{/*           {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => onEdit(user.id)}>Editar</button>
                <button onClick={() => onDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;