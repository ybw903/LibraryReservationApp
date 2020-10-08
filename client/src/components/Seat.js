import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import storage from '../lib/storeage';
const useStyles = makeStyles((theme) => ({
    Button: {
        margin: theme.spacing(1),
    },
    root: {
        float: 'left'
    }
}));


export default function Seat({ id, seatNo, check, reservationReq}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit =(e)=>{
        const loggedInfo = storage.get('loggedInfo');
        if (!loggedInfo) {
            handleClose();
            return;
        }
        const username =loggedInfo['username']; 
        reservationReq(username,id);
        handleClose();
    }
    return (
        <div className={classes.root}>
            {!check ?
                <Button className={classes.Button} color="primary" variant="outlined" onClick={handleClickOpen}>{seatNo} </Button>
                : <Button className={classes.Button} color="primary" variant="contained">{seatNo}</Button>}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle onClose={handleClose}>{"예약"}</DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        {seatNo}번을 예약하시겠습니까?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        예약
                    </Button>
                    <Button variant="outlined" color="primary" onClick={handleClose}>
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}