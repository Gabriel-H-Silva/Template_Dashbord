import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import ConfigsPage from './Pages/Configs/Index';
import Sidebar from "./Components/Bars/Sidebar";
import Reports from "./Pages/Reports/Index";
import Users from "./Pages/Users/Index";
import Login from './Pages/Login/Index';
import Home from './Pages/Home/Index';
import ProtectedRoute from './Components/ProtectRoute';
 
export default function Routers() {
  return (

    <BrowserRouter>

      {/* Componente para aplicar as rotas do sistema */}
      <Routes>

        {/* Rotas aqui*/}
        <Route exact path="/" element={<><Login /></>} />

        <Route path="/Home" element={
          <ProtectedRoute>
            <Sidebar />
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/Config" element={
          <ProtectedRoute>
            <Sidebar />
            <ConfigsPage />
          </ProtectedRoute>
        } />

        <Route path="/Reports" element={
          <ProtectedRoute>
            <Sidebar />
            <Reports />
          </ProtectedRoute>
        } />

        <Route path="/Users" element={
          <ProtectedRoute>
            <Sidebar />
            <Users />
          </ProtectedRoute>
        } />

      </Routes>

    </BrowserRouter>
  );
};