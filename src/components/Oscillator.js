import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Tone from 'tone';

const styles = theme => ({
    root: {
        width: 300,
    },
        slider: {
        padding: '22px 0px',
    },
    button: {
      margin: theme.spacing.unit,
    }
  });

class Oscillator extends React.Component {

    state = {
        osc: new Tone.Oscillator({
            frequency: 440,
            volume: -10
        }),
        frequency: 440
    }

    handleChange = (event, value) => {
        let osc = { ...this.state.osc };
        // osc.set('frequency',  );
        this.setState( { frequency: value }, () => {
            osc.frequency.rampTo(this.state.frequency, 0.05);
        })
    };

    componentDidMount = () => {
        const osc = this.state.osc;
        osc.toMaster();
        osc.start();
        this.state.osc.mute = true;
        // Tone.Master.mute = true;
    }

    startOscillator = () => {
        this.state.osc.volume.rampTo(0, 0.05);
    }

    stopOscillator = () => {
        this.state.osc.volume.rampTo(-Infinity, 0.05);
    }

    render = () => {
        const { classes } = this.props;
        const { frequency } = this.state;
        return (
            <div className="classes.root">
                <h1>Simple Sine Oscillator</h1>
                <div>
                    <Typography id="label">Frequency: {frequency}</Typography>
                    <Slider
                        classes={{ container: classes.slider }}
                        value={frequency}
                        onChange={this.handleChange}
                        min = {20}
                        max = {10000}
                    />
                </div>

                <Button variant="contained" onClick={this.startOscillator} className={classes.button}>
                    start
                </Button>
                <Button variant="contained" onClick={this.stopOscillator} className={classes.button}>
                    stop
                </Button>
            </div>

        )
    }
}

Oscillator.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Oscillator);