import React, { Component } from 'react';

import Login from './components/Login';
import Buzzer from './components/Buzzer.js';
import logo from './style-altbier.svg';
import './App.css';
import Logout from '@material-ui/icons/LockOpen';
import localStorageConfig from './config/localStorage.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  logout() {
    localStorage.removeItem(localStorageConfig.USERNAME);
    localStorage.removeItem(localStorageConfig.ROLE);
    localStorage.removeItem(localStorageConfig.POINTS);
    window.location.reload();
  }

  onLogin() {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer Buzzer</h1>
          <Logout className="Logout" onClick={() => this.logout()} />
        </header>
          <Login onLogin={this.onLogin.bind(this)} />
          <Buzzer isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default App;
