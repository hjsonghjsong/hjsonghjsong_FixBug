import { Box, Skeleton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { resumeList } from "../../hooks/fetchResumeList";
import RenderResumeList from "../ResumeComponents/RenderResumeList";
import ResumeMobile from "./ResumeMobile";
import CircularProgressBar from "../CircularProgressBar";
import "./Resume.css";
const score = 80;

const Resume = () => {
  return (
    <main className="flex flex-grow items-center justify-center">
      <div className="main-box flex flex-col justify-center gap-8 py-3">
        <div className=" flex">
          <h1>Resumes</h1>
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
              <button className="btn-02">Edit Resume</button>
            </div>
            <div>
              <div className="flex flex-col">
                <p>Here are the steps to improvement</p>
              </div>
            </div>
            <div className="score-container flex flex-col items-center justify-center gap-4">
              <CircularProgressBar score={score} />
              <p>Score: {score}%</p>
              <button className="btn-02 w-full">Improve Resume</button>
            </div>
          </div>
        </div>
        <div className="resume-container">
          <Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <ResumeMobile />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                marginBottom: "80px",
                margin: "24px",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    backgroundColor: "white",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <h1>Progress graph here</h1>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Button>
                      <AddIcon sx={{ color: "text.primary" }} />
                      <Typography sx={{ color: "text.primary" }}>
                        CREATE RESUME
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <RenderResumeList resumeList={resumeList} />
          </Box>
        </div>
      </div>
    </main>
  );
};

export default Resume;
