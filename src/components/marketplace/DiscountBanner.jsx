import "../../styles/marketplace.css";

import verdura from "../../assets/images/verdura.png";
import naranja from "../../assets/images/naranja.png";
import verdura2 from "../../assets/images/verdura2.jpg";
import verdura3 from "../../assets/images/verdura3.jpg";


const image = [verdura, naranja, verdura2, verdura3, verdura];

export default function DiscountBanner() {
  return (
    <div className="discount-banner-container">
      {/* Primer Anuncio */}
      <div className="discount-banner">
        <div className="discount-content">
          <h2 className="discount-title">Frutas Secas y Bebidas</h2>
          <p className="discount-subtitle">Con 25% de descuento en todos los tés</p>
          <button className="discount-button">COMPRAR AHORA</button>
        </div>
        <div className="discount-images">
          <img
            src={image[0]}
            alt="Tropicana Juice"
            className="discount-image"
          />
        </div>
      </div>

      {/* Segundo Anuncio */}
      <div className="discount-banner">
        <div className="discount-content">
          <h2 className="discount-title">Frutas de Verano</h2>
          <p className="discount-subtitle">Jugo de Frutas 100% Puro y Natural</p>
          <button className="discount-button">COMPRAR AHORA</button>
        </div>
        <div className="discount-images">
          <img
            src={image[1]}
            alt="Fruit Basket"
            className="discount-image"
          />
        </div>
      </div>
    </div>
  );
}