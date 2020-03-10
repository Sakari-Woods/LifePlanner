import React from 'react';
import logo from '../resources/logo.svg';
import '../css/App.css';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        Initial Splash Screen.
        <div id="loginBox"><Login/></div>
        </p>
      </div>
    );
  }
}

export default App;
