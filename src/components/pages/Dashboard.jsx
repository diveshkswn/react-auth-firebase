import './Dashboard.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
// 39:28
function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser } = useAuth();
  const history = useHistory();
  if (!currentUser) {
    history.push('/login');
  }

  function handleLogout(e) {

  }

  return (
    <>
      <div className="dashboard_main">
        <div className="dashboard_content">
          <div className="card">
            <div className="card-body">
              <h1>DashBoard</h1>

              {/* Error banner */}
              {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
              )}
              <p>
                <strong>  Email :</strong>
                {' '}
                {currentUser && currentUser.email}
              </p>

              <Link className="btn btn-dark" to="update-user">Update user</Link>
              <button type="button" onClick={handleLogout} className="btn btn-secondary">Logout</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
