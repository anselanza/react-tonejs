import Tone from 'tone';

import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });

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
        const { classes } = this.props;
        return (
            <div className="Synth">
                <h1>Simple Synth</h1>
                <Button variant="contained" onClick={this.triggerAttack} className={classes.button}>
                    play note
                </Button>
                <Button variant="contained" onClick={this.triggerRelease} className={classes.button}>
                    release note
                </Button>
            </div>
        );
    }
  }

  Synth.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Synth);