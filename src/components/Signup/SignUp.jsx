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
  Typography,
} from "@mui/material";
import "./SignUp.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MobileSignUp from "./MobileSignUp";
import CloseIcon from "@mui/icons-material/Close";
import SecondaryButton from "../Buttons/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import WebSignUp from "./WebSignUp";

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
          <Typography variant="h2">Sign Up</Typography>
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
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

        <WebSignUp
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
          passError={passError}
          phError={phError}

        />
         
        
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
            <div className="flex">
              <Button onClick={handleCloseDialog} sx={{ color: "black" }}>
                Cancel
              </Button>

              <PrimaryButton text="Sign Up" handleButton={handleSubmit} />
            </div>
          )}
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default SignUp;
