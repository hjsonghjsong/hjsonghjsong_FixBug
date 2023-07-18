import { CircularProgress } from "@mui/material";
import React from "react";

const CircularProgressBar = ({ score }) => {
  return (
    <div>
      <CircularProgress
        variant="determinate"
        value={score}
        size={150}
        thickness={5}
        sx={{ color: "#FFAE43" }}
      />
    </div>
  );
};

export default CircularProgressBar;
