import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import '../../stylesdshboard.css'; // Asegúrate de tener los estilos del modal

const DynamicModal = ({ closeModal, content }) => {
  // Contenido dinámico basado en la prop "content"
  const renderContent = () => {
    switch (content) {
      case 'profile':
        return (
          <div>
            <h2>Perfil</h2>
            <p>Actualiza tu información de perfil aquí.</p>
            <label>
              Nombre:
              <input type="text" placeholder="Ingresa tu nombre" />
            </label>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2>Notificaciones</h2>
            <p>Configura tus preferencias de notificaciones.</p>
            <label>
              <input type="checkbox" />
              Activar notificaciones
            </label>
          </div>
        );
      case 'theme':
        return (
          <div>
            <h2>Tema</h2>
            <p>Selecciona tu tema preferido.</p>
            <select>
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
            </select>
          </div>
        );
      case 'security':
        return (
          <div>
            <h2>Seguridad</h2>
            <p>Actualiza tu contraseña o configura opciones de seguridad.</p>
            <label>
              Nueva contraseña:
              <input type="password" placeholder="Ingresa tu nueva contraseña" />
            </label>
          </div>
        );
      case 'language':
        return (
          <div>
            <h2>Idioma</h2>
            <p>Selecciona tu idioma preferido.</p>
            <select>
              <option value="es">Español</option>
              <option value="en">Inglés</option>
              <option value="fr">Francés</option>
            </select>
          </div>
        );
      case 'about':
        return (
          <div>
            <h2>Acerca de</h2>
            <p>Información sobre la aplicación y su versión.</p>
            <p>Versión: 1.0.0</p>
          </div>
        );
      default:
        return <p>Contenido no disponible.</p>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        {renderContent()}
        <button className="save-btn" onClick={closeModal}>
          Guardar
        </button>
      </div>
    </div>
  );
};

DynamicModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired, // Define qué contenido mostrar
};

export default DynamicModal;