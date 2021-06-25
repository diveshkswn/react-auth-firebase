import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="App_Content">

            <h1>React Auth with firebase</h1>
            <Switch>

              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>

          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
