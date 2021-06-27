/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  // Youtube link for private route : https://youtu.be/PKwu15ldZ7k?t=2475
  // https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => (currentUser ? <Component {...props} /> : <Redirect to="/login" />)}

    />
  );
}

export default PrivateRoute;
