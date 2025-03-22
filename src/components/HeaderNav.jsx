import dogLogo from '../../public/images/logo-conect.png';

import { FaCalendarDay ,FaHome,FaUser,/* FaPhoneAlt */ FaStore   } from 'react-icons/fa';


import "../index.css";

import { Link } from 'react-router-dom';


const HeaderNav =() =>{
  return (
    <nav className="navbars">
      <div className="navbar_fixed">
        <span className="material-symbols-outlined onclick">menu</span>
        <div className="logos">
          <picture>
            <img src={dogLogo} alt="dog" />
          </picture>
        </div>
        <div className="items-header">
          <div className="items_head">
            <div className="nav">
              <nav>
                <ul>
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" data-toggle="tab">
                      <span className="material-symbols-outlined"><FaHome/></span>Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="" className="nav-link" data-toggle="tab">
                      <span className="material-symbols-outlined"><FaStore /></span>
                      Producto
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link" data-toggle="tab">
                      <span className="material-symbols-outlined"><FaUser /></span>Quienes
                      Somos
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="" className="nav-link" data-toggle="tab">
                      <span className="material-symbols-outlined"><FaCalendarDay /></span>
                      Precio
                    </Link>
                  </li>
{/*                   <li className="nav-item">
                    <Link to="" className="nav-link" data-toggle="tab">
                      <span className="material-symbols-outlined"><FaPhoneAlt /></span>Contactenos
                    </Link>
                  </li> */}
                </ul>
              </nav>
              <form action="" method="post"></form>
            </div>
            <div className="nav_nav">
              <nav className="menu-nav">
                <ul>
                  <li>
                    <Link to="index.php">Inicio</Link>
                  </li>
                  <li>
                    <Link to="medicas.php">Citas Medicas</Link>
                  </li>
                  <li>
                    <Link to="somos.php">Quienes Somos</Link>
                  </li>
                  <li>
                    <Link to="slider_shping.php">Productos</Link>
                  </li>
                  <li>
                    <Link to="#">contactenos</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <span className="material-symbols-outlined"><FaUser /></span>
          <Link to="/Dashboard">Iniciar sesión</Link>
        </div>
      </div>
    </nav>
  );
}
export default HeaderNav;
