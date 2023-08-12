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
      {/* Title */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} container>
          <DynamicWidthInput
            placeholder={
              workExperience?.context === "Project"
                ? "Project Title"
                : "Job Title"
            }
            name="title"
            className="text-left font-semibold"
            value={workExperience?.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex gap-1 justify-end">
            {/* <DatePickerComponent views={["month", "year"]} /> */}
            <DynamicWidthInput
              placeholder="start Date"
              value={workExperience?.start_date}
              className="text-right font-semibold"
            />
            <div>-</div>
            {/* <DatePickerComponent views={["month", "year"]} /> */}
            <DynamicWidthInput
              placeholder="end Date"
              value={workExperience?.end_date}
              className="text-left font-semibold"
            />
          </div>
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <DynamicTextArea
            placeholder="Bullet Points"
            value={bulletPoints}
            className={"items-stretch"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExperienceField;
