import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../stylesdshboard.css';
import Navegation from './Navegation';
import TopNavigation from './TopNavegatio';
import DataTable from './DataTable';
import AddUserModal from './AddUserModal';

const UserDashboard = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [modalData, setModalData] = useState(null);
  const [users, setUsers] = useState(data);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleAddUser = () => {
    setModalAction('add');
    setModalData({ type: 'Usuario' });
    setModalOpen(true);
  };

  const handleEditUser = (user) => {
    setModalAction('edit');
    setModalData({ ...user, type: 'Usuario' });
    setModalOpen(true);
  };

  const handleDeleteUser = (user) => {
    setModalAction('delete');
    setModalData({ ...user, type: 'Usuario' });
    setModalOpen(true);
  };

  const handleConfirm = (action, id, updatedData) => {
    if (action === 'edit') {
      setUsers(users.map((user) => (user.id === id ? updatedData : user)));
      alert(`Usuario con ID ${id} editado.`);
    } else if (action === 'delete') {
      setUsers(users.filter((user) => user.id !== id));
      alert(`Usuario con ID ${id} eliminado.`);
    } else if (action === 'add') {
      const newUser = { id: users.length + 1, ...updatedData };
      setUsers([...users, newUser]);
      alert('Nuevo usuario agregado.');
    }
    setModalOpen(false);
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Rol' },
  ];

  return (
    <div className={`container_dash ${isActive ? 'active' : ''}`}>
      <Navegation isActive={isActive} toggleMenu={toggleMenu} />

      <div className={`main ${isActive ? 'active' : ''}`}>
        <TopNavigation isActive={isActive} toggleMenu={toggleMenu} />
        <div className="informacion">
          <h1>Dashboard de Usuarios</h1>
          <button className="add-button" onClick={handleAddUser}>
            + Agregar Usuario
          </button>
          {users.length > 0 ? (
            <DataTable
              data={users}
              columns={columns}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
          ) : (
            <p>No hay datos disponibles.</p>
          )}
        </div>
      </div>

      {modalOpen && (
        <AddUserModal
          closeModal={() => setModalOpen(false)}
          actionType={modalAction} // 'add', 'edit', 'delete'
          data={modalData} // Datos del usuario (para editar o eliminar)
          onConfirm={(action, id, updatedData) => handleConfirm(action, id, updatedData)}
        />
      )}
    </div>
  );
};

UserDashboard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

UserDashboard.defaultProps = {
  data: [],
};

export default UserDashboard;