import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import '../../stylesdshboard.css'; // Asegúrate de tener los estilos del modal

const SettingsModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h2>Configuraciones</h2>
        <p>Aquí puedes ajustar las configuraciones de tu cuenta.</p>
        {/* Agrega aquí las configuraciones que desees */}
        <div className="settings-options">
          <label>
            <input type="checkbox" />
            Activar notificaciones
          </label>
          <label>
            <input type="checkbox" />
            Modo oscuro
          </label>
        </div>
        <button className="save-btn" onClick={closeModal}>
          Guardar
        </button>
      </div>
    </div>
  );
};
SettingsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default SettingsModal;
