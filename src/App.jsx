import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from './components/home/Home';
import Login from "./components/auth/Login";
import Register from './components/auth/Register';
import Marketplace from "./components/marketplace/Marketplace";
import Dashboard from './components/Dashboard';
import UserDashboard from "./components/dashboard/UserDashboard";
import ProductDashboard from "./components/dashboard/ProductDashboard";
import PrivateRoute from './components/auth/PrivateRoute';
import { CartProvider } from './components/marketplace/CartContext ';
/*

import Profile from './components/dashboard/Profile'

import UserTable from "./components/dashboard/UserTable";
import OrderDashboard from "./components/dashboard/OrderDashboard";
import OrderDetailDashboard from "./components/dashboard/OrderDetailDashboard";
import MessageDashboard from "./components/dashboard/MessageDashboard";
import ReportDashboard from "./components/dashboard/ReportDashboard";
import Settings from "./components/dashboard/Settings";
import SettingsModal from "./components/dashboard/SettingsModal";
 */
import { AuthProvider } from "./components/auth/AuthContext";


function App() {


  return (
      <AuthProvider>
        <Router>
          <CartProvider> 
            <Routes>
  
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              
              <Route path="/Marketplace" element={<Marketplace />} />
              <Route path="/Dashboard" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/UserDashboard" element={<UserDashboard />} />
              <Route path="/ProductDashboard" element={<PrivateRoute><ProductDashboard /></PrivateRoute>} />
              
              {/* 
              <Route path="/OrderDashboard" element={<OrderDashboard />} />
              <Route path="/OrderDetailDashboard" element={<OrderDetailDashboard />} />
              <Route path="/MessageDashboard" element={<MessageDashboard />} />
              <Route path="/ReportDashboard" element={<ReportDashboard />} />
              <Route path="/Settings" element={<Settings/>} />
              {/* <Route path="/SettingsModal" element={<SettingsModal/>} /> */}
              {/* <Route path="/Profile" element={<Profile />} />
              <Route path="/UserTable" element={<UserTable/>} /> */}
              
            </Routes>
          </CartProvider>
        </Router>
      </AuthProvider>
    );
}

export default App
