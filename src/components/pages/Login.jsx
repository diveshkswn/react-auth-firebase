/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login_main">
      <div className="card">
        <div className="card-body">
          <h2 className="mb-5 ms-auto me-auto">Login</h2>
          <form>
            <label>Email</label>
            <input type="email" className="form-control mt-3 mb-3" />
            <label>Password</label>
            <input type="password" className="form-control mt-3 mb-3" />
            <button type="button" className="btn btn-primary">Login</button>
          </form>
        </div>

      </div>
      <div className="login_banner">
        <h5>New User ? </h5>
        <Link to="/signup">Sign Up</Link>
      </div>

    </div>
  );
}

export default Login;
