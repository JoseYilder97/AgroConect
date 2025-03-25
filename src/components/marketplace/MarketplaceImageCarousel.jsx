import { FaHeart, FaSyncAlt, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "../../style.css";
//lista de imagenes 
// Lista de productos
const products = [
  { id: 1, name: "Fresh Meat", category: "Meat", image: "../../public/images/verdura.jpg", price: "$25.00" },
  { id: 2, name: "Vegetables", category: "Vegetables", image: "../../public/images/verdura1.jpg", price: "$15.00" },
  { id: 3, name: "Fruit & Nut Gifts", category: "Fruits", image: "../../public/images/verdura2.jpg", price: "$30.00" },
  { id: 4, name: "Fresh Berries", category: "Fruits", image: "../../public/images/verdura3.jpg", price: "$20.00" },
  { id: 5, name: "Ocean Foods", category: "Seafood", image: "../../public/images/verdura1.jpg", price: "$40.00" },
  { id: 6, name: "Butter & Eggs", category: "Dairy", image: "../../public/images/verdura2.jpg", price: "$10.00" },
  { id: 7, name: "Fastfood", category: "Fastfood", image: "../../public/images/verdura3.jpg", price: "$12.00" },
  { id: 8, name: "Fresh Onion", category: "Vegetables", image: "../../public/images/verdura.jpg", price: "$8.00" },
];

export default function MarketplaceImageCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products">
        <h2>Productos destacados</h2>

      {/* Filtro de Categorías */}
      <div className="filter-section">
        {["All", "Meat", "Vegetables", "Fruits", "Seafood", "Dairy", "Fastfood"].map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de Productos */}
      <div className="product-card-section">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card-images">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-icons">
                <button className="icon-button"><FaHeart /></button>
                <button className="icon-button"><FaSyncAlt /></button>
                <button className="icon-button"><FaShoppingCart /></button>
              </div>
            </div>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-prece">{product.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}