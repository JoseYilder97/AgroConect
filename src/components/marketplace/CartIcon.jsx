import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext ";
import Card from "./Card";

function CartIcon() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleCartClick = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  return (
    <div className="cart-icon-container">

      <span className="cart-price">{cart.length}</span>
      
      <FaShoppingCart size={22} className="cart-icon" onClick={handleCartClick} />
    
      {isOpen && <Card onClose={handleCloseCart} />}
    </div>
  );
}

export default CartIcon;
