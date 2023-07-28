import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth";

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
          <h2 className="text-2xln lg:text-3xl">Reset Your Password</h2>
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

          <button type="submit" className="btn-01 w-full active:bg-primary600">
            Send Reset Email
          </button>
        </div>
        <div className="flex items-center justify-center w-full space-x-4">
          <h4>Already have an account?</h4>
          <Link to="/login">
            <h2 className="text-[#437ef7]">Sign-In</h2>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
