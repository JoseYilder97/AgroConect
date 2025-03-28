import { useState } from 'react';
import '../../stylesdshboard.css';
import CarInfoUser from './CarInfoUser';
import CardBodyTable from './CardBodyTable';
import CardInfoMarkeplace from './CardInfoMarkeplace';
import Navegation from './Navegation';
import TopNavegatio from './TopNavegatio';

export default function DashboardT() {
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
          <CardBodyTable />
          <CardInfoMarkeplace />
        </div>
      </div>
    </div>
  );
}