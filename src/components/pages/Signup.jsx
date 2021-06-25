/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (

    <div className="signup_main">
      <div className="card">
        <div className="card-body">
          <h2 className="mb-5 ms-auto me-auto">Sign Up</h2>
          <form>
            <label>Email</label>
            <input type="email" className="form-control mt-3 mb-3" />
            <label>Password</label>
            <input type="password" className="form-control mt-3 mb-3" />
            <label>Password Confirm</label>
            <input type="password" className="form-control mt-3 mb-3" />
            <button type="button" className="btn btn-primary">SignUp</button>
          </form>
        </div>

      </div>
      <div className="login_banner">
        <h5>Already have an account ? </h5>
        <Link to="/login">Login</Link>
      </div>
    </div>

  );
}

export default Signup;
