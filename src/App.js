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
        <p style={{fontSize: 16}}>
          1. Add an input number and submit button.
          The input number should be added/subtracted to the counter if submit is clicked.
        </p>
        <p style={{fontSize: 16}}>
          2. Add a form with input first name and last name. And a submit button.
          Once submit is clicked, should show an alert with percentage.
          Percentage should be 25% after 1 second, 50% after another 1 second, 75% after another 1 second, and 100% after another 1 second.
        </p>
      </header>
    </div>
  );
}

export default App;
