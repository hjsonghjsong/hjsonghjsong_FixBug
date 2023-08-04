import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth";
import PrimaryButton from "../Buttons/PrimaryButton";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { passwordRecovery } = useAuth();

  //reset password
  const handleReset = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
    };
    await passwordRecovery(data);
  };

  return (
    <div className="reset-container flex flex-col justify-center items-center">
      <form
        onSubmit={handleReset}
        id="login-form"
        className="login-form flex flex-col items-start space-y-3 w-full"
      >
        <div className="flex items-start flex-col gap-3">
          <Typography variant="h1" sx={{ letterSpacing: "1px" }}>
            Reset Your Password
          </Typography>

          <p className="text-sm text-slate-600">
            Type your email and we will send you a link to reset the password
          </p>
        </div>

        <div className="flex w-full"></div>

        <div className="flex flex-col space-y-8 w-full">
          <div className="items-start ">
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
            />
          </div>

          <PrimaryButton
            sx={{ height: "46px" }}
            text="Send Reset Email"
            handleButton={handleReset}
          ></PrimaryButton>
        </div>
        <div className="flex items-center justify-center w-full space-x-4">
          <Typography>Already have an account?</Typography>

          <Link to="/login">
            <Typography variant="h5" className="text-[#437ef7]">
              Sign-In
            </Typography>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
