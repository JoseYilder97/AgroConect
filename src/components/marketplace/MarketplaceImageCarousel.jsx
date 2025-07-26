import { FaHeart, FaSyncAlt, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "../../styles/stylesdshboard.css";

import verdura from "../../assets/images/verdura.png";
import verdura1 from "../../assets/images/verdura1.jpg";
import verdura2 from "../../assets/images/verdura2.jpg";
import verdura3 from "../../assets/images/verdura3.jpg";
import { useCart } from "./CartContext ";

// Lista de productos con imágenes importadas
const products = [
  { id: 1, name: "Guayaba", category: "Fruta", image: verdura, price: 15000 },
  { id: 2, name: "Vegetales", category: "Vegetales", image: verdura1, price: 15000 },
  { id: 3, name: "Masorca", category: "Verdura", image: verdura2, price: 30000 },
  { id: 4, name: "Zanahoria", category: "Verdura", image: verdura3, price: 20000 },
];

export default function MarketplaceImageCarousel() {
  const { addToCart } = useCart(); // hook para acceder a addToCart
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products">
      <h2>Productos destacados</h2>

      <div className="filter-section">
        {["Todos", "Carnes", "Vegetales", "Frutas", "Mariscos", "Lácteos", "Rápida"].map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-card-section">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card-images">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-icons">
                <button className="icon-button"><FaHeart /></button>
                <button className="icon-button"><FaSyncAlt /></button>
                <button className="icon-button" onClick={() => addToCart(product)}>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-prece">${product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
