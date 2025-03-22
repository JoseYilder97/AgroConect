import { useState } from 'react';
import '../../stylesdshboard.css';
import Navegation from './Navegation';
import TopNavegatio from './TopNavegatio';
import UserTable from './UserTable';
import ProductTable from './ProductTable';

export default function Product() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container_dash ${isActive ? 'active' : ''}`}>
      {/* Pasar el estado y la función toggleMenu a Navegation */}
      <Navegation isActive={isActive} toggleMenu={toggleMenu} />

      <div className={`main ${isActive ? 'active' : ''}`}>
        {/* Pasar el estado y la función toggleMenu a TopNavegatio */}
        <TopNavegatio isActive={isActive} toggleMenu={toggleMenu} />
        <div className="informacion">
          <ProductTable />   
        </div>
      </div>
    </div>
  );
}