/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import { resetPassword } from '../../context/AuthContext';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const emailRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setSuccess(true);
    } catch (er) {
      setError(er.message);
    }
    setLoading(false);
  }

  return (
    <div className="forgot_main">
      <div className="card">
        <div className="card-body">
          <h2 className="mb-5 ms-auto me-auto">Forgot Password</h2>
          {/* Error banner */}
          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input ref={emailRef} type="email" className="form-control mt-3 mb-3" />
            <button type="submit" disabled={loading} className="btn btn-primary">Reset Password</button>
          </form>
          {/* Error banner */}
          {success && (
          <div className="alert alert-success" role="alert">
            Password reset link send to you email.
          </div>
          )}
        </div>

      </div>
      <div className="login_banner">
        <h5> New User ? </h5>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>

    </div>
  );
}

export default ForgotPassword;
