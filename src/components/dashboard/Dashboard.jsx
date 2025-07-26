import { useState } from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';
import ActionModal from './ActionModal';
import '../../styles/stylesdshboard.css';
const Dashboard = ({ initialData, entityType }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [modalData, setModalData] = useState(null);

  const [data, setData] = useState(initialData);

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nombre' },
    { key: 'description', label: 'Descripción' },
    { key: 'type', label: 'Tipo' },
  ];

  const handleEdit = (item) => {
    setModalAction('edit');
    setModalData(item);
    setModalOpen(true);
  };

  const handleDelete = (item) => {
    setModalAction('delete');
    setModalData(item);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setModalAction('add');
    setModalData({ type: entityType });
    setModalOpen(true);
  };

  const handleConfirm = (action, id) => {
    if (action === 'edit') {
      alert(`Elemento con ID ${id} editado.`);
    } else if (action === 'delete') {
      setData(data.filter((item) => item.id !== id));
      alert(`Elemento con ID ${id} eliminado.`);
    } else if (action === 'add') {
      const newItem = {
        id: data.length + 1,
        name: 'Nuevo Elemento',
        description: 'Descripción del nuevo elemento',
        type: entityType,
      };
      setData([...data, newItem]);
      alert('Nuevo elemento agregado.');
    }
    setModalOpen(false);
  };

  return (
    <div className="dashboard">
      <h1>{entityType}</h1>
      <button className="add-button" onClick={handleAdd}>
        + Agregar Nuevo
      </button>
      <DataTable data={data} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
      {modalOpen && (
        <ActionModal
          closeModal={() => setModalOpen(false)}
          actionType={modalAction}
          data={modalData}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  initialData: PropTypes.array.isRequired,
  entityType: PropTypes.string.isRequired,
};

export default Dashboard;