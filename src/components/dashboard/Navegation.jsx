
import PropTypes from 'prop-types';

import dogLogoDashboard from '../../../public/images/logo.png';
import { FaHome, FaUsers, FaMarker, FaProductHunt, FaCog, FaKey, FaSignOutAlt, FaClipboardList, FaBox, FaClipboardCheck, FaEnvelope, FaChartBar } from 'react-icons/fa';
import SettingsModal from './SettingsModal';
import { useState } from 'react';
import DynamicModal from './DynamicModal';

const MenuItem = ({ icon, title, link, isActive, onClick }) => (
  <li className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <a className="nav-link" href={link}>
      <span className="icon">{icon}</span>
      <span className="title">{title}</span>
    </a>
  </li>
);


const Navegation = ({ isActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };


  return (
    <>
    <nav className={`navigation ${isActive ? 'active' : ''}`}>
      <div className="logo">
        <img
          src={dogLogoDashboard}
          alt="Veterinaria"
          className={`logo-img ${isActive ? 'expanded' : ''}`}
        />
{/*         <a className={`a ${isActive ? 'hidden' : ''}`} href="">
          AgroConect
        </a> */}
      </div>

        <ul>
          <MenuItem icon={<FaHome />} title="Tablero" link="/dashboard" />
          <MenuItem icon={<FaUsers />} title="Usuarios" link="/UserDashboard" />
          <MenuItem icon={<FaBox />} title="Producto" link="/ProductDashboard" />
          <MenuItem icon={<FaClipboardList />} title="Pedido" link="/OrderDashboard" />
          <MenuItem icon={<FaClipboardCheck />} title="Detalle Pedido" link="/OrderDetailDashboard" />
          <MenuItem icon={<FaEnvelope />} title="Mensajes" link="/MessageDashboard" />
          <MenuItem icon={<FaChartBar />} title="Reportes" link="/ReportDashboard" />
          <div className="li_items">
              <MenuItem icon={<FaCog />} title="Perfil" onClick={() => openModal('profile')} />
              <MenuItem icon={<FaKey />} title="Seguridad" onClick={() => openModal('security')} />
              <MenuItem icon={<FaSignOutAlt />} title="Abaut" onClick={() => openModal('about')} />
              <MenuItem icon={<FaSignOutAlt />} title="Sign Out" onClick={() => openModal('language')} />
          </div>
        </ul>
    </nav>
    {isModalOpen && <DynamicModal closeModal={closeModal} content={modalContent} />}
        </>
  );
};
Navegation.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Navegation;
