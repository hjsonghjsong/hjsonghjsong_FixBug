import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CircularProgressBar from "../CircularProgressBar";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import DownloadIcon from "@mui/icons-material/Download";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

const scoreStyles = (score) => {
  if (score >= 80) {
    return "#24C63D";
  } else if (score < 80 && score >= 50) {
    return "#FFAE43";
  } else if (score < 50) {
    return "#F04438";
  }
};

const cellStyles = (score) => {
  if (score >= 80) {
    return "#F3FFF6";
  } else if (score < 80 && score >= 50) {
    return "#FFFAF2";
  } else if (score < 50) {
    return "#FFEFEE";
  }
};

const ResumeTable = () => {
  const [filesData, setFilesData] = useState([]);
  const files = [
    {
      name: "Vinay.pdf",
      status: "Needs Work",
      score: 10,
      lastModified: "2023-07-28",
    },
    {
      name: "VinaySFSU.pdf",
      status: "On-Target",
      score: 95,
      lastModified: "2023-07-25",
    },
    {
      name: "VinayResume1.pdf",
      status: "On-Track",
      score: 50,
      lastModified: "2023-07-20",
    },
    {
      name: "Ishah.pdf",
      status: "On-Target",
      score: 90,
      lastModified: "2023-07-20",
    },
  ];
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#858C95" }}>Name</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Status</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Score</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Last Modified</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file, index) => (
            <TableRow hover key={index}>
              <TableCell>{file.name}</TableCell>

              <TableCell
                sx={{
                  color: scoreStyles(file.score),
                  fontWeight: "600",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: cellStyles(file.score),
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4px 10px",
                    borderRadius: "128px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: scoreStyles(file.score),
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  />
                  {file.status}
                </Box>
              </TableCell>
              <TableCell>
                <CircularProgressBar
                  score={file.score}
                  size={40}
                  fontSize={10}
                  rounded={true}
                />
              </TableCell>
              <TableCell
                sx={{ color: "#858C95", fontWeight: "500", fontSize: "14px" }}
              >
                {file.lastModified}
              </TableCell>
              <TableCell>
                <IconButton>
                  <EditRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <DeleteRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <DownloadIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResumeTable;
