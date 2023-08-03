import React, { useEffect, useState } from "react";
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
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import "./SignUp.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MobileSignUp from "./MobileSignUp";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [phError, setPhError] = useState(false);
  const { signUp, session } = useAuth();
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
    try {
      await signUp(userData);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.message);
    }
  };

  const handleCloseDialog = (e) => {
    e.preventDefault();
    props.setOpen(!props.open);
    setSuccess(false);
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

  const handlePhoneInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 10) {
      setPhone(inputValue);

      setPhError(!/^\d+$/.test(inputValue));
    }
  };

  return (
    <Dialog sx={{}} open={props.open} onClose={handleCloseDialog}>
      <div className="flex flex-row justify-between">
        <DialogTitle sx={{ fontWeight: "bold", fontSize: 24 }}>
          Sign Up
        </DialogTitle>
        <button onClick={handleCloseDialog} className="px-5">
          <FontAwesomeIcon icon={faX} style={{ color: "#9c9c9c" }} />
        </button>
      </div>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below to create an account.
        </DialogContentText>

        <MobileSignUp
          firstName={firstName}
          lastName={lastName}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          email={email}
          handleEmailChange={handleEmailChange}
          phone={phone}
          handlePhoneInput={handlePhoneInput}
          password={password}
          handlePasswordChange={handlePasswordChange}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
        />

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
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
          sx={{ display: { xs: "none", md: "flex" } }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
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
            error={phError}
            helperText={phError ? "Enter a valid phone number" : ""}
          />
          <TextField
            margin="dense"
            placeholder="Password"
            label="Password"
            name="Password"
            value={password}
            type={showPassword ? "text" : "password"}
            sx={{ ml: 1 }}
            fullWidth
            onChange={handlePasswordChange}
            error={passError}
            helperText={passError ? "Minimum-8 characters" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {success ? (
          <div className="relative rounded-md border border-c py-4 px-6 flex space-x-4 items-center w-full bg-[#e9fcf2] verify-box mt-8">
            <div class=" text-[#3fcf8e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="sbui-icon "
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <p>A confirmation mail has been sent. Please verify your email</p>
            </div>
          </div>
        ) : null}
      </DialogContent>

      <div className="mb-2">
        <DialogActions>
          {success ? (
            <Button onClick={handleCloseDialog} variant="contained">
              Done
            </Button>
          ) : (
            <div>
              <Button onClick={handleCloseDialog} sx={{ color: "black" }}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} variant="contained">
                Sign Up
              </Button>
            </div>
          )}
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default SignUp;
