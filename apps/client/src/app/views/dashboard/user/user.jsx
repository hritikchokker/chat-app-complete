import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../../../store/actionTypes';
const UserList = React.lazy(() => import('./UserList'));
const UserDetails = React.lazy(() => import('./UserDetails'));
function User() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:userId" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default User;
