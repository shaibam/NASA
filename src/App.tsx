import React from 'react';
import logo from './logo.svg';
import './App.css';
import style from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={`${style.main} App-header`}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         689
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
      </header>
    </div>
  );
}

export default App;
