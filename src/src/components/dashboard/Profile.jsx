import { useState, useEffect, useRef } from 'react'
import '../../stylesdshboard.css'
import profileIcon from '../../../public/images/profile-icon.png' // Ajusta la ruta según tu proyecto

import {
  FaChevronDown,
  FaUserCircle,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa'

export default function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null) // Referencia para el menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='profile-menu' ref={menuRef}>
      <div
        className='profile-icon'
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls='dropdownMenu'
      >
        <img src={profileIcon} alt='Perfil' />
        <h5>Jose Chilhueso</h5>
        <span>
          <FaChevronDown />
        </span>
      </div>

      <div
        className={`dropdown-menus ${isMenuOpen ? 'open' : ''}`}
        id='dropdownMenu'
      >
        <ul>
          <li>
            <a href='#' onClick={(e) => e.preventDefault()}>
              <span className='icon'>
                <FaUserCircle />
              </span>
              Ver Perfil
            </a>
          </li>
          <li>
            <a href='#' onClick={(e) => e.preventDefault()}>
              <span className='icon'>
                <FaCog />
              </span>
              Configuración
            </a>
          </li>
          <li>
            <div className='dropdown-divider'>
              <a href='#' onClick={(e) => e.preventDefault()}>
                <span className='icon'>
                  <FaSignOutAlt />
                </span>
                Cerrar
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
