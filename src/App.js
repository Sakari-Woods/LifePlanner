import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Login } from './features/login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Test Site</h1>
      <header className="App-header">
        <Login/>
      </header>
    </div>
  );
}

export default App;
