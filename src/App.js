import React, { Component } from 'react';

import Login from './components/Login';
import Buzzer from './components/Buzzer.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer Buzzer</h1>
        </header>
          <Login />
          <Buzzer />
      </div>
    );
  }
}

export default App;
