import Tone from 'tone';

import React from 'react';
import Button from '@material-ui/core/Button';

class Synth extends React.Component {

    state = {
        synth: new Tone.Synth({
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
                release: 1.8
            },
            portomento: 0.05
        })
    }

    triggerAttack = (event, value) => {
        this.state.synth.triggerAttack("C4");
    }

    triggerRelease = (event, value) => {
        this.state.synth.triggerRelease();
    }


    componentDidMount() {
        const synth = this.state.synth;
        synth.toMaster();
    }

    render() {
      return (
        <div className="Synth">
            <h1>Simple Synth</h1>
            <Button variant="contained" onClick={this.triggerAttack}>play note</Button>
            <Button variant="contained" onClick={this.triggerRelease}>release note</Button>
        </div>
      );
    }
  }
  
  export default Synth;