import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import AuthProvider from './context/AuthContext';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="App">
            <div className="App_Content">

              <h1>React Auth with firebase</h1>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/update-user" />
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>

            </div>

            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
