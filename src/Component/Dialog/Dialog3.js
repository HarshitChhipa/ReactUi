import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Dialog3 extends React.Component {
    state = {
        Engagement: false,
        Sangeet: false,
        Wedding: false,
        reception:false,
        others:false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Photographer required or the following events:</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.Engagement}
                                onChange={this.handleChange('Engagement')}
                                value="Engagement"
                            />
                        }
                        label="Engagement"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.Sangeet}
                                onChange={this.handleChange('Sangeet')}
                                value="Sangeet"
                            />
                        }
                        label="Sangeet/Mehandi"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.Wedding}
                                onChange={this.handleChange('Wedding')}
                                value="Wedding"
                            />
                        }
                        label="Wedding"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.reception}
                                onChange={this.handleChange('reception')}
                                value="reception"
                            />
                        }
                        label="reception"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.other}
                                onChange={this.handleChange('other')}
                                value="other"
                            />
                        }
                        label="other"
                    />
                </FormGroup>
            </FormControl>
        );
    }
}

export default Dialog3;
