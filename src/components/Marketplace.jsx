import { useState } from "react";
import { FaSearch, FaFacebookF,  FaPhoneAlt, FaInstagram, FaLinkedinIn, FaBars, FaTwitter, FaUser, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import  Carousel from "./Carousel";


import "../style.css";
import SectionImages from "./SectionImages";
import MarketplaceImageCarousel from "./marketplace/MarketplaceImageCarousel";
import DiscountBanner from "./marketplace/DiscountBanner";
const categories = [
  "Fresh Meat",
  "Vegetables",
  "Fruit & Nut Gifts",
  "Fresh Berries",
  "Ocean Foods",
  "Butter & Eggs",
  "Fastfood",
  "Fresh Onion",
  "Papaya & Crisps",
  "Oatmeal",
  "Fresh Bananas",
];
const image = [
  "../../public/images/verdura.jpg",
  "../../public/images/verdura1.jpg",
  "../../public/images/verdura2.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura3.jpg",



]

export default function Marketplace() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Top Bar */}
      <div className="dashboard-container">
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="social-icons">
          <a href="#" className="social-icons"><FaFacebookF size={24} /></a>
          <a href="#" className="social-icons"><FaInstagram size={24} /></a>
          <a href="#" className="social-icons"><FaTwitter  size={24} /></a>
          <a href="#" className="social-icons"><FaLinkedinIn size={24} /></a>
          </div>
          <div className="user-options">
            <select className="language-selector">
              <option>English</option>
              <option>Español</option>
            </select>
            <a href="#" className="login-link">
              <FaUser /> <span>Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>AgroConect</h1>
        </div>
        <div className="main-nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Pages</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Contact</a>
        </div>

        <div className="cart-section">
          <span className="cart-price">$150.00</span>
          <FaShoppingCart size={22} className="cart-icon" />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </header>
      </div>

      {/* Main Section */}
      <main className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
        <div className="sidebar-section">
          <div className="sidebar-header" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          
            <span>All Departments</span>
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

        {/* Content Section */}
       
        </div>
        <div className="content-section">
          <div className="content-side_items">
            <div className="search-bar">
              {/* Oculto en móvil, visible desde 'md' */}
              <select className="category-selector">
                <option>Todas las Categorias</option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
              <input type="text" placeholder="What do you need?" className="search-input" />
              <button className="search-button">
                <FaSearch />
              </button>
            </div>
            <div className="contact-info">
              <div className="contact-section">
                <FaPhoneAlt className="phone-icon" />
              </div>
              <div className="info_time">
                <span className="phone-number">+65 11.188.888</span>
                <span className="support-text">support 24/7 time</span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-text">
              <h3 className="">FRUIT FRESH</h3>
              <h2 className="">Vegetable 100% Organic</h2>
              <p>Free Pickup and Delivery Available</p>
              <button className="shop-button">
                Shop Now
              </button>
            </div>
            <img src={image[0]} alt="Vegetables" className="hero-image" />
          </div>
        </div>
      </main>
                <div className="container_info_praci">
                  <MarketplaceImageCarousel/>
                </div>
                <DiscountBanner/>
    


      {/* Carousel Section */}
        <SectionImages />

      <div className="carousel-section">
      <Carousel title="Últimos productos" />
      <Carousel title="Ofertas especiales" />
      <Carousel title="Más vendidos" />
      <Carousel title="Recomendados para ti" />

      </div>
    </div>
  );
} 