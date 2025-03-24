import { useState } from 'react';
import '../../stylesdshboard.css';
import Navegation from './Navegation';
import TopNavegatio from './TopNavegatio';

import Dashboard from './Dashboard';
import DataTable from './DataTable';

export default function OrderDashboard() {

  const initialData = [
    { id: 1, name: 'Usuario 1', description: 'Descripción del usuario', type: 'Usuario' },
    { id: 2, name: 'Usuario 2', description: 'Descripción del usuario', type: 'Usuario' },
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
         <DataTable initialData={initialData} entityType="Pedido" />
        </div>
      </div>
    </div>
  );
}