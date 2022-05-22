import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="row-jc-ac">
      <div className="container w-25 card-shadow">
        <div className="form-field">
          <input placeholder="email" />
        </div>
        <div className="form-field">
          <input placeholder="password" />
        </div>
        <div className="form-action mb-10">
          <button type="submit"> Login</button>
        </div>
        <div className="form-helper mb-20">
          <h4>
            no account found?
            <Link to="/register">register here</Link>{' '}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Login);
