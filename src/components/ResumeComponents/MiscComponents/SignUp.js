import React, { useState } from "react";
import WebSignUp from '../../Signup/WebSignUp';
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useAuth } from "../../../Contexts/Auth";
import { SendResumeInfo } from "../../../hooks/util";

export default function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [phError, setPhError] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { signUp, session } = useAuth();
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

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (password.length < 8) {
      setPassError(true);
    } else {
      setPassError(false);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePhoneInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 10) {
      setPhone(inputValue);

      setPhError(!/^\d+$/.test(inputValue));
    }
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

  return (
    <div>
      
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
                        <PrimaryButton text="Sign Up" handleButton={handleSubmit}/>
                        
    </div>
  );
}