import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
const navigate = useNavigate();
const isAuthenticated = localStorage.getItem('accessToken');

useEffect(() => {

    if (!isAuthenticated) {
      navigate('/');
    }
}, [isAuthenticated, navigate]);

 return isAuthenticated ? children : null;
};
 
export default ProtectedRoute; 