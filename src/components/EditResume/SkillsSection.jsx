import { Grid } from "@mui/material";
import React from "react";
import DynamicTextArea from "../DynamicTextArea";
const SkillsSection = ({ skills }) => {
  console.log("skills", skills);

  const user_skills = skills?.map((point) => `• ${point}`).join("\n");
  return (
    <div className="w-full">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="w-full font-semibold">
            <DynamicTextArea placeholder="Skills" value={user_skills} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsSection;
