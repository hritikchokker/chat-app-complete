import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './user.scss';
const UserList = React.lazy(() => import('./UserList'));
const UserDetails = React.lazy(() => import('./UserDetails'));
function User() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<h1>...loading</h1>}>
            <UserList />
          </React.Suspense>
        }
      />
      <Route
        path="/:uid"
        element={
          <React.Suspense fallback={<h1>...loading</h1>}>
            <UserDetails />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default User;
