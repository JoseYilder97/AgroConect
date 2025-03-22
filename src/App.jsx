import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Profile from './components/dashboard/Profile'

import "./index.css";
import UserTable from "./components/dashboard/UserTable";
import User from "./components/dashboard/User";
import Product from "./components/dashboard/Product";
import Customer from "./components/dashboard/Customer";
import Settings from "./components/dashboard/Settings";
import SettingsModal from "./components/dashboard/SettingsModal";


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Customer" element={<Customer />} />
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
