import React from "react";
import PropTypes from "prop-types";
import { useCart } from "./CartContext ";
import "../../styles/marketplace.css";
import { FaArrowLeft, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";

function Card({ onClose }) {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="off-canvas open">
      <div className="off-canvas-header">
        <FaShoppingCart size={22} className="off-canvas-header_cart-icon" onClick={onClose} />
        <h3>Carrito de Compras</h3>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="off-canvas-content">
        <div className="off-canvas-content_scrole">
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item_end_name">
                <img src={item.image} alt={item.name} className="cart-item-image" />

              </div>
              <div className="cart-item_end_detai">
                <div className="price_detail">
                  <h4>{item.name}</h4>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </div>
                <p>Precio Unitario: ${item.price.toFixed()}</p>
                <div className="price_list">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                    <p>Precio Total: ${(item.price * item.quantity).toFixed()}</p>

                </div>

              </div>

            </div>
          ))
        )}
        </div>
        {cart.length > 0 && (
          <div className="cart-total">
            <div className="car-total_price">
              <h3>Total: ${total.toFixed()}</h3>
              <button className="checkout-button">Ir a pagar</button>
              <span className="sign_outalt" onClick={onClose}><FaArrowLeft className="icons" />Seguir comprando</span>
            </div>



          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Card;
