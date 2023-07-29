import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import CircularProgress from "@mui/material/CircularProgress";
import { IconButton, Tooltip, Box, Typography } from "@mui/material";

const RenderResumeList = ({ resumeList }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ paddingX: "40px" }}>Name</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography sx={{ paddingX: "10px" }}>Date Modified</Typography>
          <Typography sx={{ paddingX: "10px" }}>Rating</Typography>
          <Typography sx={{ paddingX: "10px" }}>Status</Typography>
          <Box sx={{ pr: "6em" }} />
        </Box>
      </Box>
    </Box>
    {resumeList.map((resume) => (
      <Box
        key={resume.id}
        sx={{
          display: "flex",
          border: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          paddingY: "15px",
          m: 3,
          ":hover": {
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ paddingX: "10px" }}>{resume.name}</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography sx={{ paddingX: "10px" }}>{resume.date}</Typography>
            <CircularProgress
              variant="determinate"
              value={resume.rating}
              color="success"
              sx={{ paddingX: "10px" }}
            />
            <Typography sx={{ paddingX: "10px" }}>{resume.status}</Typography>
          </Box>
          <Tooltip title="Preview">
            <IconButton>
              <RemoveRedEyeIcon sx={{ color: "text.primary" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon sx={{ color: "text.primary" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Download">
            <IconButton>
              <DownloadIcon sx={{ color: "text.primary" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    ))}
  </Box>
);

export default RenderResumeList;
