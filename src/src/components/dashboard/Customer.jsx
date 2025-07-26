

import { useState } from 'react';
import '../../stylesdshboard.css';
import CarInfoUser from './CarInfoUser';
import CardBodyTable from './CardBodyTable';
import CardInfoMarkeplace from './CardInfoMarkeplace';
import Navegation from './Navegation';
import TopNavegatio from './TopNavegatio';
import Product from './ProductDashboard';
import CustomerTable from './CustomerTable';

export default function Customer() {
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
        
          <CustomerTable />
        </div>
      </div>
    </div>
  );
}