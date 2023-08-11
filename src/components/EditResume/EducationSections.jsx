import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/";
import { MobileDatePicker } from "@mui/x-date-pickers";
import "./EditResume.css";

import { styled } from "@mui/system";
import DynamicWidthInput from "../DynamicWidthInput";
import DatePickerComponent from "../DatePickerComponent";

// const CustomMobileDatePicker = styled(MobileDatePicker)(({ theme }) => ({
//   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     borderColor: "red",
//     fontSize: "16px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "0px",
//   },
//   "& .MuiInputLabel-root.Mui-focused": {
//     color: "red",
//     fontSize: "16px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "0px",
//   },
//   "& .MuiOutlinedInput-input": {
//     padding: "0px 8px",
//     height: "28px",
//     fontSize: "16px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// }));

const EducationSections = () => {
  return (
    <div id="education-information" className="gap-2 flex flex-col">
      <div className="w-full p-1 bg-slate-300 rounded-sm">
        <span className="w-full font-semibold text-lg px-2">Education</span>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center">
            <DynamicWidthInput
              placeholder="Degree"
              name="address"
              className="text-left"
            />
            <div>{",   "}</div>
          </div>

          <DynamicWidthInput
            placeholder="Field of Study"
            name="address"
            className="text-left"
          />
        </div>
        <div className="flex gap-1">
          <DatePickerComponent views={["month", "year"]} />
          <div>-</div>
          <DatePickerComponent views={["month", "year"]} />
        </div>
      </div>
      {/* Grad */}
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center">
            <DynamicWidthInput
              placeholder="University"
              name="university"
              className="text-left"
            />
            <div>{",   "}</div>
          </div>

          <DynamicWidthInput
            placeholder="University Location"
            name="univlocation"
            className="text-left"
          />
        </div>

        {/* gpa */}
      </div>
      <div className="w-full flex justify-between items-center">
        <DynamicWidthInput placeholder="CGPA" />
      </div>
    </div>
  );
};

export default EducationSections;
