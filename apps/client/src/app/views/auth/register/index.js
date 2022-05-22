import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Register() {
  const [registerForm, setRegisterForm] = useState({
    userName: 'hritik',
    email: 'hritikchokker@gmail.com',
    password: '12345678',
  });

  const setValue = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registerForm, 'registerForm');
  };
  return (
    <div className="row-jc-ac">
      <div className="container w-25 card-shadow">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              placeholder="username"
              value={registerForm['userName']}
              name="userName"
              onChange={setValue}
            />
          </div>
          <div className="form-field">
            <input
              placeholder="email"
              type="email"
              value={registerForm['email']}
              name="email"
              onChange={setValue}
            />
          </div>
          <div className="form-field">
            <input
              placeholder="password"
              value={registerForm['password']}
              name="password"
              onChange={setValue}
              type="password"
            />
          </div>
          <div className="form-action mb-10">
            <button type="submit"> Register</button>
          </div>
        </form>
        <div className="form-helper mb-20">
          <h4>
            already has an account?
            <Link to="/">login here</Link>{' '}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Register);
