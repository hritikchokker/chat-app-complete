import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/loader';
import NotFound from './views/notFound';
import PrivateRoute from './utils/Auth/PrivateRoute';
import PublicRoute from './utils/Auth/PublicRoute';
import './app.module.scss';
const Login = React.lazy(() => import('./views/login/login'));
const Register = React.lazy(() => import('./views/register/register'));
const Dashboard = React.lazy(() => import('./views/dashboard/dashboard'));
export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <Login />
            </PublicRoute>
          </React.Suspense>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <React.Suspense fallback={<Loader />}>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </React.Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <Register />
            </PublicRoute>
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
