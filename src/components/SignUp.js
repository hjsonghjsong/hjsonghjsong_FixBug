import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Box,
} from '@mui/material';

function SignUp(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: validate form inputs and submit form data to server
  };


  const handleCloseDialog = (e) => {
    props.setOpen(!props.open);
  }


  return (
    <Dialog open={props.open} onClose={handleCloseDialog}>
      <DialogTitle sx={{ fontWeight: 'bold', fontSize: 24 }}>
        Sign Up
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below to create an account.
        </DialogContentText>

        <Box sx={{display: 'flex', flexdirection: 'row', justifyContent:'space-between'}}>
        <TextField
          autoFocus
          margin="dense"
          label="First Name"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          fullWidth
          sx={{mr:1}}
        />
        <TextField
          margin="dense"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
           fullWidth
           sx={{ml:1}}
        />
        </Box>
        
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} sx={{color: 'black'}}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SignUp;