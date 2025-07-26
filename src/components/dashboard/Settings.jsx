import React, { useState } from 'react';
import '../../styles/stylesdshboard.css';
import { FaUser, FaBell, FaPalette, FaSave } from 'react-icons/fa';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [profileName, setProfileName] = useState('Usuario');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  const handleSave = () => {
    alert('Configuraciones guardadas con éxito.');
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Configuraciones</h2>

      {/* Sección de Perfil */}
      <div className="settings-section">
        <h3><FaUser /> Perfil</h3>
        <label htmlFor="profileName">Nombre de usuario:</label>
        <input
          type="text"
          id="profileName"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
      </div>

      {/* Sección de Tema */}
      <div className="settings-section">
        <h3><FaPalette /> Tema</h3>
        <label htmlFor="theme">Selecciona un tema:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>

      {/* Sección de Notificaciones */}
      <div className="settings-section">
        <h3><FaBell /> Notificaciones</h3>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsToggle}
          />
          <span className="slider"></span>
        </label>
        <span>{notifications ? 'Activadas' : 'Desactivadas'}</span>
      </div>

      {/* Botón Guardar */}
      <button className="settings-save-btn" onClick={handleSave}>
        <FaSave /> Guardar Cambios
      </button>
    </div>
  );
};

export default Settings;