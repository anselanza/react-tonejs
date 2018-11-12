import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Synth from './components/Synth';
import Oscillator from './components/Oscillator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Oscillator />
        <Synth />
      </div>
    );
  }
}

export default App;
