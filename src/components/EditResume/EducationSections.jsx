import React from "react";
import { Grid } from "@mui/material";
import DatePickerComponent from "../DatePickerComponent";
import DynamicWidthInput from "../DynamicWidthInput";

const EducationSections = () => {
  return (
    <div id="education-information" className="w-full gap-2 flex flex-col">
      <div className="w-full p-1 bg-slate-300 rounded-sm">
        <span className="w-full font-semibold text-lg px-2">Education</span>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} container sx={{ gap: "8px" }}>
          <div className="flex justify-center items-center">
            <DynamicWidthInput
              placeholder="Degree"
              name="degree"
              className="text-left"
            />
            <div>{", "}</div>
          </div>
          <DynamicWidthInput
            placeholder="Field of Study"
            name="field"
            className="text-left"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex gap-1 justify-end">
            <DatePickerComponent views={["month", "year"]} />
            <div>-</div>
            <DatePickerComponent views={["month", "year"]} />
          </div>
        </Grid>
      </Grid>
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
