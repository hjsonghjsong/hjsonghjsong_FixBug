import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const CircularProgressBar = ({ score, size, fontSize, rounded }) => {
  const [progress, setProgress] = React.useState(0);

  const scoreStyles = (score) => {
    if (score >= 80) {
      return "#24C63D";
    } else if (score < 80 && score >= 50) {
      return "#FFAE43";
    } else if (score < 50) {
      return "#F04438";
    }
  };

  React.useEffect(() => {
    if (score) {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= score ? score : prevProgress + 20
        );
      }, 30);

      return () => {
        clearInterval(timer);
      };
    }
  }, [score]);

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
        value={progress}
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
