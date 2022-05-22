import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { socket } from './services/socket.service';
const AuthRoutes = React.lazy(() => import('./views/auth/auth.routes'));
function AppRoutes() {
  // React.useEffect(() => {
  //   socket.emit('msgToServer', 'this is a message from client to server');
  //   socket.on('msgToClient', (message) => {
  //     console.log(message, 'from the socket server');
  //   });
  // }, []);
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <React.Suspense fallback={<h1>...loading</h1>}>
            <AuthRoutes />
          </React.Suspense>
        }
      />
    </Routes>
  );
}
export default AppRoutes;
