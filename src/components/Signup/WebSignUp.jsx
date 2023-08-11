import React from "react";
import { DialogContentText, TextField, Box } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

function WebSignUp(props) {
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
    phError,
    passError,
  } = props;

  return (
    <Box>
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
    </Box>
  );
}

export default WebSignUp;
