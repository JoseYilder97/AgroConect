import { FaFacebookF ,FaInstagram,FaTwitter ,FaLinkedinIn   } from 'react-icons/fa';

import "../../index.css";


const BoxIcon = () => {
  return (
    <div className="footer-social">
    <a href="#" className="social-link"><FaFacebookF size={24} /></a>
    <a href="#" className="social-link"><FaInstagram size={24} /></a>
    <a href="#" className="social-link"><FaTwitter  size={24} /></a>
    <a href="#" className="social-link"><FaLinkedinIn size={24} /></a>
  </div>
  );
};

export default BoxIcon;
