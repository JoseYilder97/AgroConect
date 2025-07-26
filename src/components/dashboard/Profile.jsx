import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useAuth } from '../auth/AuthContext';
import '../../styles/stylesdshboard.css';
import profileIcon from '../../assets/images/profile-icon.png';
import { Link } from "react-router-dom";

import {
  FaChevronDown,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaPlus
} from 'react-icons/fa';

export default function Profile() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/Login', { replace: true });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-menu" ref={menuRef}>
      <div
        className="profile-icon"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="dropdownMenu"
      >
        {user ? (
          <>
            <img src={profileIcon} alt="Perfil" />
            <h5>{user.username || 'Usuario'}</h5>
            <span>
              <FaChevronDown />
            </span>
          </>
        ) : (
          <h5></h5>
        )}
      </div>

      <div
        className={`dropdown-menus ${isMenuOpen ? 'open' : ''}`}
        id="dropdownMenu"
      >
        <ul>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <span className="icon">
                <FaUserCircle />
              </span>
              Ver Perfil
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <span className="icon">
                <FaCog />
              </span>
              Configuración
            </a>
          </li>
          <li>
            <Link to="/dashboard" className="your-link-class">
              <span className="icon">
                <FaPlus />
              </span>
              Ofrecer producto
            </Link>

          </li>
          <li>
            <div className="dropdown-divider">
              <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                <span className="icon">
                  <FaSignOutAlt />
                </span>
                Cerrar Sesión
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}