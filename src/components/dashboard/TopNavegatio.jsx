import React from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaSearch } from 'react-icons/fa';
import Profile from './Profile';
import '../../styles/stylesdshboard.css';
const TopNavegatio = ({ toggleMenu }) => {
  return (
    <div className="topbar_main">
      <div className="topbar_mains">
      <div className="toggle" onClick={toggleMenu}>
        <span className="icon">
          <FaBars />
        </span>
      </div>
  
      <div className="perfil_usuario">
        <Profile />
      </div>
      </div>
      
    </div>
  );
};
TopNavegatio.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default TopNavegatio;
