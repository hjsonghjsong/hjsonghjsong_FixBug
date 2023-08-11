import React from "react";
import DynamicWidthInput from "../DynamicWidthInput";
import DatePickerComponent from "../DatePickerComponent";
import CustomTextArea from "../CustomTextArea";
import { Grid } from "@mui/material";

const ExperienceField = () => {
  return (
    <div id="experience-field" className="w-full gap-2 flex flex-col">
      <div className="w-full p-1 bg-slate-300 rounded-sm">
        <span className="w-full font-semibold text-lg px-2">Experience</span>
      </div>
      {/* Job Title */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} container>
          <DynamicWidthInput
            placeholder="Job Title"
            name="title"
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

      <div className="w-full flex justify-between items-center">
        {/* Bullets */}
        <CustomTextArea />
      </div>
    </div>
  );
};

export default ExperienceField;
