import React, { useState } from "react";
import "./EditResume.css";
import { Divider, TextField } from "@mui/material";
import { Height, SpaceBar } from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/";
import { useAuth } from "../../Contexts/Auth";
import EducationSections from "./EducationSections";
import CustomTextArea from "../CustomTextArea";
import DynamicWidthInput from "../DynamicWidthInput";
import ExperienceField from "./ExperienceField";

const ResumeEditText = () => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.user_metadata?.display_name);
  const [address, setAddress] = useState("SF, CA");
  const [contactNumber, setContactNumber] = useState(
    user?.user_metadata?.phone
  );
  const [email, setEmail] = useState(user?.email);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "fullname") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <div className="w-full edit-container">
      <div className="flex flex-col w-full justify-start resume-builder gap-4">
        <div
          id="personals-details-container"
          className="flex flex-wrap justify-center items-center gap-1"
        >
          <DynamicWidthInput
            placeholder="Full name"
            name="fullname"
            value={fullName}
            onChange={handleChange}
            className="text-center w-full"
          />

          <div className="w-full flex justify-center items-center">
            <DynamicWidthInput
              placeholder="Contact"
              name="contact"
              value={contactNumber}
              onChange={handleChange}
              className="text-right w-full"
            />
            <div className="mx-2">|</div>
            <DynamicWidthInput
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              className="text-left w-full"
            />
          </div>

          <div className="w-full flex flex-wrap justify-center items-center">
            <DynamicWidthInput
              placeholder="Email"
              name="address"
              value={address}
              onChange={handleChange}
              className="text-center"
            />
          </div>

          {/* Social Links */}
          <div className="w-full flex justify-center items-center">
            <DynamicWidthInput
              placeholder="Github"
              name="github"
              onChange={handleChange}
              className="text-right"
            />
            <div className="mx-2">|</div>
            <DynamicWidthInput
              placeholder="LinkedIn"
              name="linkedin"
              onChange={handleChange}
              className="text-left"
            />
          </div>
        </div>
        <EducationSections />
        <ExperienceField />
      </div>
    </div>
  );
};

export default ResumeEditText;
