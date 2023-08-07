import React from "react";
import "./EditResume.css";
import { TextField } from "@mui/material";

const ResumeEditText = () => {
  return (
    <div className="w-full edit-container">
      <div className="flex flex-col w-full justify-start items-center resume-builder">
        <textarea
          className="h-6 flex justify-center items-center"
          id="personal-details-name"
          placeholder="Full Name"
          maxLength={60}
        ></textarea>
        <textarea
          className="h-6 flex justify-center items-center"
          id="personal-details-name"
          placeholder="Full Name"
          maxLength={60}
        ></textarea>
        <textarea
          className="h-6 flex justify-center items-center"
          id="personal-details-name"
          placeholder="Full Name"
          maxLength={60}
        ></textarea>
      </div>
    </div>
  );
};

export default ResumeEditText;
