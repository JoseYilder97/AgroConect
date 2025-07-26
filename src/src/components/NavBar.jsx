import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Mi Sitio</h1>

        {/* Botón de menú para móviles */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú - Se oculta en móviles y aparece vertical cuando se abre */}
      <ul className={`absolute top-14 left-0 w-full bg-blue-600 md:static md:flex md:space-x-4 md:bg-blue-500 md:w-auto transition-all duration-300 ease-in-out 
        ${isOpen ? "block z-50" : "hidden"}`}>
        <li className="p-3 border-b md:border-none"><a href="#">Inicio</a></li>
        <li className="p-3 border-b md:border-none"><a href="#">Servicios</a></li>
        <li className="p-3"><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
