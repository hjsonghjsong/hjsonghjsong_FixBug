import React, { useState } from "react";
import { useAuth } from "../../Contexts/Auth";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Box,
} from "@mui/material";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const { signUp } = useAuth();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
    };
    signUp(userData);
  };

  const handleCloseDialog = (e) => {
    props.setOpen(!props.open);
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (password.length < 8) {
      setPassError(true);
    } else {
      setPassError(false);
    }
  };

  /*This will take only number as input from user*/
  const handlePhoneInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 10) {
      setPhone(inputValue);
      setError(!/^\d+$/.test(inputValue));
    }
  };

  return (
    <Dialog sx={{}} open={props.open} onClose={handleCloseDialog}>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: 24 }}>
        Sign Up
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below to create an account.
        </DialogContentText>

        <Box
          sx={{
            display: "flex",
            flexdirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            fullWidth
            sx={{ mr: 1 }}
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            fullWidth
            sx={{ ml: 1 }}
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
        <Box
          sx={{
            display: "flex",
            flexdirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            margin="dense"
            label="Phone number"
            type="tel"
            inputMode="tel"
            name="phone"
            value={phone}
            onChange={handlePhoneInput}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="xxx-xxx-xxxx"
            sx={{ mr: 1 }}
            fullWidth
            error={error}
            helperText={error ? "Enter a valid phone number" : ""}
          />

          <TextField
            margin="dense"
            placeholder="Password"
            label="Password"
            name="Password"
            value={password}
            type="password"
            sx={{ ml: 1 }}
            fullWidth
            onChange={handlePasswordChange}
            error={passError}
            helperText={passError ? "Minimum-8 characters" : ""}
          />
        </Box>
      </DialogContent>
      <div className="mt-8 mb-2">
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: "black" }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Sign Up
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default SignUp;
