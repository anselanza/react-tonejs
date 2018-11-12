import React, { Component } from 'react';

import Tone from 'tone';

export default class Oscillator extends React.Component {
    super(props) {
        this.synth = null;
        this.startOscillator = this.startOscillator.bind(this);
        this.stopOscillator = this.stopOscillator.bind(this);

    }

    componentDidMount = () => {
        this.synth = new Tone.Oscillator({
            frequency: 440,
            volume: -10
        }).toMaster();
    }

    startOscillator = () => {
        this.synth.start();
    }

    stopOscillator = () => {
        this.synth.stop();
    }

    render = () => 
        <div>
            <button onClick={this.startOscillator}>start</button>
            <button onClick={this.stopOscillator}>stop</button>
        </div>
}