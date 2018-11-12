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

class FMSynth extends React.Component {

    state = {
        synth: new Tone.FMSynth({
            modulationIndex: 12,
            envelope : {
				attack : 0.01,
				decay : 0.2
			},
			modulation : {
				type : "square"
			},
			modulationEnvelope : {
				attack : 0.2,
				decay : 0.01
			}
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
                <h1>FM Synth</h1>
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

  FMSynth.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FMSynth);