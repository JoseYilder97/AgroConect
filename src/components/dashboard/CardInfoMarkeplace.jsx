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
const CardInfoMarkeplace = () => {
  return (
    <div className="card">
    <div className="card-header border-0">
      <div className="d-flex justify-content-between">
        <h3 className="card-title">Producto</h3>
        <a href="javascript:void(0);">Ver Reporte</a>
      </div>
    </div>
    <div className="card-body-card">
      <div className="d-flex">
        <p className="d-flex flex-column">
          <span className="text-bold text-lg">820</span>
          <span>Visitantes en el Tiempo</span>
        </p>
        <p className="ml-auto d-flex flex-column text-right">
          <span className="text-success">
            <i className="fas fa-arrow-up"></i> 12.5%
          </span>
          <span className="text-muted">Desde la semana pasada</span>
        </p>
      </div>
      <div className="position-relative mb-4">
        <canvas id="visitors-chart" height="200"></canvas>
      </div>
      <div className="d-flex flex-row justify-content-end">
        <span className="mr-2">
          <i className="fas fa-square text-primary"></i> Esta Semana
        </span>
        <span>
          <i className="fas fa-square text-gray"></i> Semana Pasada
        </span>
      </div>
    </div>
  </div>
  )
}

export default CardInfoMarkeplace