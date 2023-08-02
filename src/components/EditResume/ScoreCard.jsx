import { Typography } from "@mui/material";
import React from "react";

const ScoreCard = () => {
  const scoreList = ["organization", "Presentation", "Impact"];
  return (
    <div>
      <Typography variant="h3" sx={{ fontSize: "16px" }}>
        Overview
      </Typography>
      <div></div>
    </div>
  );
};

export default ScoreCard;
