import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CircularProgressBar from "../CircularProgressBar";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import DownloadIcon from "@mui/icons-material/Download";

import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

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

const status = (score) => {
  if (score >= 80) {
    return "On-Target";
  } else if (score < 80 && score >= 50) {
    return "On-Track";
  } else if (score < 50) {
    return "Needs Work";
  }
};

const ResumeTable = ({ filesData }) => {
  const navigate = useNavigate();

  const handleEditClick = (file) => {
    navigate(`/resume/edit?id=${file.id}`, { state: { file } });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#858C95" }}>Name</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Status</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Score</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Created at</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Last Modified</TableCell>
            <TableCell sx={{ color: "#858C95" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filesData?.map((file, index) => (
            <TableRow hover key={index}>
              <TableCell>{file?.id}</TableCell>

              <TableCell
                sx={{
                  color: scoreStyles(file?.score),
                  fontWeight: "600",
                  padding: "0px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: cellStyles(file?.feedback?.score),
                    display: "inline-flex",
                    justifyContent: "start",
                    alignItems: "center",
                    padding: "4px 10px",
                    borderRadius: "128px",
                    width: "110px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: scoreStyles(
                        file?.feedback?.score
                      ),
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  />
                  {status(file?.feedback?.score)}
                </Box>
              </TableCell>
              <TableCell>
                <CircularProgressBar
                  score={file?.feedback?.score}
                  size={40}
                  fontSize={12}
                  rounded={true}
                />
              </TableCell>
              <TableCell
                sx={{ color: "#858C95", fontWeight: "400", fontSize: "14px" }}
              >
                {file?.created_at}
              </TableCell>

              <TableCell
                sx={{ color: "#858C95", fontWeight: "400", fontSize: "14px" }}
              >
                {file?.edited_at}
              </TableCell>
              <TableCell sx={{ paddingLeft: "0px ", paddingRight: "0px" }}>
                <IconButton>
                  <RemoveRedEyeRoundedIcon fontSize="small" />
                </IconButton>

                <IconButton onClick={() => handleEditClick(file)}>
                  <EditRoundedIcon fontSize="small" />
                </IconButton>

                <IconButton>
                  <DownloadIcon fontSize="small" />
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
