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
  
const CardBodyTable = () => {
  return (
    <div className="card-body table-responsive p-0">
    <table className="table table-striped table-valign-middle">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Ventas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="dist/img/default-150x150.png"
              alt="Producto 1"
              className="img-circle img-size-32 mr-2"
            />
            Algún Producto
          </td>
          <td>$13 USD</td>
          <td>
            <small className="text-success mr-1">
              <i className="fas fa-arrow-up"></i> 12%
            </small>
            12,000 Vendidos
          </td>

        </tr>
        <tr>
          <td>
            <img
              src="dist/img/default-150x150.png"
              alt="Producto 1"
              className="img-circle img-size-32 mr-2"
            />
            Otro Producto
          </td>
          <td>$29 USD</td>
          <td>
            <small className="text-warning mr-1">
              <i className="fas fa-arrow-down"></i> 0.5%
            </small>
            123,234 Vendidos
          </td>
 
        </tr>
        <tr>
          <td>
            <img
              src="dist/img/default-150x150.png"
              alt="Producto 1"
              className="img-circle img-size-32 mr-2"
            />
            Producto Increíble
          </td>
          <td>$1,230 USD</td>
          <td>
            <small className="text-danger mr-1">
              <i className="fas fa-arrow-down"></i> 3%
            </small>
            198 Vendidos
          </td>
   
        </tr>
        <tr>
          <td>
            <img
              src="dist/img/default-150x150.png"
              alt="Producto 1"
              className="img-circle img-size-32 mr-2"
            />
            Artículo Perfecto
            <span className="badge bg-danger">NUEVO</span>
          </td>
          <td>$199 USD</td>
          <td>
            <small className="text-success mr-1">
              <i className="fas fa-arrow-up"></i> 63%
            </small>
            87 Vendidos
          </td>
  
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default CardBodyTable