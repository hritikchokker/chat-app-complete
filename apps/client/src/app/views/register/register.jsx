import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import './register.scss';
import RegisterForm from './registerForm';
function Register() {
  const token = useSelector((state) => state.registerState.token);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, []);
  const handleNavigation = () => {
    navigate('/', { replace: true });
  };
  return (
    <div className="registerform_wrapper">
      <h1>Register works</h1>
      <RegisterForm />
      <Button text="navigate to login" onClick={handleNavigation} />
    </div>
  );
}

export default Register;
