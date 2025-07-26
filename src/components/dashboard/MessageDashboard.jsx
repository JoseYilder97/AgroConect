import { useState } from 'react';
import '../../styles/stylesdshboard.css';
import Navegation from './Navegation';
import TopNavegatio from './TopNavegatio';

import Dashboard from './Dashboard';

export default function MessageDashboard() {

  const initialData = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto', type: 'Producto' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto', type: 'Producto' },
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
          <Dashboard initialData={initialData} entityType="Mensajes " />
        </div>
      </div>
    </div>
  );
}