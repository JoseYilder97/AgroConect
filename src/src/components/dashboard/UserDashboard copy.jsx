import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../stylesdshboard.css';
import Navegation from './Navegation';
import TopNavigation from './TopNavegatio';
import DataTable from './DataTable'; // Asegúrate de importar el componente DataTable
import AddUserModal from './AddUserModal';

const UserDashboard = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(data);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleAddUser = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addUser = (newUser) => {
    const newUserWithId = { id: users.length + 1, ...newUser };
    setUsers([...users, newUserWithId]);
  };

  const handleEditUser = (user) => {
    alert(`Editar usuario: ${user.name}`);
    // Aquí puedes implementar la lógica para editar un usuario
  };

  const handleDeleteUser = (user) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
    alert(`Usuario eliminado: ${user.name}`);
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

      {isModalOpen && (
        <AddUserModal closeModal={closeModal} onAddUser={addUser} />
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