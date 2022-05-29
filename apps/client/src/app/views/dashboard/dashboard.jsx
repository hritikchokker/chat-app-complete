import React from 'react';
import { Routes, useNavigate, Route } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader';
import socketHandler, {
  createInstance,
} from '../../utils/socket/socketInstance';
import '../../app.module.scss';
const Homepage = React.lazy(() => import('./homepage/homepage'));
const ChatPage = React.lazy(() => import('./chat/chat'));
function Dashboard() {
  const navigate = useNavigate();
  React.useEffect(() => {
    createInstance();
    setTimeout(() => {
      socketHandler.on('hello_world', (msg) => {
        console.log(msg);
      });
      socketHandler.emit('fetchUserDetails');
      socketHandler.on('userDetailsRecieved', (data) => {
        console.log(data, 'fetched from socket directly');
      });
    });
    socketHandler.on('connect_error', () => {
      localStorage.clear();
      navigate('/', { replace: true });
    });
    return () => {
      // socketHandler.disconnect();
    };
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <Homepage />
              </React.Suspense>
            }
          />
          <Route
            path="/chat"
            element={
              <React.Suspense fallback={<Loader />}>
                <ChatPage />
              </React.Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
