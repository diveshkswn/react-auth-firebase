/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../context/AuthContext';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // window.location.href = '/';
      history.push('/');
    } catch (er) {
      setError(er.message);
    }
    setLoading(false);
  }

  return (
    <div className="login_main">
      <div className="card">
        <div className="card-body">
          <h2 className="mb-5 ms-auto me-auto">Login</h2>
          {/* Error banner */}
          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input ref={emailRef} type="email" className="form-control mt-3 mb-3" />
            <label>Password</label>
            <input ref={passwordRef} type="password" className="form-control mt-3 mb-3" />
            <button type="submit" disabled={loading} className="btn btn-primary">Login</button>
          </form>
        </div>

      </div>
      <div className="login_banner">
        <h5> New User ? </h5>
        <Link to="/signup">Sign Up</Link>
      </div>

    </div>
  );
}

export default Login;
