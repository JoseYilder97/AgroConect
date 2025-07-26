
import { useState } from 'react';
import '../../styles/stylesdshboard.css';
import Navegation from './Navegation';
import TopNavegatio from './TopNavegatio';
import CustomerTable from './CustomerTable';

export default function Customer() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container_dash ${isActive ? 'active' : ''}`}>   
      <Navegation isActive={isActive} toggleMenu={toggleMenu} />

      <div className={`main ${isActive ? 'active' : ''}`}>
        <TopNavegatio isActive={isActive} toggleMenu={toggleMenu} />
        <div className="informacion">

          <CustomerTable />
        </div>
      </div>
    </div>
  );
}