import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginActions } from '../../views/login/login.actions';
import '../common-styles.scss';
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const href = '#';
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(loginActions.logout(navigate));
  };
  return (
    <header>
      <ul className="list_wrapper">
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate('/dashboard', { replace: true });
            }}
            href={href}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault();
              navigate('/dashboard/chat', { replace: true });
            }}
          >
            Chat
          </a>
        </li>
      </ul>
      <div className="logout_wrapper">
        <a href={href} onClick={handleLogout}>
          Logout
        </a>
      </div>
    </header>
  );
}

export default Header;
