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
  console.log(user);
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
            className="h-6 flex justify-center items-center w-full text-center font-semibold text-lg"
            id="personal-details-name"
            placeholder="Full Name"
            maxLength={60}
            spellCheck={false}
            value={fullName}
            onChange={handleChange}
            name="fullname"
            rows={1}
          ></textarea>
          <div className="flex justify-center items-center">
            <textarea
              className="h-6 flex justify-center items-center text-center"
              id="personal-details-name"
              placeholder="City, State"
              maxLength={60}
            ></textarea>
          </div>

          <textarea
            className="h-6 flex justify-center items-center"
            id="personal-details-name"
            placeholder="Email"
            maxLength={60}
            name="email"
            value={email}
            onChange={handleChange}
          ></textarea>
          <div className="mx-2">|</div>
          <textarea
            className="h-6 flex justify-center items-center"
            id="personal-details-name"
            placeholder="Contact"
            maxLength={60}
          ></textarea>
          <div className="mx-2">|</div>
          <textarea
            className="h-6 flex justify-center items-center"
            id="personal-details-name"
            placeholder="Social Links"
            maxLength={60}
          ></textarea>
          <div className="mx-2">|</div>
          <textarea
            className="h-6 flex justify-center items-center"
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
              className="h-6 flex justify-center items-center"
              id="personal-details-name"
              placeholder="Graduation School"
              maxLength={60}
            ></textarea>
            <textarea
              className="h-6 flex justify-center items-center text-right"
              id="personal-details-name"
              placeholder="Location"
              maxLength={60}
            ></textarea>
          </div>
          {/* Grad */}
          <div className="w-full flex justify-between">
            <textarea
              className="h-6 flex justify-center items-center"
              id="personal-details-name"
              placeholder="Degree"
              maxLength={60}
            ></textarea>
            <textarea
              className="h-6 flex justify-center items-center text-left"
              id="personal-details-name"
              placeholder="Major"
              maxLength={60}
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
