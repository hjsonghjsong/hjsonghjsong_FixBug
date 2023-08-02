import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const CircularProgressBar = ({ score, size, fontSize, rounded }) => {
  const remainingPercentage = 100 - score;

  const scoreStyles = (score) => {
    if (score >= 80) {
      return "#24C63D";
    } else if (score < 80 && score >= 50) {
      return "#FFAE43";
    } else if (score < 50) {
      return "#F04438";
    }
  };

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={size}
        thickness={5}
        value={100}
      />

      <CircularProgress
        variant="determinate"
        disableShrink
        value={score}
        size={size}
        thickness={5}
        sx={{
          color: scoreStyles(score),
          position: "absolute",
          left: "0",
          strokeLinecap: rounded ? "round" : "",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize,
            fontWeight: "600",
            lineHeight: "44px",
            fontFamily: "inherit",
          }}
        >
          {score}%
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressBar;
