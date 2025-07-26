import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import '../../styles/stylesdshboard.css';

const UserActionModal = ({ closeModal, actionType, data, onConfirm }) => {
  const renderContent = () => {
    switch (actionType) {
      case 'edit':
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedData = {
                name: e.target.name.value,
                email: e.target.email.value,
                role: e.target.role.value,
              };
              onConfirm('edit', data.id, updatedData);
            }}
          >
            <label>
              Nombre:
              <input type="text" name="name" defaultValue={data.name} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" defaultValue={data.email} required />
            </label>
            <label>
              Rol:
              <select name="role" defaultValue={data.role}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </label>
            <button type="submit">Guardar Cambios</button>
          </form>
        );
      case 'delete':
        return (
          <div>
            <h2>Eliminar Usuario</h2>
            <p>¿Estás seguro de que deseas eliminar este usuario?</p>
            <button onClick={() => onConfirm('delete', data.id)}>Eliminar</button>
          </div>
        );
      case 'add':
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newData = {
                name: e.target.name.value,
                email: e.target.email.value,
                role: e.target.role.value,
              };
              onConfirm('add', null, newData);
            }}
          >
            <label>
              Nombre:
              <input type="text" name="name" placeholder="Ingrese el nombre" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" placeholder="Ingrese el email" required />
            </label>
            <label>
              Rol:
              <select name="role">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </label>
            <button type="submit">Agregar</button>
          </form>
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

UserActionModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired,
  data: PropTypes.object,
  onConfirm: PropTypes.func.isRequired,
};

export default UserActionModal;