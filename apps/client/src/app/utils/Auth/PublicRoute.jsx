import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  let isAuthenticated = localStorage.getItem('token');

  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
}

export default PublicRoute;
