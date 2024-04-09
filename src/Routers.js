import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Login from './Pages/Login/Index';
import Home from './Pages/Home/Index';
//import ProtectedRoute from './Components/ProtectRoute';
 
export default function Routers() {
  return (

    <BrowserRouter>

      {/* Componente para aplicar as rotas do sistema */}
      <Routes>

        {/* Rotas aqui*/}
        <Route exact path="/" element={
          <>
            <Login />
          </>
        } />

        <Route path="/Home" element={
          // <ProtectedRoute>
          <>
            <Home />
          </>
          //</ProtectedRoute>
        } />

      </Routes>

    </BrowserRouter>
  );
};