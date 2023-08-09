import React from "react";
import "./EditResume.css";
import {
  Box,
  Collapse,
  FormControlLabel,
  Icon,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CircularProgressBar from "../CircularProgressBar";

const FeedBack = ({ sectionName, sectionData }) => {
  console.log(sectionName, sectionData);
  const [open, setOpen] = React.useState(false);
  const [isArrowRotated, setIsArrowRotated] = React.useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
    setIsArrowRotated((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-1 justify-center">
      <div className=" justify-end feedback-container gap-5">
        <div className="w-full flex justify-between items-center">
          <Typography>{sectionName}</Typography>
          <CircularProgressBar score={sectionName.score} size={50} />
        </div>

        <div className="flex items-end justify-end ">
          <FormControlLabel
            control={
              <IconButton sx={{ padding: "0px" }} onClick={handleChange}>
                <KeyboardArrowDownRoundedIcon
                  sx={{
                    color: "action",
                    transform: isArrowRotated
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </IconButton>
            }
            label="Show"
          />
        </div>
      </div>

      <div>
        <Collapse sx={{ width: "100%" }} in={open}>
          <Paper sx={{ m: 0.5 }} elevation={2}>
            <Box component="svg" sx={{ width: "100%", minHeight: 200 }}></Box>
          </Paper>
        </Collapse>
      </div>
    </div>
  );
};

export default FeedBack;
