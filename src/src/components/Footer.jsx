import { FaFacebookF ,FaInstagram,FaTwitter ,FaLinkedinIn   } from 'react-icons/fa';



import "../index.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y Nombre */}
        <div className="footer-brand">
          <h2>Agroconect</h2>
          <p>Tu mejor opción en el mercado.</p>
        </div>

        {/* Redes Sociales */}
        <div className="footer-social">
          <a href="#" className="social-link"><FaFacebookF size={24} /></a>
          <a href="#" className="social-link"><FaInstagram size={24} /></a>
          <a href="#" className="social-link"><FaTwitter  size={24} /></a>
          <a href="#" className="social-link"><FaLinkedinIn size={24} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
