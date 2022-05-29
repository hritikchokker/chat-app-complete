import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import LoginForm from './loginForm';
import { useSelector } from 'react-redux';
function Login() {
  const navigation = useNavigate();
  const token = useSelector((state) => state.authState.token);
  React.useEffect(() => {
    if (token) {
      navigation('/dashboard', { replace: true });
    }
  }, [token]);
  const handleNavigation = () => {
    navigation('/register', { replace: true });
  };
  return (
    <div className="loginform_wrapper">
      <h1>Login works</h1>
      <LoginForm />
      <Button text="navigate to register" onClick={handleNavigation} />
    </div>
  );
}

export default Login;
