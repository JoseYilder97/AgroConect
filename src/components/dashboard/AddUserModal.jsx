import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/stylesdshboard.css';

const AddUserModal = ({ closeModal, actionType, data, onConfirm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || '',
        email: data.email || '',
        role: data.role || '',
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
      case 'add':
        return (
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
            <div className="modal-actions">
              <button type="submit">Agregar</button>
              <button type="button" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        );
      case 'edit':
        return (
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
            <div className="modal-actions">
              <button type="submit">Guardar Cambios</button>
              <button type="button" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        );
      case 'delete':
        return (
          <div>
            <h2>Eliminar Usuario</h2>
            <p>¿Estás seguro de que deseas eliminar a {data?.name}?</p>
            <div className="modal-actions">
              <button onClick={() => onConfirm('delete', data?.id)}>Eliminar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        );
      default:
        return <p>Acción no soportada.</p>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>
          {actionType === 'add'
            ? 'Agregar Nuevo Usuario'
            : actionType === 'edit'
              ? 'Editar Usuario'
              : 'Eliminar Usuario'}
        </h2>
        {renderContent()}
      </div>
    </div>
  );
};

AddUserModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired, 
  data: PropTypes.object,
  onConfirm: PropTypes.func.isRequired,
};

export default AddUserModal;