import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Profile from './components/dashboard/Profile'

import "./index.css";
import UserTable from "./components/dashboard/UserTable";
import UserDashboard from "./components/dashboard/UserDashboard";
import ProductDashboard from "./components/dashboard/ProductDashboard";
import OrderDashboard from "./components/dashboard/OrderDashboard";
import OrderDetailDashboard from "./components/dashboard/OrderDetailDashboard";
import MessageDashboard from "./components/dashboard/MessageDashboard";
import ReportDashboard from "./components/dashboard/ReportDashboard";
import Settings from "./components/dashboard/Settings";
import SettingsModal from "./components/dashboard/SettingsModal";
import Marketplace from "./components/Marketplace";


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Marketplace/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/UserDashboard" element={<UserDashboard/>} />
        
        <Route path="/ProductDashboard" element={<ProductDashboard />} />
        <Route path="/OrderDashboard" element={<OrderDashboard />} />
        <Route path="/OrderDetailDashboard" element={<OrderDetailDashboard />} />
        <Route path="/MessageDashboard" element={<MessageDashboard />} />
        <Route path="/ReportDashboard" element={<ReportDashboard />} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/SettingsModal" element={<SettingsModal/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/UserTable" element={<UserTable/>} />
        <Route path="/Register" element={<Register/>} />
       
      </Routes>
    </Router>

 )
}

export default App
