import Tone from 'tone';

import React, { Component } from 'react';

class Synth extends Component {

    constructor(props) {
        super(props);
        this.synth = null;
        this.startOsc = this.startOsc.bind(this);
    }

    startOsc() {
        this.synth.triggerAttack("C4");
    }

    componentDidMount() {
        this.synth = new Tone.Synth({
            oscillator: {
                type: "amtriangle",
                harmonicity: 0.5,
                modulationType: "sine"
            },
            envelope: {
                attackCurve: "exponential",
                attack: 0.05,
                decay: 0.2,
                sustain: 0.2,
                release: 1.5
            },
            portomento: 0.05
        }).toMaster();
    }

    render() {
      return (
        <div className="Synth">
            <button onClick={this.startOsc}>play note</button>
        </div>
      );
    }
  }
  
  export default Synth;