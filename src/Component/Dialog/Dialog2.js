import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Dialog2 extends React.Component {
    state = {
        value: '',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div >
                <FormControl component="fieldset" required >
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="I am" control={<Radio />} label="I am" />
                        <FormControlLabel value="Someone Else" control={<Radio />} label="Someone Else" />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

class Dialog23 extends React.Component{
    checkstatus=()=>{
        if(!this.props.value){
            console.log('u r disabled');
        }
    };
    render(){
        return(
            <div>
                <Dialog2 oncheck={this.checkstatus}/>
            </div>
        );
    }

}
export default (Dialog23);
