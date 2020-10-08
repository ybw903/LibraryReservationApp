import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import * as libraryInfo from '../lib/libraryInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 4),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ReservationMenu({ libraryNo, floor, floorChange }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  

    const lib = libraryInfo.libr[libraryNo];
    const floorInfo = libraryInfo.floor; // libr 하나만 사용중
    return (
        <div className={classes.root}>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="select-floor">select floor</InputLabel>
                    <Select
                     labelId="select"
                     id="select"
                     open={open}
                     onClose={handleClose}
                     onOpen={handleOpen}
                     value = {floor}
                     onChange={floorChange}
                     >
                         {floorInfo.map((name,index)=>(
                        <MenuItem value={index}> {name} </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}