import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import '../../stylesdshboard.css';

const ActionModal = ({ closeModal, actionType, data, onConfirm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    description: '',
  });

  // Actualiza formData cuando los datos cambian
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || '',
        email: data.email || '',
        role: data.role || '',
        description: data.description || '',
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(actionType, data?.id, formData);
    closeModal();
  };

  const renderContent = () => {
    switch (actionType) {
      case 'edit':
        return (
          <div>
            <h2>Editar Usuario</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Rol:
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione un rol</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Editor">Editor</option>
                </select>
              </label>
              <button type="submit">Guardar Cambios</button>
            </form>
          </div>
        );
      case 'delete':
        return (
          <div>
            <h2>Eliminar Usuario</h2>
            <p>¿Estás seguro de que deseas eliminar a {data?.name}?</p>
            <button onClick={() => onConfirm('delete', data?.id)}>Eliminar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        );
      case 'add':
        return (
          <div>
            <h2>Agregar Nuevo Usuario</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Rol:
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione un rol</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Editor">Editor</option>
                </select>
              </label>
              <button type="submit">Agregar</button>
            </form>
          </div>
        );
      default:
        return <p>Acción no soportada.</p>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

ActionModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired, // 'edit', 'delete' o 'add'
  data: PropTypes.object, // Información del elemento (tipo, nombre, etc.)
  onConfirm: PropTypes.func.isRequired, // Función para manejar la acción
};

export default ActionModal;