import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class Dialog4 extends React.Component {
    state = {
        value: '',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">Photographer required For</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="One" control={<Radio />} label="1 Day" />
                        <FormControlLabel value="Two" control={<Radio />} label="2 Day" />
                        <FormControlLabel value="three" control={<Radio />} label="3 day" />
                        <FormControlLabel value="Four" control={<Radio />} label="4 Day" />

                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

Dialog4.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dialog4);
