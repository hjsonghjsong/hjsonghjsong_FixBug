import React from "react";
import "./EditResume.css";
import { Typography } from "@mui/material";
import CircularProgressBar from "../CircularProgressBar";
import ScoreCard from "./ScoreCard";

const EditResume = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex px-8 items-center gap-8 justify-start h-40 mt-8">
        <div className="h-full analysis-container justify-between">
          <div className="flex flex-col justify-between items-center flex-shrink-0 h-full">
            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
              Resume Analysis
            </Typography>
            <Typography variant="h3">On-Track</Typography>
            <div className="flex items-start gap-4">
              <div className="flex gap-2 justify-center items-center">
                <div className="h-5 w-5 rounded-md bg-[#F04438]"></div>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "normal",
                  }}
                >
                  Needs Work
                </Typography>
              </div>

              <div className="flex gap-2 justify-center items-center">
                <div className="h-5 w-5 rounded-md bg-[#FFAE43]"></div>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "normal",
                  }}
                >
                  Needs Work
                </Typography>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div className="h-5 w-5 rounded-md bg-[#24C63D]"></div>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "normal",
                  }}
                >
                  Needs Work
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <CircularProgressBar score={60} size={120} fontSize={22} />
          </div>
        </div>
      </div>
      <div className="flex px-8 items-center gap-8 justify-center ">
        {/* Scores and bullet points */}
        <div className="h-full analysis-container justify-between p-9 gap-7">
          <ScoreCard />
        </div>
        {/* Edit resume */}
        <div className="h-full w-full analysis-container "></div>
      </div>
    </div>
  );
};

export default EditResume;
