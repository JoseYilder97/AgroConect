import { useState } from 'react';
import '../../stylesdshboard.css';
import Navegation from './Navegation';
import TopNavegatio from './TopNavegatio';

import Dashboard from './Dashboard';

export default function OrderDetailDashboard() {

    const initialData = [
        { id: 1, name: 'Detalle 1', description: 'Descripción del detalle', type: 'DetallePedido' },
        { id: 2, name: 'Detalle 2', description: 'Descripción del detalle', type: 'DetallePedido' },
      ];
    

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
         <Dashboard initialData={initialData} entityType="Detalle Dedido" />
        </div>
      </div>
    </div>
  );
}