import React from "react";
import { useState } from "react";
import "./login.css";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Contexts/Auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PrimaryButton from "../Buttons/PrimaryButton";


export default function WebLogin(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/resume";

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signInWithOAuth = async (e) => {
    e.preventDefault();
    signInWithGoogle();
    navigate("/resume");
  };

  //Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      return;
    }
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
      return;
    }

    try {
      await signIn({ email, password });
      navigate(from, { replace: true });
    } catch (error) {
      throw error;
    }
  };
    return(
        <div>
        <div>
              <button
                type="button"
                onClick={signInWithOAuth}
                className="btn-google w-full bg-white space-x-2 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="22"
                  viewBox="0 0 48 48"
                  style={{ margin: "5px" }}
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
                Sign in with Google
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  error={passwordError !== ""}
                  helperText={passwordError}
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
              </div>
              <div className="flex justify-between">
                <div className=" space-x-3 flex">
                  {/* <FormControlLabel
                    sx={{ fontSize: "16px", fontWeight: "600" }}
                    control={
                      <Checkbox
                        sx={{ padding: "0px 9px 0px 9px" }}
                        name="checkbox"
                        checked={checkBox}
                        onChange={handleInputChange}
                      />
                    }
                    label="Keep me logged in"s
                  /> */}
                </div>
                <div>
                  <Link to="/forgot-password">
                    <Typography className="text-[#437ef7]">
                      Forgot Password
                    </Typography>
                  </Link>
                </div>
              </div>
            </div>
            <PrimaryButton
              handleButton={handleLogin}
              text="Login"
              sx={{ height: "46px", width: "100%" }}
            />
            </div>
    )
}