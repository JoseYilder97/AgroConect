import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/stylesdshboard.css';

const DataTable = ({ data, columns, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ id: '', precio: '', categoria: '' });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value.toLowerCase(),
    }));
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item || {}).some((val) =>
      String(val || '').toLowerCase().includes(searchTerm)
    );

    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (key === 'categoria' || key === 'precio') {
        return value === '' || (item[key] && item[key].toLowerCase() === value);
      }
      if (key === 'id') {
        return value === '' || String(item[key] || '').includes(value);
      }
      return item[key]?.toLowerCase().includes(value);
    });

    return matchesSearch && matchesFilters;
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Obtener valores únicos para los selectores de precio y categoría
  const uniquePrices = [...new Set(data.map((item) => item.precio).filter(Boolean))];
  const uniqueCategories = [...new Set(data.map((item) => item.categoria || 'Sin categoría').filter(Boolean))];

  console.log('Categorías únicas:', uniqueCategories);

  return (
    <div className="dataTables_wrapper">
      <div className="table-controls">
        {/* Filtro por ID */}
        <input
          type="text"
          placeholder="Buscar por Codigo o ID..."
          value={filters.id}
          onChange={(e) => handleFilterChange('id', e.target.value)}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Buscar General..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
          {[5, 10, 20, 50, 100, 500, 1000, 5000].map((size) => (
            <option key={size} value={size}>
              {size} filas
            </option>
          ))}
        </select>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              {columns.map((col) => (
                <td key={col.key}>{item[col.key]}</td>
              ))}
              <td>
                <button
                  className="btn btn-secondary agenda_sevicios_actives"
                  onClick={() => onEdit(item)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-primary agenda_sevicios_actives"
                  onClick={() => onDelete(item)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <span>
          Mostrando {paginatedData.length} de {filteredData.length} filas
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DataTable;