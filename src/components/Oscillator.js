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
        synth: new Tone.Oscillator({
            frequency: 440,
            volume: -10
        }),
        frequency: 440
    }

    handleChange = (event, value) => {
        let synth = { ...this.state.synth };
        // synth.set('frequency',  );
        this.setState( { frequency: value }, () => {
            synth.frequency.rampTo(this.state.frequency, 0.05);
        })
    };

    componentDidMount = () => {
        const synth = this.state.synth;
        synth.toMaster();
        synth.start();
        Tone.Master.mute = true;
    }

    startOscillator = () => {
        Tone.Master.volume.rampTo(0, 0.05);
    }

    stopOscillator = () => {
        Tone.Master.volume.rampTo(-Infinity, 0.05);
    }

    render = () => {
        const { classes } = this.props;
        const { frequency } = this.state;
        return (
            <div className="classes.root">
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