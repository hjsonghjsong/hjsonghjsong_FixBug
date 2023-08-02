import React from "react";
import { DialogContentText, TextField, Box } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

function MobileSignUp(props) {
  const {
    firstName,
    lastName,
    handleFirstNameChange,
    handleLastNameChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneInput,
    password,
    handlePasswordChange,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
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
      />
      <TextField
        margin="dense"
        label="Last Name"
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        fullWidth
      />
      <TextField
        margin="dense"
        label="Email Address"
        type="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
      />
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
        fullWidth
        error={false}
        helperText=""
      />
      <TextField
        margin="dense"
        placeholder="Password"
        label="Password"
        name="Password"
        value={password}
        type={showPassword ? "text" : "password"}
        fullWidth
        onChange={handlePasswordChange}
        error={false}
        helperText=""
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
  );
}

export default MobileSignUp;
