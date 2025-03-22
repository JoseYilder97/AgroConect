import React from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaSearch } from 'react-icons/fa';
import Profile from './Profile';

const TopNavegatio = ({ toggleMenu }) => {
  return (
    <div className="topbar_main">
      <div className="toggle" onClick={toggleMenu}>
        <span className="icon">
          <FaBars />
        </span>
      </div>
      <div className="search">
        <form>
          <label htmlFor="nombre">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="¿Qué estás buscando?"
            />
          </label>
          <span className="icon">
            <FaSearch />
          </span>
        </form>
      </div>
      <div className="perfil_usuario">
        <Profile />
      </div>
    </div>
  );
};
TopNavegatio.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default TopNavegatio;
