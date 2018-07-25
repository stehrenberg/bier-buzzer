import React, { Component } from 'react';

import Login from './components/Login';
import Buzzer from './components/Buzzer.js';
import logo from './style-altbier.svg';
import './App.css';
import Logout from '@material-ui/icons/LockOpen';
import localStorageConfig from './config/localStorage.js';
import roles from './config/roles.js';

class App extends Component {
  logout() {
    localStorage.removeItem(localStorageConfig.USERNAME);
    localStorage.removeItem(localStorageConfig.ROLE);
    localStorage.removeItem(localStorageConfig.POINTS);
    window.location.reload();
  }

  render() {
    const userRole = localStorage.getItem(localStorageConfig.ROLE);
    const isUserPlayer = (userRole === roles.ROLE_PLAYER);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer Buzzer</h1>
          <Logout className="Logout" onClick={() => this.logout()} />
        </header>
          <Login />
          { isUserPlayer && <Buzzer /> }
      </div>
    );
  }
}

export default App;
