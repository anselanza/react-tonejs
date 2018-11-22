import React, { Component } from 'react';
import './App.css';

import Synth from './components/Synth';
import Oscillator from './components/Oscillator';
import FMSynth from './components/FMSynth';
import LFOMod from './components/LFOMod';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Oscillator />
        <Synth />
        <FMSynth />
        <LFOMod />
      </div>
    );
  }
}

export default App;
