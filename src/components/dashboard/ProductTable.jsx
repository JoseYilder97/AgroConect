import React from 'react';
import '../../stylesdshboard.css';

const ProductTable = () => {
  return (
    <div className="table-container">
      <h3>Administración de Productos</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        
            <tr >
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>

        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;