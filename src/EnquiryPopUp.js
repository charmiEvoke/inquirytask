import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

 


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const [timeLine, settimeLine] = React.useState(2023);

  const handleChangeTimeLine = (event) => {
    settimeLine(event.target.value);
  };

  const [tripStatus, settripStatus] = React.useState('I want to book a trip');

  const handleChangetripStatus = (event) => {
    settripStatus(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
   
  };

  const handleSubmitClose = () => {
    setOpen(false);
    var selectedObj = {
      fullName,
      email,
      phoneNumber,
      tripDuration,
      gender,
      tripStatus,
      timeLine

    }
    console.log("selctedobj",selectedObj);
    props?.parentCallback(selectedObj);
  };
  const [gender, setGender] = React.useState('female');

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };



  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [tripDuration, setTripDuration] = React.useState('');
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{margin:"38px 0 0 0"}}>
      Create My Trip Now
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
           <span> Almost There!</span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
         
        <div style={{margin: "10px"}}><TextField id="outlined-basic" label="Full Name" value={fullName}
             onChange={(event) => setFullName(event.target.value)} variant="outlined" /></div>
        <div style={{margin: "10px"}}><TextField id="outlined-basic" label="Email Address" 
             onChange={(event) => setEmail(event.target.value)} variant="outlined" /></div>
        <div style={{margin: "10px"}}><TextField id="outlined-basic" label="Phone Number" 
             onChange={(event) => setPhoneNumber(event.target.value)} variant="outlined" /></div>
        <div style={{margin: "10px"}}>
            <TextField id="outlined-basic" label="Trip Duration" 
            onChange={(event) => setTripDuration(event.target.value)} variant="outlined" />
           
            <FormControl style={{margin: "0 10px"}}>
                <InputLabel id="demo-simple-select-label">when you want to go</InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={timeLine}
                    label="when you want to go"
                    onChange={handleChangeTimeLine}
                >
                    <MenuItem value={2023}>2023</MenuItem>
                    <MenuItem value={2024}>2024</MenuItem>
                    <MenuItem value={2025}>2025</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div style={{margin: "10px"}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">I want to book a trip</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tripStatus}
                    label="I want to book a trip"
                    onChange={handleChangetripStatus}
                >
                    <MenuItem value={'I want to book a trip'}>I want to book a trip</MenuItem>
                    <MenuItem value={'Still dreaming / researching:Still dreaming / researching'}>Still dreaming / researching:Still dreaming / researching</MenuItem>
                    <MenuItem value={'Definitely traveling, need destination expertise'}>Definitely traveling, need destination expertise</MenuItem>
                   
                </Select>
            </FormControl>
        </div>
        <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
     
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={gender}
        onChange={handleChangeGender}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmitClose}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}