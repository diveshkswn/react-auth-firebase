/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import './Signup.css';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../../context/AuthContext';

function Signup() {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      setError('Passwords not match');
    } else {
      try {
        setError('');
        setLoading(true);

        const a = await signup(emailRef.current.value, passwordRef.current.value);
        await a.user.updateProfile({ displayName: nameRef.current.value });
        // await a.user.updateProfile({ displayName: nameRef.current.value, photoURL: 'https://example.com/jane-q-user/profile.jpg' });
        // window.location.href = '/';
        history.push('/login');
      } catch (er) {
        setError(er.message);
      }
      setLoading(false);
    }
  }

  return (

    <div className="signup_main">
      <div className="card">
        <div className="card-body">
          <h2 className="mb-5 ms-auto me-auto">Sign Up</h2>

          {/* Error banner */}
          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input ref={emailRef} type="email" className="form-control mt-3 mb-3" />
            <label>Name</label>
            <input ref={nameRef} type="text" className="form-control mt-3 mb-3" />
            <label>Password</label>
            <input ref={passwordRef} type="password" className="form-control mt-3 mb-3" />
            <label>Password Confirm</label>
            <input ref={passwordConfirmRef} type="password" className="form-control mt-3 mb-3" />
            <button type="submit" disabled={loading} className="btn btn-primary">SignUp</button>
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
