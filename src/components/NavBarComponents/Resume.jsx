import { Box, Divider, Skeleton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { resumeList } from "../../hooks/fetchResumeList";
import RenderResumeList from "../ResumeComponents/RenderResumeList";
import ResumeMobile from "./ResumeMobile";
import CircularProgressBar from "../CircularProgressBar";
import "./Resume.css";
import ResumeTable from "../ResumeTable/ResumeTable";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import { Link } from "react-router-dom";
import Template from "../Templates/Template";

const score = 80;

const scoreStyles = (score) => {
  if (score >= 80) {
    return "#24C63D";
  } else if (score < 80 && score >= 50) {
    return "#FFAE43";
  } else if (score < 50) {
    return "#F04438";
  }
};

const scoreData = {
  Organization: [
    { title: "Score 1", value: 80 },
    { title: "Score 2", value: 60 },
    // ... Add more scores for Organization
  ],
  Presentation: [
    { title: "Score 1", value: 75 },
    { title: "Score 2", value: 50 },
    // ... Add more scores for Presentation
  ],
  Impact: [
    { title: "Score 1", value: 90 },
    { title: "Score 2", value: 70 },
    // ... Add more scores for Impact
  ],
};

const Resume = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center gap-20">
      <div className="main-box flex flex-col justify-center gap-8 py-3">
        <div className=" flex">
          <Typography variant="h1">Resumes</Typography>
        </div>
        <div className="form-box w-full">
          <div className="form-container flex flex-row justify-center gap-8">
            <div className="page-container flex flex-col">
              <div className="page w-full flex flex-row px-2 py-5">
                <div className="flex flex-col w-10 gap-1">
                  <Skeleton
                    sx={{ backgroundColor: "#CBCBCB" }}
                    animation={false}
                    variant="circular"
                    width={30}
                    height={30}
                  />
                  <Skeleton animation={false} width={40} height={14} />
                  <Skeleton animation={false} width={40} height={14} />
                  <Skeleton
                    sx={{ marginTop: "10px" }}
                    animation={false}
                    width={40}
                    height={14}
                  />
                  <Skeleton animation={false} width={40} height={14} />
                  <Skeleton animation={false} width={40} height={14} />
                  <Skeleton
                    sx={{ marginTop: "10px" }}
                    animation={false}
                    width={40}
                    height={14}
                  />
                  <Skeleton animation={false} width={40} height={14} />
                  <Skeleton animation={false} width={40} height={14} />
                </div>
                <div className="flex flex-col align-top items-start mx-3">
                  <Skeleton
                    sx={{ backgroundColor: "#CBCBCB" }}
                    animation={false}
                    width={40}
                    height={14}
                  />
                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton
                    sx={{ marginTop: "10px", backgroundColor: "#CBCBCB" }}
                    animation={false}
                    width={40}
                    height={14}
                  />

                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton
                    sx={{ marginTop: "10px", backgroundColor: "#CBCBCB" }}
                    animation={false}
                    width={40}
                    height={14}
                  />
                  <Skeleton animation={false} width={50} height={14} />

                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton animation={false} width={112} height={14} />
                  <Skeleton animation={false} width={112} height={14} />
                </div>
              </div>
              <SecondaryButton
                text="Edit Resume"
                sx={{ height: "46px", width: "100%", textTransform: "none" }}
              />
            </div>
            <div>
              <div className="flex flex-col">
                <p>Here are the steps to improvement</p>
              </div>
            </div>
            <div className="score-container flex flex-col items-center justify-end gap-4">
              <CircularProgressBar score={score} size={150} fontSize={22} />
              <h1 className="font-semibold">On-Track</h1>
              <SecondaryButton
                text="Improve Resume"
                sx={{ height: "46px", width: "100%", textTransform: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="resume-container">
          <div className="flex justify-between mx-3 my-4">
            <h2 className="text-2xl  ">Resumes</h2>

            <Link>
              <PrimaryButton
                text="Create New Resume"
                icon={<AddIcon />}
                sx={{ textTransform: "none" }}
              />
            </Link>
          </div>
          <Divider />
          <Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <ResumeMobile />
            </Box>
            <ResumeTable />
            {/* Resume templates */}
          </Box>
        </div>
      </div>

      <div className="w-full flex justify-center items-center px-20">
        <div className="w-full temp-container px-20">
          <h2 className="text-2xl  ">Templates</h2>
          <div>
            <Template />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
