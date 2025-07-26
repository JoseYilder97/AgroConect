import { FaFacebookF ,FaInstagram,FaTwitter ,FaLinkedinIn   } from 'react-icons/fa';



import "../../index.css";
import BoxIcon from './BoxIcon';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y Nombre */}
        <div className="footer-brand">
          <h2>Agroconect</h2>
          <p>Tu mejor opción en el mercado.</p>
        </div>
          <BoxIcon/>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
