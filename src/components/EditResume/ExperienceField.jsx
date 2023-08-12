import React, { useState } from "react";
import DynamicWidthInput from "../DynamicWidthInput";
import DatePickerComponent from "../DatePickerComponent";
import CustomTextArea from "../CustomTextArea";
import { Grid, TextField, TextareaAutosize } from "@mui/material";
import DynamicTextArea from "../DynamicTextArea";

const ExperienceField = ({ workExperience }) => {
  console.log(workExperience);
  const bulletPoints = workExperience?.bullet_points
    ?.map((point) => `• ${point}`)
    .join("\n");

  return (
    <div id="experience-field" className="w-full gap-4 flex flex-col">
      {/* Job Title */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} container>
          <DynamicWidthInput
            placeholder="Job Title"
            name="title"
            className="text-left font-semibold"
            value={workExperience?.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex gap-1 justify-end">
            <DatePickerComponent views={["month", "year"]} />
            <div>-</div>
            <DatePickerComponent views={["month", "year"]} />
          </div>
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <DynamicTextArea placeholder="Bullet Points" value={bulletPoints} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExperienceField;
