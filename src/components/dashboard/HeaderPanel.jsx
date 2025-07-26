import React from 'react'
import {
    FaSearch,
    FaFacebookF,
    FaPhoneAlt,
    FaInstagram,
    FaLinkedinIn,
    FaBars,
    FaTwitter,
    FaUser,
    FaShoppingCart,
    FaChevronDown,
    FaCalendarDay,
    FaHome, FaStore
  } from 'react-icons/fa'
  import { AiOutlineClose } from 'react-icons/ai'
  import '../../styles/stylesdshboard.css';
export const HeaderPanel = () => {
  return (
    <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Panel de Control</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <a href="#">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Panel de Control</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  )
}
