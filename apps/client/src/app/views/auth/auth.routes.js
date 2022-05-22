import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';
function AuthRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<h1>loading...</h1>}>
            <Login />
          </React.Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <React.Suspense fallback={<h1>loading...</h1>}>
            <Register />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default AuthRoutes;
