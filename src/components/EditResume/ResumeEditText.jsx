import React, { useState } from "react";
import "./EditResume.css";
import { Divider, TextField } from "@mui/material";
import { Height, SpaceBar } from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/";
import { useAuth } from "../../Contexts/Auth";

const ResumeEditText = () => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.user_metadata.display_name);
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
          <textarea
            className="h-6 flex justify-center items-center w-full text-center font-semibold text-lg text-field"
            id="personal-details-name"
            placeholder="Full Name"
            maxLength={60}
            spellCheck={false}
            value={fullName}
            onChange={handleChange}
            name="fullname"
          ></textarea>
          <div className="w-full"></div>
          <textarea
            className="h-6 flex justify-center items-center text-center text-field"
            id="personal-details-name"
            placeholder="City, State"
          ></textarea>

          <div className="w-full"></div>
          <TextField></TextField>
          <textarea
            className="text-field"
            id="personal-details-name"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            tabIndex={4}
            maxLength={60}
          ></textarea>
          <div className="mx-2">|</div>
          <textarea
            className="h-6 flex justify-center items-center text-field"
            id="personal-details-name"
            placeholder="Contact"
          ></textarea>
          <div className="mx-2">|</div>
          <textarea
            className="h-6 flex justify-center items-center text-field"
            id="personal-details-name"
            placeholder="Social Links"
            maxLength={60}
          ></textarea>
          <div className="mx-2">|</div>
          <textarea
            className="h-6 flex justify-center items-center text-field"
            id="personal-details-name"
            placeholder="Social Links"
            maxLength={60}
          ></textarea>
        </div>
        <div id="education-information" className="gap-3 flex flex-col">
          <div className="w-full p-1 bg-slate-300 rounded-sm">
            <span className="w-full font-semibold text-lg px-2">Education</span>
          </div>

          <div className="w-full flex">
            <textarea
              className="h-6 flex justify-center items-center text-field"
              id="personal-details-name"
              placeholder="Graduation School"
            ></textarea>
            <textarea
              className="h-6 flex justify-center items-center text-right text-field"
              id="personal-details-name"
              placeholder="Location"
            ></textarea>
          </div>
          {/* Grad */}
          <div className="w-full flex justify-between">
            <textarea
              className="h-6 flex justify-center items-center"
              id="personal-details-name"
              placeholder="Degree"
            ></textarea>
            <textarea
              className="h-6 flex justify-center items-center text-left"
              id="personal-details-name"
              placeholder="Major"
            ></textarea>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  views={["month", "year"]}
                  sx={{ minWidth: "200px", fontSize: "18px" }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditText;
