import { useState } from 'react';
import ActionModal from './ActionModal';

const TableComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState('');
  const [modalData, setModalData] = useState({});

  const openAddModal = () => {
    setActionType('add');
    setModalData({ type: 'Elemento' }); // Cambia 'Elemento' por el tipo que desees agregar
    setIsModalOpen(true);
  };

  const handleConfirm = (action, id) => {
    console.log(`Acción: ${action}, ID: ${id}`);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="add-button" onClick={openAddModal}>
        + Agregar Nuevo
      </button>
      {/* Aquí iría tu tabla */}
      {isModalOpen && (
        <ActionModal
          closeModal={() => setIsModalOpen(false)}
          actionType={actionType}
          data={modalData}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default TableComponent;