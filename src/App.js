import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Synth from './components/Synth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Synth />
      </div>
    );
  }
}

export default App;
