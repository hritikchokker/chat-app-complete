import React from 'react';
import { Routes, useNavigate, Route } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader';
import socketHandler, {
  createInstance,
} from '../../utils/socket/socketInstance';
import '../../app.module.scss';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from './state/actions';
const Homepage = React.lazy(() => import('./homepage/homepage'));
const ChatPage = React.lazy(() => import('./chat/chat'));
const UserPage = React.lazy(() => import('./user/user'));
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    createInstance();
    setTimeout(() => {
      socketHandler.on('hello_world', (msg) => {
        console.log(msg);
      });
      socketHandler.emit('fetchUserDetails');
      socketHandler.on('userDetailsRecieved', (data) => {
        dispatch(updateUserDetails(data));
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
    <React.Fragment>
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
            path="/user/*"
            element={
              <React.Suspense fallback={<Loader />}>
                <UserPage />
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
    </React.Fragment>
  );
}

export default Dashboard;
