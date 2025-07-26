import { useState } from "react";
import { FaSearch, FaPhoneAlt, FaBars, FaUser, FaChevronDown } from "react-icons/fa";
import Carousel from "./Carousel";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../../styles/marketplace.css";
import SectionImages from "./SectionImages";
import MarketplaceImageCarousel from "./MarketplaceImageCarousel";
import DiscountBanner from "./DiscountBanner";
import { useAuth } from '../auth/AuthContext';
import Profile from "../dashboard/Profile";
import CanvaCard from "./Card"; // Asegúrate de importar CanvaCard
import Footer from "../layout/Footer";

import logo from "../../assets/images/logo.png"; // Importa el logo correctamente
import verdura from "../../assets/images/verdura.png";
import naranja from "../../assets/images/naranja.png";
import verdura2 from "../../assets/images/verdura2.jpg";
import verdura3 from "../../assets/images/verdura3.jpg";
import BoxIcon from "../layout/BoxIcon";
import FloatingButton from "./FloatingButton";
import CartIcon from "./CartIcon";

const image = [verdura, naranja, verdura2, verdura3, verdura]; // Usa las imágenes importadas

const categories = [
  "Carne Fresca",
  "Vegetales",
  "Frutas y Nueces",
  "Frutos Rojos",
  "Pescados y Mariscos",
  "Mantequilla y Huevos",
  "Comida Rápida",
  "Cebolla Fresca",
  "Papaya y Snacks",
  "Avena",
  "Bananas Frescas",
];


export default function Marketplace() {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [showCarMenu, setShowCarMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCanvaCard, setShowCanvaCard] = useState(false); 
  const navigateuser = useNavigate();
  const [cantidad, setCantidad] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const precioProducto = 10; // Puedes cambiar este valor según el producto
  const agregarAlCarrito = () => {
    setCantidad(cantidad + 1);
    setPrecioTotal(precioTotal + precioProducto);
  };
  const handleCarMenuClick = () => {
    setShowCarMenu(!showCarMenu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      
    }
  };


  const handleCartClick = () => {
    setShowCanvaCard(true); 
  };

  const handleCloseCanvaCard = () => {
    setShowCanvaCard(false); 
  };

  return (
    <div className="markerplace">
      {/* Top Bar */}
      <div className="container_markerplace">
        <div className="top-bar">
          <div className="top-bar-content">
          <BoxIcon/>
            <div className="user-options">
              <select className="language-selector">
                <option>English</option>
                <option>Español</option>
              </select>
              <div>
                {user ? (
                  <div>
                    <Profile />
                  </div>
                ) : (
                  <div className="perfil_usuario">
                    <FaUser className="social-icons" onClick={() => navigateuser('Login')} />
                    <Link to="/Login">Iniciar sesión</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div>


          <header className="header">
            <div className="logo">
              <img src={logo} alt='Perfil' />
            </div>
            <div className="main-nav">
              <a href="#" className="nav-links">Home</a>
              <a href="#" className="nav-links">Shop</a>
              <a href="#" className="nav-links">Pages</a>
              <a href="#" className="nav-links">Blog</a>
              <a href="#" className="nav-links">Contact</a>
            </div>

            <div className="cart-section">
                <CartIcon onClick={handleCartClick} />
            </div>
          </header>
          {showCanvaCard && <CanvaCard onClose={handleCloseCanvaCard} />}
        </div>
      </div>

      {/* Main Section */}
      <main className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-header" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
              <span>Algunas categorias</span>
              <FaChevronDown />
            </div>
            {menuOpen && (
              <ul className="sidebar-menu">
                {categories.map((category) => (
                  <li key={category} className="sidebar-item">
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          <div className="content-side_items">
            <div className="search-bar">
              <select className="category-selector">
                <option>Todas las Categorias</option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="¿Qué necesitas?"
                  className="search-input"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-section">
                <FaPhoneAlt className="phone-icon" />
              </div>
              <div className="info_time">
                <span className="phone-number">+57 300 123 4567</span>
                <span className="support-text">Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-text">
              <h3 className="">FRUTAS FRESCAS</h3>
              <h2 className="">Fruta 100% del nuestro campo</h2>
              <p>Recogida y entrega gratuita disponible</p>
              <button className="shop-button">
                ver más
              </button>
            </div>
            <div className="hero-section_image">
            <img src={image[0]} alt="Vegetables" className="hero-image" />
            </div>
          </div>
        </div>
      </main>
      {user && <FloatingButton />}

      <div className="container_info_praci">
      <MarketplaceImageCarousel agregarAlCarrito={agregarAlCarrito} />

      </div>
      <DiscountBanner />

      {/* Carousel Section */}
      <SectionImages />

      <div className="carousel-section">
        <Carousel title="Últimos productos" />
        <Carousel title="Ofertas especiales" />
        <Carousel title="Más vendidos" />
        <Carousel title="Recomendados para ti" />
      </div>
      <Footer />
    </div>
  );
}