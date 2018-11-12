import React, { Component } from 'react';
import './App.css';

import Synth from './components/Synth';
import Oscillator from './components/Oscillator';
import FMSynth from './components/FMSynth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Oscillator />
        <Synth />
        <FMSynth />
      </div>
    );
  }
}

export default App;
