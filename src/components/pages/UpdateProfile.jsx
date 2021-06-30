/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth, updateUser } from '../../context/AuthContext';
import './UpdateProfile.css';

function UpdateProfile() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentUser } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    if (confirmPasswordRef.current.value !== passwordRef.current.value) {
      setError('Passwords not match');
    } else {
      if (confirmPasswordRef.current.value !== null) {
        try {
          currentUser.updatePassword(confirmPasswordRef.current.value);
        } catch (er) {
          setError('Password change failed');
        }
      }

      try {
        setError('');
        setLoading(true);
        // currentUser.name = nameRef.current.value;
        await updateUser({ displayName: nameRef.current.value });
        // await login(emailRef.current.value, passwordRef.current.value);
        // window.location.href = '/';
        history.push('/');
      } catch (er) {
        setError(er.message);
      }
      setLoading(false);
    }
  }

  return (
    <div className="login_main">
      <div className="card">
        <div className="card-body">
          <h2 className="mb-5 ms-auto me-auto">Update Data</h2>
          {/* Error banner */}
          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="email" defaultValue={currentUser.email} disabled className="form-control mt-3 mb-3" />
            <label>Name</label>
            <input ref={nameRef} defaultValue={currentUser && currentUser.displayName} type="name" className="form-control mt-3 mb-3" />
            <label>Password</label>
            <input ref={passwordRef} type="password" placeholder="Leave Empty for no change in password" className="form-control mt-3 mb-3" />
            <label>Confirm Password</label>
            <input ref={confirmPasswordRef} type="password" placeholder="Leave Empty for no change in password" className="form-control mt-3 mb-3" />
            <button type="submit" disabled={loading} className="btn btn-primary">Update</button>
          </form>
        </div>

      </div>
      {/* <div className="login_banner">
        <h5> New User ? </h5>
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgot-password">Forgot Password</Link>
      </div> */}

    </div>
  );
}

export default UpdateProfile;
