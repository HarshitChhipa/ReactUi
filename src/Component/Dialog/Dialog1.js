import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from'@material-ui/core/styles';
import './Dialog_style.css';
import Dialog23 from './Dialog2';
import Dialog3 from './Dialog3';
import Dialog4 from './Dialog4';

const style={
    width:300,
};

const Istyle={
    marginBottom:100,
};

const centerstyle={
    marginBottom:150,
};

const styles = {
    dialogPaper: {
        maxHeight:400,
    },
};


const Dialog1 =(props, classes )=>{

    return <div classes={{ paper: classes.dialogPaper }}>
        <Dialog  open={props.open1}
                 scroll={"body"}
        >

            <DialogTitle id="form-dialog-title">
                <IconButton color="inherit" onClick={props.closethis} aria-label="Close" style={Istyle}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent style={centerstyle} >
                <DialogContentText>

                    <Typography variant="headline" gutterBottom align={"center"}>
                        {props.title2}
                    </Typography>

                    {props.option ===1 ? null:(props.option === 2? <Dialog23 />:(props.option===3?<Dialog3/>:(props.option===4?<Dialog4/>:(null)))) }


                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button disabled={shouldThisBeDisbled(props)} fullWidth={true} onClick={props.nextbutton} >
                    {props.title}
                </Button>
            </DialogActions>

        </Dialog>
    </div>
};


function shouldThisBeDisbled(props) {
    if (props.option === 3 ) {
        /// disable requiremnt for page 2
        return true;
    }
}

export default withStyles(styles)(Dialog1);