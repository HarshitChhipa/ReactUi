import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dropdown_Button from '../Buttons/Dropdown_Button';
import Search from '../Buttons/Search_Button/Search';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>

                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>
                    <Dropdown_Button/>
                </Grid>
                <Grid item xs={2}>
                    <Search/>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);