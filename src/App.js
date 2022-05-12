import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Add an input number and submit button.
          The input number should be added/subtracted to the counter if submit is clicked.
        </p>
      </header>
    </div>
  );
}

export default App;
