import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth/AuthContext'; // Asegúrate de que el path sea correcto

import '../styles/stylesdshboard.css'
import DashboardT from '../components/dashboard/DashboardT'
import ProductDashboard from './dashboard/ProductDashboard'

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/Login'); // Redirige al login si no hay sesión activa
    }
  }, [user, navigate]);

  if (!user) {
    return null; // No renderiza nada mientras redirige
  }

  return (
    <div className="dashboard">
      {/* <DashboardT /> */}
      <ProductDashboard />
    </div>
  );
}
