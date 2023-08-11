import React from "react";
import { useState } from "react";
import "./login.css";
import resume from "../../Utils/Images/Resume.jpeg";
import {
  Typography
} from "@mui/material";
import { Checkbox } from "@mui/material";
import { useAuth } from "../../Contexts/Auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import WebLogin from "./WebLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/resume";

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
  return (
    <main>
      <article className="flex justify-center w-full mr-auto ml-auto flex-shrink-0 items-stretch grow">
        <div className="w-auto">
          <img className="image" src={resume} alt="logo"></img>
        </div>

        <div className="flex flex-col items-center login-form-container justify-center gap-6 grow">
          <form
            onSubmit={handleLogin}
            id="login-form"
            className="login-form flex flex-col items-center space-y-8 w-full"
          >
            <div className="flex items-center">
              <h1>Welcome Back!</h1>
            </div>
            <WebLogin />
            <div className="flex items-start w-full space-x-4">
              <Typography>Don't have an account?</Typography>

              <a className="" href="">
                <Typography className="text-[#437ef7]">Register</Typography>
              </a>
            </div>
          </form>
        </div>
      </article>
    </main>
  );
};

export default Login;
