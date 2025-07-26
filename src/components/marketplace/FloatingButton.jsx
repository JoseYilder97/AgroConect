import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa"; 
import "../../styles/marketplace.css"; 
export default function FloatingButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Dashboard"); 
  };

  return (
    <button className="floating-button" onClick={handleClick}>
      <FaPlus className="icon" /> <Link >Añadir a la venta</Link>
    </button>
  );
}