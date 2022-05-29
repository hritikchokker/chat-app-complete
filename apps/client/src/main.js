import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './app/app';
import { Provider } from 'react-redux';
import { store } from './app/store';
import 'react-toastify/dist/ReactToastify.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
