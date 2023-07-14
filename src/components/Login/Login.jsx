import React from "react";
import { useState } from "react";
import "./login.css";
import resume from "../../Utils/Images/Resume.jpeg";
import { FormControlLabel, TextField } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useAuth } from "../../Contexts/Auth";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const { session, signIn } = useAuth();

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "email") {
      setEmail(value.trim());
      if (value.trim() === "") {
        setEmailError("Email cannot be empty");
      } else {
        setEmailError("");
      }
    } else if (name === "password") {
      setPassword(value.trim());
      if (value.trim() === "") {
        setPasswordError("Password cannot be empty");
      } else {
        setPasswordError("");
      }
    } else if (name === "checkbox") {
      setCheckBox(checked);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (session) {
      window.location.href = "/dashboard";
      return;
    }

    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      return;
    }
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
      return;
    }

    signIn({ email, password });
  };

  return (
    <main>
      <article className="flex justify-center w-full mr-auto ml-auto flex-shrink-0 items-stretch grow">
        <div className="w-auto">
          <img className="image" src={resume} alt="logo"></img>
        </div>
        <div className="flex flex-col items-center login-form-container justify-center grow">
          <form
            id="login-form"
            onSubmit={handleLogin}
            className="login-form flex flex-col items-center space-y-8 w-full"
          >
            <div className="flex items-center">
              <h1>Welcome Back!</h1>
            </div>
            <div className="flex w-full">
              <button className="btn-google w-full bg-white space-x-2 active:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="22"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <h2>Sign in with google</h2>
              </button>
            </div>
            <p>Login in with your email</p>
            <div className="flex flex-col space-y-2 w-full">
              <div className="items-start space-y-2">
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleInputChange}
                  autoFocus
                  error={emailError !== ""}
                  helperText={emailError}
                />
              </div>
              <div className="items-start w-full space-y-2">
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  error={passwordError !== ""}
                  helperText={passwordError}
                />
              </div>
              <div className="flex justify-between">
                <div className=" space-x-3 flex">
                  <FormControlLabel
                    sx={{ fontSize: "16px", fontWeight: "600" }}
                    control={
                      <Checkbox
                        sx={{ padding: "0px 9px 0px 9px" }}
                        name="checkbox"
                        checked={checkBox}
                        onChange={handleInputChange}
                      />
                    }
                    label="Keep me logged in"
                  />
                </div>
                <div>
                  <a className="" href="">
                    <h2 className="text-primary]">Forgot Password</h2>
                  </a>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn-01 w-full active:bg-primary600"
            >
              Login
            </button>
            <div className="flex items-start w-full space-x-4">
              <h4>Don't have an account?</h4>
              <a className="" href="">
                <h2 className="text-[#437ef7]">Register</h2>
              </a>
            </div>
          </form>
        </div>
      </article>
    </main>
  );
};

export default Login;
